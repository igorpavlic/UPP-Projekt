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

### Pokrivene faze procesa

1. **Faza 1** — Zahtjev i odobrenje budžeta (2 User Tasks + 1 XOR Gateway)
2. **Faza 2** — Obavijest agenciji (1 Service Task + 1 Timer)
3. **Faza 3** — HR screening + Tehnički intervju (2 User Tasks + 2 XOR Gateways)
4. **Faza 4** — Ponuda i odgovor kandidata (2 User Tasks + 1 Timer + 1 XOR Gateway)
5. **Faza 5-6** — IT priprema + Nabava opreme (2 User Tasks paralelno, AND gateway)
6. **Faza 7** — Onboarding + Probni rad (2 User Tasks + 1 XOR Gateway)

---

## Upute za pokretanje

### 1. Pokreni Camunda 8 Self-Managed

Sučelja:
- **Operate**: http://localhost:8080/operate (demo/demo)
- **Tasklist**: http://localhost:8080/tasklist (demo/demo)
- **Zeebe Gateway**: localhost:26500

### 2. Deployaj BPMN model i forme

Koristi **Camunda Modeler** (Desktop aplikacija):
1. Otvori `it-hire-as-is-reduced.bpmn`
2. Klikni **Deploy Process application** → Cluster endpoint: `http://localhost:26500`
3. Klikni **Start instance**

### 3. Pokreni Job Worker

```bash
cd worker
npm install
npm start
```

Worker sluša Zeebe na `localhost:26500` i obrađuje task type `send-agency-notification`.
