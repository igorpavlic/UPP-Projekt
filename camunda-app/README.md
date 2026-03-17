# JGL IT Hiring — Camunda 8 Process App (As-Is reduciran)

## Pregled

Reducirana verzija As-Is modela zapošljavanja IT djelatnika u JGL d.d.,
prilagođena za deployment u Camunda 8 Self-Managed okruženju.

### Što je reducirano u odnosu na puni As-Is model?

| Element | Puni As-Is | Reduciran |
|---------|-----------|-----------|
| Participants | 2 (JGL + Agencija) | 1 (single process) |
| Lanes | 4 (HR, IT voditelj, IT odjel, Nabava) | Bez lane-ova (candidateGroups) |
| Task-ovi | 32 | 10 (9 User + 1 Service) |
| Gateways | 5 (4 XOR + 1 AND) | 6 (4 XOR + 2 AND) |
| Events | 10 (start, end, timer, message) | 7 (1 start, 5 end, 2 timer) |
| Message Flows | 2 (JGL ↔ Agencija) | 0 (agencija simulirana Service Taskom) |
| Subprocess | 1 (Call Activity) | 0 (inline) |

Redukcija je napravljena jer Camunda 8 ne podržava collaboration dijagrame
za execution. Agencija je simulirana Service Taskom s Job Workerom.

### Pokrivene faze procesa

1. **Faza 1** — Zahtjev i odobrenje budžeta (2 User Tasks + 1 XOR Gateway)
2. **Faza 2** — Obavijest agenciji (1 Service Task + 1 Timer)
3. **Faza 3** — HR screening + Tehnički intervju (2 User Tasks + 2 XOR Gateways)
4. **Faza 4** — Ponuda i odgovor kandidata (2 User Tasks + 1 Timer + 1 XOR Gateway)
5. **Faza 5-6** — IT priprema + Nabava opreme (2 User Tasks paralelno, AND gateway)
6. **Faza 7** — Onboarding + Probni rad (2 User Tasks + 1 XOR Gateway)

---

## Struktura projekta

```
camunda-app/
├── it-hire-as-is-reduced.bpmn    ← BPMN model (deployaj u Camundu)
├── forms/
│   ├── form-job-request.form      ← IT voditelj: zahtjev za zapošljavanje
│   ├── form-budget-approval.form  ← Uprava: odobrenje budžeta
│   ├── form-hr-screening.form     ← HR: screening intervju
│   ├── form-tech-interview.form   ← IT voditelj: tehnički intervju
│   ├── form-offer.form            ← HR: priprema ponude
│   ├── form-candidate-response.form ← HR: unos odgovora kandidata
│   ├── form-it-prepare.form       ← IT odjel: kreiranje računa i konfiguracija
│   ├── form-equipment.form        ← Nabava: narudžba opreme
│   ├── form-onboarding.form       ← HR: onboarding prvi dan
│   └── form-probation-eval.form   ← IT voditelj: evaluacija probnog rada
├── worker/
│   ├── index.js                   ← Express.js Job Worker
│   └── package.json
└── README.md
```

---

## Upute za pokretanje

### 1. Pokreni Camunda 8 Self-Managed

```bash
# Preuzmi docker-compose.yaml za Camunda 8
curl -O https://raw.githubusercontent.com/camunda/camunda-platform/main/docker-compose-core.yaml

# Pokreni
docker compose -f docker-compose-core.yaml up -d
```

Sučelja:
- **Operate**: http://localhost:8081 (demo/demo)
- **Tasklist**: http://localhost:8082 (demo/demo)
- **Zeebe Gateway**: localhost:26500

### 2. Deployaj BPMN model i forme

Koristi **Camunda Modeler** (Desktop aplikacija):
1. Otvori `it-hire-as-is-reduced.bpmn`
2. Klikni **Deploy** → Cluster endpoint: `http://localhost:26500`
3. Uključi **Deploy linked resources** — forme će se automatski deployati

Ili putem CLI:
```bash
# Instaliraj zbctl
npm install -g zbctl

# Deployaj
zbctl deploy it-hire-as-is-reduced.bpmn \
  forms/form-job-request.form \
  forms/form-budget-approval.form \
  forms/form-hr-screening.form \
  forms/form-tech-interview.form \
  forms/form-offer.form \
  forms/form-candidate-response.form \
  forms/form-it-prepare.form \
  forms/form-equipment.form \
  forms/form-onboarding.form \
  forms/form-probation-eval.form
```

### 3. Pokreni Job Worker

```bash
cd worker
npm install
npm start
```

Worker sluša Zeebe na `localhost:26500` i obrađuje task type `send-agency-notification`.

### 4. Pokreni procesnu instancu

U **Camunda Tasklist** (http://localhost:8082):
- Klikni **Start process**
- Odaberi **"Zapošljavanje IT djelatnika — As-Is (reduciran)"**
- Popuni formu "Zahtjev za zapošljavanje"

Ili putem CLI:
```bash
zbctl create instance AsIs_ITHire_Reduced \
  --variables '{"candidateName":"Ana Horvat","roleType":"programer","seniority":"mid","salaryRange":3000}'
```

### 5. Prati izvršavanje

- **Operate** (http://localhost:8081): Vidi procesnu instancu, tokene na aktivnim taskovima
- **Tasklist** (http://localhost:8082): Claim i complete User Taskove redom

---

## Process Variables

| Variable | Tip | Postavljeno u | Opis |
|----------|-----|---------------|------|
| candidateName | String | UT_DefineNeed | Ime kandidata |
| roleType | String | UT_DefineNeed | helpdesk / programer / noc_soc |
| seniority | String | UT_DefineNeed | junior / mid / senior |
| salaryRange | Number | UT_DefineNeed | Bruto plaća EUR/mj |
| technicalSkills | String | UT_DefineNeed | Opis traženih vještina |
| approved | Boolean | UT_Approval | Odobrenje uprave |
| hrScreeningPassed | Boolean | UT_HRScreening | Prolaz HR screeninga |
| techInterviewPassed | Boolean | UT_TechInterview | Prolaz tehničkog intervjua |
| offerAccepted | Boolean | UT_CandidateResponse | Kandidat prihvaća ponudu |
| probationPassed | Boolean | UT_ProbationEval | Uspješan probni rad |
| agencyNotified | Boolean | ST_NotifyAgency (worker) | Agencija obaviještena |

---

## REST API endpointi (Job Worker)

| Metoda | URL | Opis |
|--------|-----|------|
| GET | /health | Status workera |
| GET | /api/positions | Lista IT pozicija u JGL-u |
| GET | /api/equipment/:roleType | Profil opreme po poziciji |

---

## Napomene

- Timer eventi koriste kratke intervale za demo (PT30S i PT20S).
  U produkciji bi bili P14D (14 dana) i P5D (5 dana).
- Candidate groups (it_voditelj, hr, uprava, it_odjel, nabava) trebaju se
  kreirati u Camunda Identity ili mapirati putem task assignmenta.
- Za prikaz u seminaru: snimke zaslona iz Operate i Tasklist sučelja.
