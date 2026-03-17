### Sveučilište Jurja Dobrile u Puli

### Prijediplomski sveučilišni studij Informatika

### Kolegij: Upravljanje poslovnim procesima (UPP)  


<p>
  <img src="https://fipu.unipu.hr/_pub/themes_static/unipu2020/fipu/icons/fipu_hr.png" alt="FIPU logo" width="500">
</p>
<br><br>

# Modeliranje poslovnog procesa zapošljavanja IT djelatnika u farmaceutskoj industriji
## Studija slučaja: JGL d.d.


**Autor:** Igor Pavlić 
**Akademska godina:** 2025/2026  
**JMBAG:** 0069012453  


**Datum:** Veljača 2026


---

## Sažetak

Ovaj rad predstavlja sveobuhvatnu analizu i modeliranje poslovnog procesa zapošljavanja IT djelatnika u farmaceutskoj industriji, s fokusom na studiju slučaja JGL d.d., jedne od vodećih hrvatskih farmaceutskih tvrtki. Proces zapošljavanja IT stručnjaka predstavlja kritičnu aktivnost za organizacije koje se oslanjaju na digitalizaciju i automatizirane poslovne procese, posebice u visoko reguliranoj industriji poput farmaceutike.

Istraživanje obuhvaća detaljnu analizu trenutnog stanja procesa (As-Is), identifikaciju ključnih problema i neefikasnosti te razvoj optimiziranog modela budućeg stanja (To-Be). Korištenjem BPMN 2.0 notacije i DMN standarda za poslovne odluke, dokumentiran je kompleksan proces koji uključuje šest različitih dionika kroz sedam glavnih faza: identifikacija potrebe, objava natječaja, selekcijski postupak, donošenje odluke, administrativna priprema, nabava opreme te onboarding novog zaposlenika.

Analiza As-Is stanja identificirala je brojne probleme uključujući ručne i dugotrajne procese odobravanja, nedostatak automatizacije u provjerama budžeta, neučinkovitu komunikaciju između odjela, redundantne aktivnosti u IT pripremi te nedostatak strukturiranog praćenja probnog rada. Primjenom Lean i Six Sigma metodologija, predloženi To-Be model uvodi značajne optimizacije: automatizaciju provjere budžeta putem servisnih zadataka, implementaciju DMN dijagrama za standardizirane odluke, paralelizaciju aktivnosti IT odjela i nabave, uvođenje SLA mehanizama kroz boundary događaje te digitalizaciju formi kroz Camunda 8 platformu.

Kvantitativna analiza pokazuje da predložene optimizacije mogu smanjiti ukupno trajanje procesa za približno 35-40%, reducirati ručne aktivnosti za 50% te poboljšati kvalitetu odabira kandidata kroz standardizirane kriterije evaluacije. Implementacija To-Be modela zahtijeva ulaganje u automatizaciju i obuku osoblja, no dugoročne koristi uključuju značajne uštede vremena HR i IT osoblja, poboljšanu konzistentnost procesa te bolju kandidatsku iskustvo.

---

## Sadržaj

1. [Uvod](#1-uvod)
2. [Identifikacija i analiza poslovnog procesa](#2-identifikacija-i-analiza-poslovnog-procesa)
   - 2.1 [Odabir i opravdanje procesa](#21-odabir-i-opravdanje-procesa)
   - 2.2 [Metodologija prikupljanja podataka](#22-metodologija-prikupljanja-podataka)
   - 2.3 [Ključni dionici procesa](#23-ključni-dionici-procesa)
   - 2.4 [Mapiranje korisničkog iskustva](#24-mapiranje-korisničkog-iskustva-customer-journey-mapping)
3. [Analiza trenutnog stanja procesa (As-Is)](#3-analiza-trenutnog-stanja-procesa-as-is)
   - 3.1 [Pregled As-Is modela](#31-pregled-as-is-modela)
   - 3.2 [Detaljni opis faza procesa](#32-detaljni-opis-faza-procesa)
   - 3.3 [Identifikacija problema i neefikasnosti](#33-identifikacija-problema-i-neefikasnosti)
   - 3.4 [Kvalitativna analiza procesa](#34-kvalitativna-analiza-procesa-waste-analysis)
   - 3.5 [Kvantitativna analiza procesa](#35-kvantitativna-analiza-procesa)
4. [Analiza budućeg stanja procesa (To-Be)](#4-analiza-budućeg-stanja-procesa-to-be)
   - 4.1 [Ciljevi optimizacije](#41-ciljevi-optimizacije)
   - 4.2 [Pregled To-Be modela](#42-pregled-to-be-modela)
   - 4.3 [Ključne promjene i poboljšanja](#43-ključne-promjene-i-poboljšanja)
   - 4.4 [Primjena Lean i Six Sigma pristupa](#44-primjena-lean-i-six-sigma-pristupa)
   - 4.5 [Očekivani rezultati i koristi](#45-očekivani-rezultati-i-koristi)
5. [Zaključak](#5-zaključak)
6. [Izrada process-driven aplikacije u Camunda 8](#6-izrada-process-driven-aplikacije-u-camunda-8)
7. [Literatura](#7-literatura)

---

## 1. Uvod

Digitalna transformacija i automatizacija poslovnih procesa postale su imperativ za moderna poduzeća, a posebice za organizacije u visoko reguliranim industrijama poput farmaceutike. U tom kontekstu, zapošljavanje kvalificiranih IT stručnjaka predstavlja kritičan proces koji izravno utječe na sposobnost organizacije da implementira i održava složene informacijske sustave potrebne za poslovanje u skladu s regulatornim zahtjevima (FDA, 2003; European Commission, 2011; ISPE, 2008).

JGL d.d., osnovana 1991. godine u Rijeci, jedna je od vodećih farmaceutskih kompanija u regiji s ukupno oko 1.200 zaposlenika u 11 zemalja i prihodom od 162 milijuna EUR u 2024. godini, što je rast od 21% u odnosu na prethodnu godinu. Tvrtka posluje u visoko konkurentnom i reguliranom okruženju gdje je učinkovitost internih procesa ključna za održavanje tržišne pozicije. IT infrastruktura JGL-a podržava kritične poslovne funkcije uključujući proizvodnju, upravljanje kvalitetom, R&D aktivnosti, logistiku i regulatory compliance sustave.

Proces zapošljavanja IT djelatnika u JGL-u karakterizira značajna složenost zbog:
- **Specifičnih tehničkih zahtjeva** - potreba za poznavanjem reguliranih sustava (FDA, 2003; European Commission, 2011)
- **Multidisciplinarne koordinacije** - uključenost HR odjela, IT odjela, nabave i uprave
- **Duljine procesa** - prosječno trajanje od identifikacije potrebe do početka rada iznosi 45-60 dana

Uspješno zapošljavanje kvalitetnih IT stručnjaka ima dugoročan utjecaj na:
1. **Tehnološku zrelost organizacije** - sposobnost implementacije naprednih sustava
2. **Operativnu učinkovitost** - smanjenje downtime-a IT sustava, brža rješavanja incidenata
3. **Regulatornu usklađenost** - adekvatna validacija i održavanje kompjuterskih sustava
4. **Konkurentsku prednost** - digitalizacija procesa, analytics, AI/ML primjene

Cilj ovog rada je trojak:
1. **Dokumentirati postojeće stanje** (As-Is) procesa zapošljavanja IT djelatnika koristeći BPMN 2.0 notaciju
2. **Identificirati probleme i mogućnosti za poboljšanje** primjenom strukturiranih metodologija kvalitativne i kvantitativne analize
3. **Razviti optimizirani model** (To-Be) koji implementira najbolje prakse, automatizaciju i standardizaciju

Istraživanje se temelji na prikupljenim podacima iz stvarnih izvora uključujući javno dostupnu dokumentaciju JGL-a, oglase za posao, interview s dionicima procesa te analizu industrije najboljih praksi u farmaceutskom sektoru.

---

## 2. Identifikacija i analiza poslovnog procesa

### 2.1 Odabir i opravdanje procesa

Za predmet analize odabran je **proces zapošljavanja IT djelatnika** u farmaceutskoj tvrtki JGL d.d. s fokusom na tri ključne pozicije:
- **Helpdesk tehničar** (Tier 1/2 IT podrška)
- **Programer** (razvoj poslovnih aplikacija, integracije sustava)
- **NOC/SOC analitičar** (infrastrukturna, mrežna i sigurnosna infrastruktura)

Ovaj proces je odabran zbog sljedećih razloga:

**1. Strategijska važnost za organizaciju**

IT odjel u farmaceutskoj industriji ne predstavlja samo podršku, već strateškog partnera koji omogućava:
- Validaciju kompjuterskih sustava prema 21 CFR Part 11 (FDA, 2003) i EU Annex 11 (European Commission, 2011)
- Upravljanje Electronic Batch Record (EBR) sustavima
- Održavanje Manufacturing Execution Systems (MES)
- Laboratory Information Management Systems (LIMS)
- Enterprise Resource Planning (ERP) sustava

Nedostatak kvalificiranog IT osoblja može rezultirati:
- Kašnjenjima u proizvodnji (downtime košta ~50.000 EUR/sat u farmaceutici)
- Regulatornim nalazima (npr. FDA Warning Letter)
- Sigurnosnim incidentima (ransomware napadi u zdravstvu porasli su za 58% u 2025. prema GuidePoint Security izvještaju, dok je Health-ISAC zabilježio 575 kibernetičkih incidenata u zdravstvenom sektoru tijekom 2025. (GuidePoint Security, 2026; Health-ISAC, 2025))

**2. Procesna složenost**

Proces zapošljavanja IT djelatnika karakterizira:
- **Minimalno 6 različitih dionika**: HR odjel, vanjska agencija, Odjel nabave, IT odjel, Voditelj IT tima, Kandidat (vanjski akter)
- **7 faza izvođenja**: od identifikacije potrebe do završetka probnog rada
- **Višestruka grananja**: različiti procesi za različite pozicije i seniority razine
- **Različiti tipovi aktivnosti**: ručne, poluautomatizirane, vanjski servisi
- **Vremenske ovisnosti**: SLA za odgovore, probni rad (1-3 mjeseca), delivery opreme
- **Složene odluke**: evaluacija kandidata prema višestrukim kriterijima

**3. Prostor za optimizaciju**

Preliminarna analiza ukazuje na značajne mogućnosti poboljšanja:
- Dugotrajnost procesa (45-60 dana)
- Visok postotak ručnih aktivnosti (~70%)
- Nedostatak standardizacije u odlučivanju
- Neefikasna komunikacija između odjela
- Redundantne provjere i čekanja

### 2.2 Metodologija prikupljanja podataka

Podaci o procesu prikupljeni su iz višestrukih izvora koristeći triangulacijsku metodu kako bi se osigurala validnost i pouzdanost informacija.

#### Primarni izvori podataka:

**1. Semi-strukturirani intervjui**

Provedeni su intervjui s dionicima procesa:
- **HR Manager, JGL d.d.** (anonimno, prosinac 2024) - 45 minuta, teme: faze procesa, trajanje, dokumentacija, vanjska suradnja
- **IT System Administrator, JGL d.d.** (anonimno, prosinac 2024) - 30 minuta, teme: tehnička priprema, oprema, konfiguracija
- **Senior Developer** (bivši kandidat, sada zaposlenik) - retrospektivno iskustvo procesa, 20 minuta

Intervjui su provedeni putem Google Meet platforme uz pristanak sudionika. Bilješke su kodirane u kategorije prema fazama procesa.

**2. Analiza oglasa za posao**

Analizirano je 15 oglasa za IT pozicije objavljenih na sljedećim platformama u razdoblju listopad-prosinac 2024:
- **MojPosao.hr**: 8 oglasa (JGL, Pliva, Belupo, Genera)
- **LinkedIn**: 5 oglasa (JGL, multinacionalne farmaceutske tvrtke)
- **Directly on company websites**: 2 oglasa

Iz oglasa su ekstrahovani:
- Potrebne tehničke vještine po pozicijama
- Certifikati i obrazovanje
- Benefit paketi
- Tipični rokovi za prijavu

**3. Javno dostupna dokumentacija**

- **JGL Godišnji izvještaj 2024** (JGL d.d., 2025a) - podaci o broju zaposlenika, IT investicijama, prihodima od 162 mil. EUR
- **JGL Karijere stranica** (JGL d.d., 2025b) - proces prijave, benefiti, organizacijska kultura
- **Hrvatska agencija za nadzor financijskih usluga (HANFA) objave** - financijski izvještaji, strategija

#### Sekundarni izvori podataka:

**4. Industrijska istraživanja i benchmarking**

- Deloitte (2024) Global Human Capital Trends - podaci o digitalnom zapošljavanju
- Gartner (2024) IT Talent Acquisition Research - trendovi u IT regrutaciji
- SHRM (2025) - prosječno trajanje popunjavanja pozicija: 44 dana u SAD-u, a za tehničke IT pozicije i preko 60 dana (SHRM, 2025; Mitratech, 2025)
- IntuitionLabs (2025) - 70% farmaceutskih tvrtki prijavljuje poteškoće u popunjavanju pozicija koje zahtijevaju napredne tehničke vještine

**5. Regulatorna dokumentacija**

- ISPE (2008) GAMP 5 Guide - Good Automated Manufacturing Practice
- FDA (2003) 21 CFR Part 11 - Electronic Records and Signatures
- European Commission (2011) EU GMP Annex 11 - Computerised Systems
- ISO (2022) ISO/IEC 27001 - informacijska sigurnost (relevantno za NOC/SOC pozicije)

#### Etičke smjernice:

Svi sudionici intervjua dali su usmeni pristanak za korištenje podataka u akademske svrhe. Osobni identifikacijski podaci su anonimizirani. Tvrtka JGL d.d. navedena je uz dopuštenje korištenja javno dostupnih informacija.

### 2.3 Ključni dionici procesa

Proces zapošljavanja IT djelatnika uključuje šest ključnih dionika s jasno definiranim ulogama i odgovornostima:

| Dionik | Vrsta | Ključne odgovornosti | Faze uključenosti |
|--------|-------|---------------------|-------------------|
| **HR odjel** | Interni | Koordinacija procesa, screening, ugovori, onboarding | Sve faze (1-7) |
| **Vanjska agencija** | Eksterni | Oglašavanje, sourcing, inicijalni screening | Faza 2-3 |
| **IT voditelj** | Interni | Definiranje tehničkih zahtjeva, tehnički intervjui, evaluacija | Faza 1, 3-4 |
| **IT odjel** | Interni | Kreiranje računa, konfiguracija opreme, tehnička priprema | Faza 6-7 |
| **Odjel nabave** | Interni | Naručivanje IT opreme, licenci, praćenje isporuke | Faza 6 |
| **Kandidat** | Eksterni | Prijava, sudjelovanje u selekciji, onboarding | Faza 2-7 |

**Detaljne uloge dionika:**

**1. HR odjel (vlasnik procesa)**
- Zaprimanje zahtjeva za zapošljavanje od IT voditelja
- Izrada opisa radnog mjesta i specifikacije zahtjeva
- Slanje zahtjeva upravi na odobrenje budžeta
- Koordinacija s vanjskom agencijom
- Organizacija selekcijskih intervjua
- Priprema ponuda i ugovora
- Administrativna priprema (HZMO, HZZO prijave)
- Vođenje onboarding programa
- Praćenje probnog rada

**2. Vanjska agencija za zapošljavanje**
- Primanje specifikacija od HR-a
- Objava oglasa na relevantnim platformama (MojPosao, LinkedIn, HZZ)
- Active sourcing - direktno kontaktiranje kandidata
- Inicijalni screening prema minimalnim kriterijima
- Kreiranje shortliste kandidata
- Posredovanje u komunikaciji s kandidatima

**3. IT voditelj**
- Identifikacija potrebe za novim zaposlenikom
- Definiranje tipa pozicije (Helpdesk/Programer/NOC-SOC)
- Specifikacija tehničkih vještina, certifikata, iskustva
- Provođenje tehničkih intervjua
- Evaluacija tehničkih kompetencija
- Finalna odluka o prihvaćanju/odbijanju kandidata
- Dodjela mentora novom zaposleniku

**4. IT odjel (operativna priprema)**
- Kreiranje Active Directory korisničkog računa
- Kreiranje Microsoft 365 email računa
- Dodjela licenci (M365, security softvera, specifičnih aplikacija)
- Postavljanje pripadnosti sigurnosnim grupama
- Kreiranje pristupa internim sustavima (VPN, ticketing, CMDB, monitoring)
- Konfiguracija laptopa/računala (OS, software, security)
- Testiranje funkcionalnosti
- Registracija opreme u IT Asset Management sustav

**5. Odjel nabave**
- Zaprimanje zahtjeva za nabavu od HR-a
- Provjera specifikacija opreme (laptop, monitori, periferija)
- Provjera dostupnosti na skladištu
- Naručivanje nedostajuće opreme kod dobavljača
- Praćenje isporuke
- Zaprimanje i kontrola kvalitete
- Predaja opreme IT odjelu na konfiguraciju

**6. Kandidat (eksterni akter)**
- Prijava na oglas
- Sudjelovanje u HR screening intervjuu
- Rješavanje tehničkog testa
- Sudjelovanje u tehničkom intervjuu
- Pružanje referenci
- Pregovaranje o uvjetima zaposlenja
- Prihvaćanje/odbijanje ponude
- Sudjelovanje u onboarding programu
- Rad tijekom probnog perioda

### 2.4 Mapiranje korisničkog iskustva (Customer Journey Mapping)

Za potrebe dublje analize procesa, primijenjena je tehnika Customer Journey Mapping iz perspektive kandidata kao "korisnika" usluge zapošljavanja. Ova tehnika omogućava identificiranje pain points i emotion curve kroz proces.

#### Faze korisničkog iskustva kandidata:

**Faza 1: Awareness (Svjesnost)**
- **Touchpoint**: Oglas na MojPosao.hr ili LinkedIn
- **Akcija**: Kandidat čita oglas i odlučuje prijaviti se
- **Očekivanja**: Jasan opis pozicije, plaće, benefita
- **Emocija**: Entuzijazam (+2), ali i nesigurnost ako oglas nedostaje detalja (-1)
- **Pain point**: Nejasni tehnički zahtjevi, nedostaje range plaće

**Faza 2: Application (Prijava)**
- **Touchpoint**: Aplikacijska forma na web stranici agencije
- **Akcija**: Prijava životopisa i motivacijskog pisma
- **Očekivanja**: Brz i jednostavan proces prijave
- **Emocija**: Optimizam (+1)
- **Pain point**: Dugotrajne forme, duplo unošenje podataka (CV + ručni unos)

**Faza 3: Screening (Čekanje)**
- **Touchpoint**: Email potvrda primitka prijave
- **Akcija**: Čekanje poziva na intervju
- **Očekivanja**: Odgovor unutar 7 dana
- **Emocija**: Anksioznost (-1), padajuća motivacija nakon 2 tjedna (-2)
- **Pain point**: Dugo čekanje bez povratne informacije (prosječno 10-14 dana)

**Faza 4: HR Interview (Prvi kontakt)**
- **Touchpoint**: Telefonski/video poziv od HR-a
- **Akcija**: HR screening intervju (30-45 min)
- **Očekivanja**: Profesionalan i prijateljski razgovor
- **Emocija**: Nervoza prije intervjua (-1), olakšanje nakon pozitivnog feedbacka (+2)
- **Pain point**: Nejasna očekivanja o sadržaju razgovora

**Faza 5: Technical Test (Evaluacija)**
- **Touchpoint**: Email s linkom na tehnički test
- **Akcija**: Rješavanje tehničkog zadatka (1-3 sata)
- **Očekivanja**: Realan i relevantan test za poziciju
- **Emocija**: Stres (-2), zadovoljstvo ako je test fer (+1)
- **Pain point**: Preopsežni testovi, zastarjele tehnologije u zadatku

**Faza 6: Technical Interview (Tehnički razgovor)**
- **Touchpoint**: Poziv na tehnički intervju s IT voditeljem
- **Akcija**: Dubinska tehnička evaluacija (45-60 min)
- **Očekivanja**: Dvostrani razgovor, ne samo testiranje
- **Emocija**: Visok stres (-2), uzbuđenje ako je pozitivan razgovor (+3)
- **Pain point**: Arogantni intervjueri, trivia pitanja umjesto problem-solving

**Faza 7: Offer (Ponuda)**
- **Touchpoint**: Email ili poziv s ponudom za zaposlenje
- **Akcija**: Pregled uvjeta, pregovaranje
- **Očekivanja**: Transparentna ponuda, prostor za pregovor
- **Emocija**: Velika sreća (+4)
- **Pain point**: Niska ponuda nakon dugog procesa, take-it-or-leave-it pristup

**Faza 8: Onboarding (Prvi dan)**
- **Touchpoint**: Dolazak u ured, primanje opreme
- **Akcija**: Upoznavanje s timom, setup radnog mjesta
- **Očekivanja**: Organiziran welcome, spremna oprema
- **Emocija**: Uzbuđenje (+2), frustracija ako oprema nije spremna (-3)
- **Pain point**: Nefunkcionirajući računi, nedostaje oprema, neorganiziran onboarding

**Emotion Curve (skala -4 do +4):**

```
 +4 |                    ●(Offer)
    |
 +3 |                         ●(Good tech interview)
    |
 +2 | ●(Oglas)  ●(HR OK)              
    |
 +1 |     ●(Prijava)         ●(Test OK)     ●(Prvi dan OK)
    |
  0 |________________________________________________________
    |
 -1 |          ●(Čekanje)                 
    |
 -2 |                   ●(Dugačak test)  ●(Stres intervju)   ●(Oprema nije spremna)
    |
 -3 |
    |
 -4 |
```

Kritični touchpoints gdje JGL gubi kandidate (drop-off points):
1. **Nakon prijave** - 40% kandidata ne dobije nikakav feedback unutar 14 dana
2. **Nakon tehničkog testa** - 25% odustaje zbog preopsežnih testova (>4 sata)
3. **Nakon ponude** - 15% odbija ponudu zbog niske plaće ili loših uvjeta

---

## 3. Analiza trenutnog stanja procesa (As-Is)

### 3.1 Pregled As-Is modela

As-Is model procesa zapošljavanja IT djelatnika u JGL-u modeliran je koristeći BPMN 2.0 notaciju. Model prikazuje stvarno stanje izvođenja procesa, uključujući sve identificirane aktivnosti, dionike, grananja i events.

**Ključne karakteristike As-Is modela:**

- **Tip modela**: Collaboration dijagram s 2 participanta (JGL i Vanjska agencija)
- **Broj aktivnosti**: 27 task elemenata (20 u JGL procesu + 3 u procesu agencije + 4 u potprocesu pripreme radnog mjesta)
- **Broj gatewaya**: 3 exclusive gateways (Odobreno?, Oprema dostupna?, Kandidat prihvaća?), 2 parallel gateways (split + join za pripremu)
- **Broj događaja**: 3 start eventa (JGL, Agencija, Priprema), 5 end evenata, 2 timer intermediate catch eventa, 2 message intermediate catch eventa, 2 message flow-a
- **Broj staza (lanes)**: 4 staze unutar JGL participanta
- **Broj data objekata**: Dokumenti koji se generiraju tijekom procesa opisani su u tekstu (zahtjev za zapošljavanje, opis radnog mjesta, shortlista kandidata, evaluacijski formular, ugovor, IT setup checklist)
- **Ukupno trajanje**: 45-60 dana (optimistički scenarij 35 dana, pesimistički 75 dana)

**Glavni tokovi procesa:**

1. **Happy path** (kandidat prihvaća ponudu): Start → Faza 1-7 → End (Hired)
2. **Budžet odbijen**: Start → Faza 1 → Odobrenje NO → End (Not Approved)
3. **Kandidat odbija ponudu**: Start → Faza 1-4 → Ponuda odbijena → End (Offer Declined)

**Struktura participanata:**

```
┌─────────────────────────────────────────────────────┐
│ JGL                                                 │
│ ┌─────────────────────────────────────────────────┐ │
│ │ HR odjel                                        │ │
│ │ [Koordinacija, screening, ugovori]              │ │
│ └─────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────┐ │
│ │ IT voditelj                                     │ │
│ │ [Tehnički zahtjevi, intervjui]                  │ │
│ └─────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────┐ │
│ │ IT odjel                                        │ │
│ │ [Priprema računala i računa]                    │ │
│ └─────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Nabava                                          │ │
│ │ [Nabava opreme]                                 │ │
│ └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ Vanjska agencija                                    │
│ [Oglašavanje, screening, shortlist]                 │
└─────────────────────────────────────────────────────┘
```

### 3.2 Detaljni opis faza procesa

#### Faza 1: Identifikacija potrebe za zapošljavanjem (3-5 dana)

**Dionici**: IT voditelj, HR odjel, Uprava

**Sekvenca aktivnosti:**

1. **Pokretanje procesa** (Start Event)
   - Trigger: IT voditelj identificira potrebu (povećanje opsega posla, odlazak zaposlenika, novi projekt)
   - Primjer: "Due to migration to SAP S/4HANA, need 2x SAP ABAP Developers"

2. **Zaprimanje zahtjeva od IT voditelja** (Task - HR)
   - HR prima formalni zahtjev putem emaila ili internog ticketing sustava
   - Input: Nestrukturirani zahtjev

3. **Definiranje potreba** (Task - IT voditelj)
   - IT voditelj specificira:
     - Tip pozicije: Helpdesk tehničar / Programer / NOC/SOC analitičar
     - Seniority: Junior / Mid / Senior
     - Tehničke vještine i certifikati
     - Broj izvršitelja (FTE)
   - Output: **Data Object "Zahtjev za zapošljavanje"**

4. **Izrada opisa radnog mjesta** (Task - HR)
   - HR kreira strukturiran opis:
     - Job title
     - Odgovornosti i zadaci
     - Potrebne vještine (must-have vs nice-to-have)
     - Certifikati i obrazovanje
     - Plaćni raspon
     - Benefiti
   - Output: **Data Object "Opis radnog mjesta"**

5. **Slanje zahtjeva na odobrenje upravi** (Task - HR)
   - HR šalje zahtjev direktoru/upravi s:
     - Opravdanje potrebe
     - Budžetski impact (~80.000 EUR godišnji trošak po IT djelatniku)
     - ROI projekcija (ako je relevantno)

6. **Odobrenje uprave?** (Exclusive Gateway)
   - **IF Odobreno = DA**: Proces nastavlja (Faza 2)
   - **IF Odobreno = NE**: **End Event "Odbijeno / stop"**
   - Prosječno vrijeme odobrenja: 2-5 dana
   - Success rate: ~85% zahtjeva bude odobreno

**Trenutni problemi u Fazi 1:**
- Nestrukturirani zahtjevi od IT voditelja (nedostaju ključni podaci)
- Ručno odobrenje uprave (email ping-pong)
- Nema automatske provjere budžeta
- Nejasni kriteriji za odobrenje

#### Faza 2: Objava natječaja i prikupljanje prijava (14-21 dan)

**Dionici**: HR odjel, Vanjska agencija

**Sekvenca aktivnosti:**

7. **Slanje zahtjeva agenciji** (Send Task - Message Flow)
   - HR proslijeđuje opis radnog mjesta vanjskoj recruitment agenciji
   - Agencija: Manpower, Adecco, ili specijalizirane IT agencije (Devōt, Span)
   - Channel: Email + Excel attachment

8. **Agencija zaprimanja zahtjeva** (Message Catch Event - Agencija)

9. **Objava oglasa** (Task - Agencija)
   - Agencija objavljuje oglas na:
     - **MojPosao.hr**: Besplatna/premium objava (premium košta ~2.000 HRK/mjesec)
     - **LinkedIn**: Sponsored job post (~1.500 HRK)
     - **HZZ (Hrvatski zavod za zapošljavanje)**: Besplatno, obavezno po zakonu
     - **Specijalizirani portali**: dev.to, StackOverflow Jobs (za developere)
     - **Vlastita stranica tvrtke**: karijera.jgl.hr
   - Trajanje oglasa: 14-21 dan

10. **Active sourcing** (Task - Agencija)
    - Agencija direktno kontaktira potencijalne kandidate:
      - LinkedIn InMail kampanje
      - Pretraživanje baza CV-a
      - Headhunting (posebno za senior pozicije)

11. **Prikupljanje prijava** (Task - Agencija)
    - Kandidati se prijavljuju putem:
      - Online forma na stranici agencije
      - Direktan email
      - MojPosao platforme
    - Prosječan broj prijava:
      - Helpdesk: 30-50 prijava
      - Programer: 20-40 prijava (ovisno o tech stacku)
      - NOC/SOC: 15-25 prijava

12. **Inicijalni screening** (Task - Agencija)
    - Agencija provjerava minimalne kriterije:
      - Formalno obrazovanje (VSS informatike ili ekvivalent)
      - Radno iskustvo (godine u IT-u)
      - Osnovne tehničke vještine
      - Poznavanje hrvatskog/engleskog jezika
    - Odbacivanje ~60% prijava koje ne zadovoljavaju minimume

13. **Kreiranje shortliste** (Task - Agencija)
    - Agencija kreira shortlist:
      - Top 5-10 kandidata
      - Rangirani prema relevantnosti
      - S napomenama o strengths/weaknesses
    - Output: **Data Object "Shortlist kandidata"**

14. **Slanje shortliste JGL-u** (Send Task - Message Flow)

15. **HR zaprimanje shortliste** (Message Catch Event - HR)

**Trenutni problemi u Fazi 2:**
- Dugo trajanje (14-21 dan čekanja)
- Kvaliteta screeninga agencije je varijabilna
- Agencija ne razumije dublje tehničke zahtjeve
- Gubitak kvalitetnih kandidata koji pronađu drugi posao u međuvremenu

#### Faza 3: Selekcijski postupak (7-14 dana)

**Dionici**: HR odjel, IT voditelj

**Sekvenca aktivnosti:**

16. **Zakazivanje intervjua** (Task - HR)
    - HR kontaktira kandidate sa shortliste
    - Zakazivanje HR screeninga (telefonski/video)

17. **HR screening intervju** (Task - HR)
    - **Trajanje**: 30-45 minuta
    - **Format**: Telefonski ili Google Meet/Zoom
    - **Sadržaj**:
      - Provjera motivacije
      - Razgovor o kulturalnoj kompatibilnosti
      - Validacija podataka iz CV-a (provjera employment gap-ova)
      - Razgovor o očekivanjima (plaća, beneficije, radno vrijeme, remote/office)
      - Provjera dostupnosti (notice period kod trenutnog poslodavca)
    - **Evaluacija**: Subj ektivna ocjena 1-5, napomene
    - **Success rate**: ~70% kandidata prolazi HR screening

18. **Tehnički test** (Task - IT voditelj)
    - **Trajanje**: 1-3 sata
    - **Format** prema poziciji:
      - **Helpdesk**: Simulacija rješavanja user ticketa, troubleshooting scenariji (AD reset, VPN problemi, hardware troubleshooting)
      - **Programer**: 
        - Coding challenge (HackerRank, Codility platform)
        - Live coding session (pair programming)
        - Code review zadatak (review existing buggy code)
        - Primjer: "Build REST API for patient data with authentication"
      - **NOC/SOC**: 
        - Analiza mrežnih logova
        - Identificiranje sigurnosnih incidenata iz SIEM alerta
        - Network design zadatak
    - **Evaluacija**: Numerička ocjena 0-100
    - **Threshold**: Helpdesk ≥60, Programer ≥75, NOC/SOC ≥70

19. **Tehnički intervju s voditeljem IT tima** (Task - IT voditelj)
    - **Trajanje**: 45-60 minuta
    - **Format**: Uživo ili video
    - **Sadržaj**:
      - Dubinska provjera tehničkih znanja (system design, architecture)
      - Diskusija o prethodnim projektima
      - Behavioral pitanja (conflict resolution, working under pressure)
      - Procjena sposobnosti za timski rad
      - Q&A (kandidat pita o tech stacku, projektima, team strukturi)
    - **Evaluacija**: Numerička ocjena 0-100 + fit/no-fit odluka

20. **Provjera referenci** (Task - HR)
    - HR kontaktira prethodne poslodavce (2 reference)
    - Provjera:
      - Uloga i trajanje zaposlenja
      - Performanse i achievements
      - Razlozi odlaska
      - Red flags (attendance issues, conflicts)
    - Background check (opciono za senior pozicije)

**Trenutni problemi u Fazi 3:**
- Različiti kriteriji ocjenjivanja između intervjuera (subjektivnost)
- Nema standardiziranih scorecards
- Dugotrajnost (selekcija 5 kandidata traje 2 tjedna)
- Kandidati dobiju druge ponude u međuvremenu (20% drop-out rate)

#### Faza 4: Donošenje odluke i ponuda (3-5 dana)

**Dionici**: HR odjel, IT voditelj, Uprava

**Sekvenca aktivnosti:**

21. **Evaluacija kandidata** (Task - HR + IT voditelj)
    - Sastanak selekcijske komisije
    - Evaluacija prema kriterijima:
      - HR screening score (20%)
      - Tehnički test score (30%)
      - Tehnički intervju score (40%)
      - Reference check (10%)
    - Rangiranje kandidata

22. **Odluka o ponudi?** (Exclusive Gateway)
    - **IF** najbolji kandidat zadovoljava sve kriterije → Priprema ponude
    - **IF** niti jedan kandidat nije prihvatljiv → Odbijanje svih, restart procesa (back to Faza 2)

23. **Priprema ponude za zaposlenje** (Task - HR)
    - HR priprema formalnu ponudu:
      - Pozicija i radno mjesto
      - Početni datum
      - Bruto plaća (osnovica + bonus)
      - Benefiti (health insurance, meal allowance, education budget)
      - Probni rad (3 mjeseca za junior, 6 mjeseci za senior)
    - Draft ugovora o radu

24. **Slanje ponude kandidatu** (Send Task - Message Flow)
    - Email s ponudom + PDF prilog
    - Rok za odgovor: 5 radnih dana

25. **Timer Event: Čekanje odgovora** (5 dana SLA)

26. **Primanje odgovora od kandidata** (Message Catch Event)

27. **Kandidat prihvaća?** (Exclusive Gateway)
    - **IF DA**: Proces nastavlja (Faza 5)
    - **IF NE**: **End Event "Ponuda odbijena"** → Ponuda next best kandidatu ili restart

28. **Obavještavanje neodabranih kandidata** (Task - HR)
    - Slanje rejection emaila svim ostalim kandidatima

**Trenutni problemi u Fazi 4:**
- Nema standardiziranog scoring modela
- Subjektivna odluka komisije
- Kandidati često dobiju counter-offer od trenutnog poslodavca (15% slučajeva)
- Nema automatskog reminders za odgovor

#### Faza 5: Administrativna priprema (5-10 dana prije prvog dana)

**Dionici**: HR odjel

**Sekvenca aktivnosti:**

29. **Priprema i potpisivanje ugovora o radu** (Task - HR)
    - Finalizacija ugovora
    - Sastanak s kandidatom za potpis
    - Arhiviranje u HR sustav

30. **Prikupljanje dokumentacije** (Task - HR)
    - OIB (osobni identifikacijski broj)
    - Preslika osobne iskaznice
    - Potvrda o zdravstvenom osiguranju
    - Diploma/svjedodžbe
    - Potvrda o nekažnjavanju (za određene pozicije)

31. **Prijava na HZMO i HZZO** (Task - HR)
    - Prijava na Hrvatski zavod za mirovinsko osiguranje
    - Prijava na Hrvatski zavod za zdravstveno osiguranje
    - e-Građani sustav

32. **Kreiranje evidencije u HR sustavu** (Task - HR)
    - Unos podataka u HRIS (SAP SuccessFactors ili lokalni sustav)
    - Kreiranje personnel file

33. **Slanje zahtjeva IT odjelu za kreiranje korisničkih računa** (Task - HR)
    - Email zahtjev s podacima:
      - Ime, prezime, datum rođenja
      - Pozicija
      - Odjel
      - Voditelj
      - Datum početka rada

34. **Slanje zahtjeva Odjelu nabave za naručivanje opreme** (Task - HR)
    - Email zahtjev s specifikacijom:
      - Tip pozicije (određuje hardware package)
      - Datum kad oprema mora biti spremna

35. **Priprema radnog mjesta** (Task - HR/Facilities)
    - Rezervacija stola i stolice
    - Kreiranje ID kartice/pristupne kartice

**Trenutni problemi u Fazi 5:**
- Email-based requests (nema tracking)
- IT i Nabava često ne dobiju zahtjev na vrijeme
- Ručno unošenje podataka u multiple sustave (HRIS, HZMO, HZZO)

#### Faza 6: Nabava opreme i IT priprema (5-14 dana, paralelno s Fazom 5)

**Dionici**: Odjel nabave, IT odjel

**Parallel Gateway** - Nabava i IT priprema kreću paralelno

**Grana A: Nabava opreme**

36. **Zaprimanje zahtjeva za nabavu opreme** (Task - Nabava)

37. **Provjera specifikacija opreme prema tipu radnog mjesta** (Task - Nabava)
    - Standardni paketi po poziciji (vidi tablicu ispod)

38. **Provjera inventara - Oprema dostupna?** (Exclusive Gateway)
    - **IF DA** → Rezervacija opreme sa skladišta
    - **IF NE** → Narudžba opreme

39A. **Rezervacija opreme** (Task - Nabava)
    - Označavanje u inventory sustavu

39B. **Naručivanje opreme** (Task - Nabava)
    - Kreiranje purchase ordera
    - Slanje dobavljačima (Emcotec, ELMARK, Campus)
    - Delivery time: 5-10 dana

40. **Timer Event: Čekanje isporuke** (prosjek 7 dana)

41. **Praćenje isporuke** (Task - Nabava)
    - Tracking broj
    - Komunikacija s dobavljačem

42. **Zaprimanje i kontrola kvalitete** (Task - Nabava)
    - Raspakiranje
    - QC check (ispravnost, kompletan kit)

43. **Predaja opreme IT odjelu** (Task - Nabava)
    - Output: **Data Object "Narudžba opreme"**

**Tipična oprema po poziciji:**

| Pozicija | Hardware | Software | Trošak |
|----------|----------|----------|--------|
| **Helpdesk** | Laptop srednje klase (i5, 16GB RAM, 512GB SSD)<br>2x 24" monitor<br>Docking station<br>Headset s mikrofonom | MS 365 (Business Standard)<br>TeamViewer/AnyDesk<br>Ticketing klijent (Jira Service Desk)<br>RMM alati (ManageEngine) | ~1.500 EUR hardware<br>~300 EUR/god software |
| **Programer** | Laptop visoke klase (i7/Ryzen 7, 32GB RAM, 1TB SSD)<br>2-3x 27" monitor<br>Ergonomska tipkovnica i miš<br>Docking station | IDE (VS Code, JetBrains suite)<br>Git<br>Docker Desktop<br>Postman<br>Dev licenses | ~2.500 EUR hardware<br>~500 EUR/god software |
| **NOC/SOC** | Workstation ili high-end laptop<br>4x 24" monitor<br>Headset<br>UPS backup | SIEM klijenti<br>Network monitoring (PRTG, Zabbix)<br>Wireshark<br>VPN clients<br>Security tools | ~3.000 EUR hardware<br>~800 EUR/god software |

**Grana B: IT priprema**

44. **Zaprimanje zahtjeva za kreiranje korisničkih računa** (Task - IT)

45. **Call Activity: Priprema radnog mjesta** (Subprocess - IT)

Subprocess uključuje sljedeće aktivnosti:

45.1. **Kreiranje Active Directory korisničkog računa** (Task - IT)
   - Username format: ime.prezime
   - Automatska dodjela u Security Groups prema poziciji
   - Postavljanje inicijalnog passworda

45.2. **Kreiranje email računa (Exchange/Microsoft 365)** (Task - IT)
   - Email: ime.prezime@jgl.hr
   - Mailbox size: 50GB standard

45.3. **Dodjela Microsoft 365 licenci** (Task - IT)
   - Business Standard ili E3 (ovisno o potrebama)
   - Teams, SharePoint, OneDrive

45.4. **Postavljanje članstva u sigurnosnim grupama** (Task - IT)
   - AD groups prema odjelu
   - VPN access group
   - Application access groups (SAP, MES, LIMS)

45.5. **Kreiranje pristupa internim sustavima** (Task - IT)
   - VPN račun (Cisco AnyConnect ili FortiClient)
   - Ticketing sustav (Jira)
   - CMDB pristup
   - Monitoring dashboards (Grafana)
   - Dokumentacija (Confluence)

45.6. **Konfiguracija laptopa** (Task - IT)
   - Instalacija OS-a (Windows 11 Enterprise ili Ubuntu 22.04 za devove)
   - Enrollment u MDM (Microsoft Intune)
   - Domain join

45.7. **Instalacija potrebnog softvera** (Task - IT)
   - Prema poziciji (IDE, SIEM clients, monitoring tools)
   - Office 365
   - Security software

45.8. **Konfiguracija sigurnosnih postavki** (Task - IT)
   - BitLocker disk encryption
   - Antivirus (Windows Defender + Malwarebytes)
   - Firewall rules
   - Password policy

45.9. **Testiranje opreme i funkcionalnosti** (Task - IT)
   - Provjera svih pristupa
   - Test VPN konekcije
   - Test emaila

45.10. **Registracija opreme u sustav za upravljanje IT imovinom** (Task - IT)
   - Asset tag
   - Unos u CMDB (ServiceNow ili Excel, ovisno o zrelosti)
   - Dodjela zaposleniku

**Parallel Join Gateway** - Čeka završetak obje grane (IT + Nabava)

**Trenutni problemi u Fazi 6:**
- Nabava i IT ne komuniciraju dobro (oprema stigne, ali IT nije spreman)
- Ručna konfiguracija laptopa (4-6 sati po laptopu)
- Nema automatiziranog provisioninga korisnika
- Često oprema nije spremna prvi dan (40% slučajeva)

#### Faza 7: Onboarding novog djelatnika (Prvi dan + 1-3 mjeseca probnog rada)

**Dionici**: HR odjel, IT odjel, IT voditelj

**Aktivnosti prvog dana:**

46. **Prvi dan - Dolazak i registracija** (Task - HR)
    - Check-in na recepciji
    - Upoznavanje s HR timom
    - Potpisivanje preostalih dokumenata (NDA, Code of Conduct, GDPR consent)

47. **Predaja IT opreme** (Task - IT)
    - Laptop + periferija
    - Uvod u korištenje
    - Postavljanje lozinki
    - Provjera pristupa sustavima

48. **Obilazak ureda** (Task - HR)
    - Tour po uredu
    - Upoznavanje s kolegama
    - Safety briefing

49. **Upoznavanje s voditeljem tima** (Task - IT voditelj)
    - Welcome meeting
    - Dodjela mentora
    - Pregled početnih zadataka

50. **Edukacija o sigurnosnim pravilima** (Task - IT/HR)
    - Information Security Policy
    - Clean desk policy
    - Incident reporting procedure
    - GDPR training

**Aktivnosti tijekom probnog rada:**

51. **Strukturirana edukacija prema onboarding planu** (Ongoing)
    - Week 1: Upoznavanje s alatima i sustavima
    - Week 2-4: Shadowing mentora
    - Month 2: Samostalni zadaci uz superviziju
    - Month 3: Puna autonomija

52. **Praćenje napretka** (Ongoing - Mentor)
    - Daily check-ins (prvi tjedan)
    - Weekly 1-on-1 s mentorom
    - Monthly review s voditeljem

53. **Check-in sastanci s voditeljem** (Recurring Task)
    - Tjedni ili dvotjedni sastanci
    - Feedback i Q&A

54. **Evaluacija na kraju probnog perioda** (Task - IT voditelj + HR)
    - Formalna evaluacija performansi
    - Ocjena tehničkih vještina
    - Ocjena fit-a u tim
    - Odluka: nastavak zaposlenja ili raskid ugovora

55. **Odluka?** (Exclusive Gateway)
    - **IF** Prošao probni rad → **End Event "Uspješno zaposlenje"**
    - **IF** Nije prošao → **End Event "Raskid ugovora"**

**Trenutni problemi u Fazi 7:**
- Nestrukturirani onboarding (ovisi o mentoru)
- Nema formalnog onboarding checklista
- Oprema često nije funkcionalna prvi dan (late order arrivals, account lockouts, missing licenses)
- Nema praćenja onboarding metrika (time-to-productivity)

### 3.3 Identifikacija problema i neefikasnosti

Analiza As-Is modela identificirala je sljedeće kategorije problema:

#### 3.3.1 Problemi procesne učinkovitosti

**1. Predugo trajanje procesa (45-60 dana)**

- **Root cause**: Sekvencijalno izvođenje faza koje bi mogle biti paralelne
- **Impact**: 
  - Gubitak kvalitetnih kandidata (20% drop-out rate)
  - Produktivnost gap (IT pozicije su urgentne, delay košta 500-1.000 EUR/dan u produktivnosti)
- **Kvantifikacija**: 
  - Benchmark prosječno vrijeme u IT industriji: 44 dana (SHRM, 2025), za specijalizirane tehničke pozicije i preko 60 dana (Mitratech, 2025)
  - JGL trenutno: 52 dana (median)
  - **Gap: +8 dana (18% sporije od benchmarka za standardne IT pozicije)**

**2. Visok postotak ručnih aktivnosti (70%)**

Procenat aktivnosti koje zahtijevaju ručni unos ili odobrenje:
- Odobrenje budžeta (email odobrenje od uprave)
- Komunikacija s agencijom (email exchange)
- Zakazivanje intervjua (ručni call/email)
- Evaluacija kandidata (manualni scoring)
- IT provisioning (ručna konfiguracija)
- Onboarding checklist (ručno praćenje)

**Impact**: 
- Bottleneck u HR odjelu (1 HR osoba može procesirati max 3 kandidata istovremeno)
- Greške u ručnom unosu (5-10% error rate u account creation)

**3. Nedostatak standardizacije**

- **Evaluacija kandidata**: Različiti intervjueri koriste različite kriterije
- **Tehnički testovi**: Nema standardiziranog test seta (subjektivnost)
- **Ponude**: Plaćni raspon nije jasno definiran (ad-hoc pregovaranje)
- **Onboarding**: Ovisi o kvaliteti mentora

**Impact**:
- Varijabilna kvaliteta odabira
- Nekonzistentna kandidatska iskustva
- Legal risk (diskriminacija ako kriteriji nisu jasni)

#### 3.3.2 Problemi komunikacije i koordinacije

**4. Silos mentalitet između odjela**

- HR i IT ne komuniciraju dovoljno rano
- Nabava često saznaje prekasno (oprema nije spremna na vrijeme)
- IT voditelj nije uključen u definiranje budžeta

**Primjer problema**:
```
Dan -10: HR šalje zahtjev Nabavi za laptop
Dan -5: Nabava naručuje laptop (nije na stanju)
Dan 0: Prvi dan novog zaposlenika
Dan +3: Laptop stiže (zaposlenik 3 dana bez računala!)
```

**5. Prekidi u toku informacija**

- **Email kao primarni kanal**: Gube se informacije, nema auditnog traga
- **Nema centralizirane baze znanja**: Novi HR zaposlenik mora sve naučiti "word of mouth"
- **Dokumentacija u silosima**: 
  - HR ima svoje Google Drive foldere
  - IT ima svoje Confluence
  - Nabava ima Excel tablice

**6. Vanjska agencija kao bottleneck**

- Agencija nije dovoljno upoznata s tehničkim zahtjevima
- Kvaliteta screeninga je varijabilna (20-30% kandidata sa shortliste nisu relevantni)
- Feedback loop nije zatvoren (agencija ne dobiva feedback što je bilo dobro/loše)

#### 3.3.3 Problemi resursa i troškova

**7. Visoki troškovi zapošljavanja**

Prosječni trošak zapošljavanja jednog IT djelatnika u JGL-u:

| Stavka | Trošak (EUR) |
|--------|--------------|
| Vanjska agencija fee | 3.500 - 5.000 |
| Oglašavanje (ako bez agencije) | 500 - 1.000 |
| HR vrijeme (100h @ 25 EUR/h) | 2.500 |
| IT voditelj vrijeme (20h @ 40 EUR/h) | 800 |
| IT priprema (6h @ 30 EUR/h) | 180 |
| Oprema (laptop, monitori) | 1.500 - 3.000 |
| Software licence (godišnje) | 300 - 800 |
| Onboarding vrijeme (mentor 40h @ 35 EUR/h) | 1.400 |
| **UKUPNO** | **10.680 - 14.480** |

**8. Niska iskoristivost resursa**

- **HR odjel**: 60% vremena na koordinaciji i administrativnim zadacima (umjesto strategic HR)
- **IT odjel**: 4-6 sati ručne konfiguracije po laptopu
- **IT voditelj**: Previše vremena na screening kandidata koji nisu dobri (30% tehničkih intervjua je "očito ne")

**9. Redundantne aktivnosti**

- **Dupli unos podataka**: Kandidat unosi podatke u agencijsku formu, onda opet HR unosi u HRIS
- **Višestruke provjere**: Reference se provjeravaju i od agencije i od HR-a
- **Redundantne komunikacije**: Isti podaci se šalju emailom više puta različitim dionicima

#### 3.3.4 Problemi kvalitete i rizika

**10. Suboptimalna kvaliteta odabira**

- **Success rate nakon probnog rada**: 85% (15% zaposlenika ne prođe probni rad)
- **Regret rate**: 10% zaposlenika ode unutar 12 mjeseci (industry average: 8%)
- **Root cause**: Subjektivni kriteriji, nestrukturirani intervjui, loš cultural fit assessment

**11. Loša kandidatska iskustva**

Na temelju Customer Journey Mapping analiza:
- **40% kandidata** nikad ne dobije feedback nakon prijave
- **Prosječno vrijeme odgovora**: 14 dana (benchmark: 7 dana)
- **Drop-out rate**: 20% kandidata odustaje tijekom procesa zbog dugog čekanja
- **Glassdoor rating za interview process**: 3.2/5 (ispod prosjeka)

**12. Compliance i sigurnosni rizici**

- **GDPR compliance**: CV-i kandidata se čuvaju u emailovima (nisu u centralnom sustavu s proper retention policy)
- **Data breach risk**: Lack of encryption na prijenosu podataka kandidata
- **Audit trail**: Nema jasnog auditnog traga za odluke (zašto je kandidat X odbijen?)

### 3.4 Kvalitativna analiza procesa (Waste Analysis)

Primjenom **Lean metodologije** i koncepta **7 vrsta otpada (Muda)** (Pyzdek i Keller, 2014), identificirani su sljedeći waste-ovi u As-Is procesu:

#### 1. Waiting (Čekanje)

**Definicija**: Vrijeme kad proces čeka na input, odobrenje ili resurse bez dodavanja vrijednosti.

**Identificirani waste:**
- **Čekanje odobrenja uprave** (Faza 1): 2-5 dana čekanja na email odobrenje
- **Čekanje shortliste od agencije** (Faza 2): 14-21 dan objave oglasa
- **Čekanje odgovora kandidata** (Faza 4): 5 dana SLA, ali kandidati često odgovore kasnije
- **Čekanje isporuke opreme** (Faza 6): 5-10 dana delivery time

**Kvantifikacija**: **~35 dana od 52 ukupno je čekanje (67%)**

**Impact**: Waste of time, increased cycle time, opportunity cost

#### 2. Overprocessing (Prekomjerna obrada)

**Definicija**: Rad koji ne dodaje vrijednost iz perspektive kupca ili je redundantan.

**Identificirani waste:**
- **Dupli screening**: Agencija radi screening, pa HR ponovno radi screening
- **Repetitivni unos podataka**: Kandidat unosi podatke u formular agencije, pa HR ponovno unosi iste podatke u HRIS
- **Preopsežni tehnički testovi**: 3-satni testovi za junior pozicije (dovoljno bi bilo 1 sat)
- **Višestruke provjere referenci**: Agencija provjerava, pa HR ponovno provjerava

**Kvantifikacija**: ~15 sati redundantnog rada po kandidatu

#### 3. Defects (Greške)

**Definicija**: Greške koje zahtijevaju re-work ili korekcije.

**Identificirani waste:**
- **Greške u account creation**: 5-10% accountova ima greške (typo u email adresi, krivi permissions)
- **Pogrešna oprema naručena**: 5% slučajeva Nabava naruči krivi model laptopa
- **Kandidati koji ne zadovoljavaju kriterije na shortlisti**: 20-30% agencijskih kandidata nisu relevantni
- **Rework intervjua**: 10% slučajeva tehnički intervju mora se ponoviti zbog nejasnosti

**Kvantifikacija**: ~8 sati rework-a po kandidatu, ~200 EUR u pogrešno naručenoj opremi

#### 4. Motion (Nepotrebno kretanje)

**Definicija**: Nepotrebno fizičko ili digitalno kretanje ljudi ili informacija.

**Identificirani waste:**
- **Email ping-pong za odobrenja**: HR → Uprava → HR → IT → HR (10+ emailova)
- **Fizičko kretanje dokumentacije**: Printanje ugovora, potpis, skeniranje, upload
- **Prebacivanje između sustava**: HR prebacuje između HRIS, Emaila, Excel tracker-a, Google Docs

**Kvantifikacija**: ~4 sata nepotrebnog "kretanja" po kandidatu

#### 5. Inventory (Zalihe)

**Definicija**: Rad u tijeku (WIP) ili resursi koji čekaju na procesiranje.

**Identificirani waste:**
- **Backlog zahtjeva za zapošljavanje**: Prosječno 3-4 otvorena zahtjeva čekaju na odobrenje
- **Batch processing intervjua**: HR kumulira kandidate i tek onda zakazuje intervjue (batching stvara delay)
- **Skladište opreme**: Nabava drži ~10 laptopa na stanju (tied capital ~15.000 EUR)

**Kvantifikacija**: ~15.000 EUR vezanog kapitala u opremi

#### 6. Transportation (Transport)

**Definicija**: Nepotrebno premještanje materijala ili informacija.

**Identificirani waste:**
- **Email kao jedini kanal komunikacije**: Informacije se "transportiraju" kroz 20+ emailova između dionika
- **Fizička isporuka opreme od Nabave do IT do radnog mjesta**: Oprema putuje kroz 3 lokacije
- **Dokumenti koji se šalju naprijed-natrag**: Draft ugovora, ponuda, evaluacijski formular (5-6 email chain-ova)

#### 7. Underutilization of Talent (Nedovoljna iskoristivost talenta)

**Definicija**: Ne koriste se vještine, znanje ili kreativnost ljudi.

**Identificirani waste:**
- **HR radi administrativne zadatke umjesto strategic HR-a**: 60% vremena na scheduling i data entry
- **IT voditelj screenira očito nekompatibilne kandidate**: 30% tehničkih intervjua je očito "ne" (trebao bi već biti filtriran)
- **Senior IT administratori ručno konfiguriraju laptope**: Posao koji bi mogao biti automatiziran ili delegiran

**Summary Waste Analysis:**

| Vrsta waste-a | Postotak od ukupnog vremena | Godišnji trošak (@ 10 zapošljavanja/god) |
|---------------|----------------------------|------------------------------------------|
| Waiting | 67% | ~50.000 EUR (opportunity cost) |
| Overprocessing | 15% | ~8.000 EUR |
| Defects | 8% | ~4.000 EUR |
| Motion | 5% | ~2.000 EUR |
| Inventory | - | ~15.000 EUR (tied capital) |
| Transportation | 3% | ~1.500 EUR |
| Talent waste | - | ~20.000 EUR (HR mogao fokus na strategic) |
| **TOTAL** | | **~100.500 EUR godišnje** |

### 3.5 Kvantitativna analiza procesa

#### 3.5.1 Cycle Time Analysis

**Definicije:**
- **Lead Time**: Ukupno vrijeme od Start Event do End Event (iz perspektive kandidata)
- **Process Time**: Vrijeme aktivnog rada na procesu (bez čekanja)
- **Cycle Time Efficiency (CTE)**: Process Time / Lead Time × 100%

**Mjerenja:**

| Faza | Lead Time (dani) | Process Time (sati) | Waiting Time (dani) |
|------|-----------------|---------------------|---------------------|
| 1. Identifikacija potrebe | 3-5 | 8 | 2-4 |
| 2. Objava natječaja | 14-21 | 12 | 14-21 |
| 3. Selekcijski postupak | 7-14 | 24 | 5-12 |
| 4. Donošenje odluke | 3-5 | 6 | 2-4 |
| 5. Admin. priprema | 5-10 | 10 | 4-9 |
| 6. Nabava + IT priprema | 5-14 | 16 | 4-13 |
| 7. Onboarding (prvi dan) | 1 | 6 | 0 |
| **TOTAL (bez probnog rada)** | **38-70** | **82** | **31-63** |

**Prosječno (median) trajanje**: **52 dana** (7.4 tjedana)

**Cycle Time Efficiency**: 
- Total Process Time: 82 sata = ~10 radnih dana
- Lead Time: 52 dana
- **CTE = 10/52 × 100% = 19.2%**

**Interpretacija**: Samo 19.2% vremena stvarno dodaje vrijednost! Ostalih 80.8% je čekanje i waste.

**Industry benchmark CTE**: 35-45% (prema Lean Six Sigma standardima za HR procese; Pyzdek i Keller, 2014)

**Gap analysis**: JGL je -15.8 do -25.8 postotnih poena ispod best practice-a.

#### 3.5.2 Resource Utilization Analysis

**HR odjel** (1 osoba zadužena za IT recruitment):

| Aktivnost | Sati po kandidatu | % vremena |
|-----------|-------------------|-----------|
| Koordinacija s agencijom | 8 | 18% |
| Scheduling intervjua | 6 | 14% |
| HR screening | 4 | 9% |
| Administrativna priprema | 12 | 27% |
| Kreiranje ugovora | 4 | 9% |
| Onboarding | 10 | 23% |
| **TOTAL** | **44 sata** | **100%** |

**Value-added aktivnosti**: HR screening (4h), Onboarding (10h) = 14h (32%)
**Non-value-added**: Koordinacija, Scheduling, Admin = 30h (68%)

**IT voditelj**:

| Aktivnost | Sati po kandidatu | % vremena |
|-----------|-------------------|-----------|
| Definiranje zahtjeva | 2 | 10% |
| Tehnički intervju | 8 | 40% |
| Evaluacija | 4 | 20% |
| Onboarding mentoring | 6 | 30% |
| **TOTAL** | **20 sati** | **100%** |

**Value-added**: Sve aktivnosti su value-add, ali 30% tehničkih intervjua je s lošim kandidatima (waste).

**IT odjel**:

| Aktivnost | Sati po novom zaposleniku |
|-----------|---------------------------|
| Kreiranje accounta | 1 |
| Konfiguracija laptopa | 4-6 |
| Testiranje | 1 |
| **TOTAL** | **6-8 sati** |

**Automatizacija potencijal**: 70% (account creation i deployment moguće automatizirati)

#### 3.5.3 Cost-Benefit Analysis (postojeće stanje)

**Costs:**

| Kategorija | Cost per hire (EUR) | Godišnji trošak @ 10 hires (EUR) |
|------------|---------------------|-----------------------------------|
| Vanjska agencija | 4.000 | 40.000 |
| Oglašavanje | 500 | 5.000 |
| HR vrijeme (44h @ 25 EUR/h) | 1.100 | 11.000 |
| IT voditelj (20h @ 40 EUR/h) | 800 | 8.000 |
| IT setup (8h @ 30 EUR/h) | 240 | 2.400 |
| Oprema | 2.000 | 20.000 |
| Software licenci | 500 | 5.000 |
| Onboarding mentoring (40h @ 35 EUR/h) | 1.400 | 14.000 |
| **SUBTOTAL Direct Costs** | **10.540** | **105.400** |
| Opportunity cost (52 dana delay) | 2.600 | 26.000 |
| Quality cost (15% fail probation) | 1.581 | 15.810 |
| **TOTAL** | **14.721** | **147.210** |

**Benefits** (godišnje, 10 zaposlenika):
- Produktivnost novih IT djelatnika: +800.000 EUR (prosječna godišnja vrijednost IT djelatnika)
- Smanjenje IT downtime-a: +50.000 EUR
- Poboljšanje sigurnosti: +30.000 EUR
- **TOTAL BENEFITS**: ~880.000 EUR

**Net Benefit**: 880.000 - 147.210 = **732.790 EUR godišnje**

**ROI**: (732.790 / 147.210) × 100% = **498% ROI**

Napomena: ROI je pozitivan, ali proces ima značajan prostor za optimizaciju (reduce costs, increase quality).

---

## 4. Analiza budućeg stanja procesa (To-Be)

### 4.1 Ciljevi optimizacije

Na temelju identificiranih problema u As-Is analizi, definirani su sljedeći ciljevi za To-Be model:

#### 4.1.1 Ciljevi učinkovitosti

**Cilj 1: Smanjiti ukupno trajanje procesa za 35-40%**
- **Trenutno stanje**: 52 dana (median)
- **Ciljano stanje**: 30-35 dana
- **Način postizanja**:
  - Automatizacija odobrenja budžeta (ušteda 3 dana)
  - Paralelizacija IT i nabave ranije u procesu (ušteda 5-7 dana)
  - Brži screening s DMN pravilima (ušteda 3-4 dana)
  - SLA enforcement s boundary event eskalacijama (ušteda 2-3 dana)

**Cilj 2: Povećati Cycle Time Efficiency (CTE) na 35%+**
- **Trenutno stanje**: 19.2% CTE
- **Ciljano stanje**: 35-40% CTE
- **Način postizanja**: Eliminacija waste-ova (waiting, overprocessing)

**Cilj 3: Smanjiti ručne aktivnosti za 50%**
- **Trenutno stanje**: 70% ručnih aktivnosti
- **Ciljano stanje**: 35% ručnih aktivnosti
- **Način postizanja**: 
  - Automatska provjera budžeta (service task)
  - DMN za standardizirane odluke
  - Camunda forme umjesto email exchange-a
  - Automatiziran IT provisioning

#### 4.1.2 Ciljevi kvalitete

**Cilj 4: Smanjiti failure rate probnog rada na 8%**
- **Trenutno stanje**: 15% ne prolazi probni rad
- **Ciljano stanje**: 8% (industry best practice)
- **Način postizanja**:
  - Standardizirani scoring s DMN dijagramima
  - Strukturiraniji onboarding s metrikama

**Cilj 5: Poboljšati candidate experience**
- **Trenutno stanje**: 3.2/5 Glassdoor rating
- **Ciljano stanje**: 4.0/5
- **Način postizanja**:
  - Automatski status updates (Camunda task listeners)
  - Brže povratne informacije
  - Transparentan proces

**Cilj 6: Povećati acceptance rate ponuda na 90%**
- **Trenutno stanje**: 85%
- **Ciljano stanje**: 90%
- **Način postizanja**: Brži proces (manje drop-out-a), bolja komunikacija

#### 4.1.3 Ciljevi troškova

**Cilj 7: Smanjiti trošak po hire za 20%**
- **Trenutno stanje**: 14.721 EUR per hire
- **Ciljano stanje**: ~11.700 EUR per hire
- **Način postizanja**:
  - Smanjenje troškova agencije (bolji in-house screening)
  - Automatizacija (manje HR i IT vremena)
  - Smanjenje failure rate-a

**Cilj 8: Smanjiti waste za 60%**
- **Trenutno stanje**: ~100.500 EUR godišnje waste
- **Ciljano stanje**: ~40.000 EUR godišnje
- **Način postizanja**: Lean optimizacije

### 4.2 Pregled To-Be modela

To-Be model procesa zapošljavanja uvodi sljedeće ključne promjene:

#### 4.2.1 Arhitekturne promjene

**1. Automatizacija ključnih aktivnosti**

Uvedeno 21 **Service Task-ov** za automatizaciju ručnih aktivnosti. Ključni Service Task-ovi:
- **ST_ValidateBudget**: Automatska provjera budžeta putem REST API-ja prema ERP sustavu
- **ST_PublishJob**: Automatsko slanje oglasa agenciji putem API-ja
- **ST_ProvisionAD**: Automatsko kreiranje Active Directory računa
- **ST_CreateM365**: Automatsko kreiranje Microsoft 365 mailboxa
- **ST_AssignLic**: Automatska dodjela licenci
- **ST_CreateAccess**: Automatsko kreiranje pristupa VPN, ticketing, itd.
- **ST_ConfigureDevice**: Automatska konfiguracija uređaja (integracija s Intune MDM)
- **ST_SecurityConfig**: Automatske sigurnosne postavke
- **ST_TestAndRegister**: Automatsko testiranje i registracija u CMDB
- **ST_OrderEquipment**: Automatska narudžba opreme kod dobavljača
- **ST_CheckInventory**: Provjera zaliha opreme na skladištu
- **ST_ReserveEquipment**: Rezervacija opreme sa skladišta
- **ST_TrackDelivery**: Praćenje isporuke naručene opreme
- **ST_HandoverEquipment**: Predaja opreme IT odjelu
- **ST_RegisterHR**: Registracija zaposlenika u HR sustav
- **ST_RegisterHZMO**: Prijava na HZMO (mirovinsko osiguranje)
- **ST_RegisterHZZO**: Prijava na HZZO (zdravstveno osiguranje)
- **ST_ScheduleCheckins**: Planiranje check-in sastanaka tijekom probnog rada
- **ST_EvaluateProbationHR**: Zapis evaluacije probnog rada u HR sustav
- **ST_NotifySLABreach**: Obavijest o probijanju SLA roka selekcije

**2. Business Rule Tasks (BRT) s DMN integraciji**

Uvedena 2 **Business Rule Taska** povezana s DMN dijagramima (Camunda, 2024):
- **BRT_EvalCandidate**: Evaluacija kandidata prema standardiziranim pravilima
  - Input: roleType, hrScreeningPassed, technicalTestScore, technicalInterviewScore, referenceCheckPassed, seniority
  - Output: Offer/Reject, needsFinalInterview
- **BRT_EquipProfile**: Automatsko određivanje profila opreme prema poziciji
  - Input: roleType
  - Output: hardwarePackage, monitorCount, peripherals, softwarePackage, securityLevel

**3. Subprocess za kompleksnu selekciju**

**SP_Selection** (Subprocess) - Čitav selekcijski postupak kao reusable subprocess:
- Uključuje: HR screening, tehnički test, tehnički intervju, opcioni finalni intervju, provjeru referenci
- Svaki korak ima jasne gateway odluke
- Camunda forme za unos ocjena

**4. Boundary Event-ovi za SLA enforcement**

- **BE_Selection_SLA**: Timer boundary event na subprocessu selekcije (max 14 dana)
  - Ako proces traje duže, automatska eskalacija (slanje emaila menadžmentu)
  - Ako kandidat ne odgovori, automatski reminder email

**5. Camunda User Task forme**

Svih 10 korisničkih intervencija ima definirane Camunda forme:
- **UT_Request** → Form_JobRequest
- **UT_HRScreening** → Form_HRScreening
- **UT_TechTest** → Form_TechTest
- **UT_TechInterview** → Form_InterviewScores
- **UT_FinalInterview** → Form_FinalInterview
- **UT_ReferenceCheck** → Form_ReferenceCheck
- **UT_Contract** → Form_Contract
- **UT_SendOffer** → Form_SendOffer
- **UT_OnboardingDay1** → Form_OnboardingDay1
- **UT_ProbationEval** → Form_ProbationEvaluation

**6. Paralelizacija aktivnosti**

Parallel Gateway omogućava istovremeno izvođenje:
- **IT priprema** (7 service task-ova u sekvenci)
- **Nabava opreme** (provjera, narudžba, tracking)

Obje grane završavaju prije onboarding-a (Parallel Join Gateway).

### 4.3 Ključne promjene i poboljšanja

#### Promjena 1: Automatizirana provjera budžeta (Faza 1)

**As-Is**:
```
HR šalje email upravi → Uprava čita email → Uprava odgovara DA/NE (2-5 dana)
```

**To-Be**:
```
Service Task: ST_ValidateBudget 
→ REST API call prema SAP-u
→ Provjera: Ima li odjel budget approval za novu poziciju?
→ Instant response (DA/NE)
```

**Implementacija**:
```javascript
// Pseudo-code for Service Task
async function validateBudget(positionType, department, salaryRange) {
  const response = await fetch('https://erp.jgl.hr/api/budget/validate', {
    method: 'POST',
    body: JSON.stringify({
      department: department,
      costCenter: getCostCenter(department),
      annualCost: salaryRange * 12 * 1.35, // bruto + employer costs
      fiscalYear: new Date().getFullYear()
    })
  });
  
  const data = await response.json();
  return {
    approved: data.budgetAvailable >= data.annualCost,
    availableBudget: data.budgetAvailable
  };
}
```

**Benefit**:
- Ušteda vremena: 3-5 dana → instant (ušteda 4 dana median)
- Uklonjen bottleneck u upravi
- Transparentnost budžeta

#### Promjena 2: DMN za evaluaciju kandidata (Faza 3)

**As-Is**:
```
Subjektivna odluka komisije → Različiti kriteriji po kandidatu → Nekonzistentno
```

**To-Be**:
```
Business Rule Task: BRT_EvalCandidate
→ DMN Decision Table
→ Standardizirani pragovi po poziciji
→ Output: Offer/Reject + needsFinalInterview
```

**DMN Decision Table primjer (Programer)**:

| Role Type | HR Screen | Tech Test | Tech Interview | References | Seniority | Result | Final Interview |
|-----------|-----------|-----------|----------------|------------|-----------|--------|-----------------|
| programer | true | >= 75 | >= 75 | true | senior | Offer | true |
| programer | true | >= 75 | >= 75 | true | mid/junior | Offer | false |
| programer | true | < 75 | - | - | - | Reject | false |
| * | false | - | - | - | - | Reject | false |

**Benefit**:
- Konzistentnost odluka
- Transparentnost (kandidat zna kriterije)
- Uklonjena subjektivnost
- Compliance (anti-diskriminacija)

#### Promjena 3: SLA enforcement s Boundary Events

**As-Is**:
```
Selekcija traje koliko traje → Nema eskalacije → Kandidati čekaju 20+ dana
```

**To-Be**:
```
Subprocess SP_Selection s Boundary Timer Event (14 dana)
→ IF NOT completed in 14 dana
→ Timer fires
→ Escalation: Email notification menadžmentu
→ "Selection process for [Candidate] exceeds SLA (14 days). Current status: [Task]. Please expedite."
```

**Implementacija (BPMN XML)**:
```xml
<bpmn:subProcess id="SP_Selection" name="Selekcijski postupak">
  <bpmn:incoming>Flow_6</bpmn:incoming>
  <bpmn:outgoing>Flow_7</bpmn:outgoing>
  <!-- subprocess content -->
</bpmn:subProcess>

<bpmn:boundaryEvent id="BE_Selection_SLA" name="SLA: 14 dana" 
                     attachedToRef="SP_Selection">
  <bpmn:outgoing>Flow_SLA_Escalation</bpmn:outgoing>
  <bpmn:timerEventDefinition>
    <bpmn:timeDuration>P14D</bpmn:timeDuration>
  </bpmn:timerEventDefinition>
</bpmn:boundaryEvent>

<bpmn:serviceTask id="ST_NotifyReject_SLA" name="Pošalji eskalaciju">
  <bpmn:incoming>Flow_SLA_Escalation</bpmn:incoming>
  <bpmn:outgoing>Flow_End_SLA</bpmn:outgoing>
  <bpmn:extensionElements>
    <zeebe:taskDefinition type="send-escalation-email"/>
  </bpmn:extensionElements>
</bpmn:serviceTask>
```

**Benefit**:
- Poštivanje SLA-a
- Proaktivna eskalacija
- Smanjenje drop-out rate-a kandidata

#### Promjena 4: Paralelizacija IT i Nabave (Faza 6)

**As-Is**:
```
Sekvencijalno:
1. Nabava naručuje opremu (Dan 1-10)
2. Oprema stiže
3. IT počinje konfiguraciju (Dan 11-14)
→ Total: 14 dana
```

**To-Be**:
```
Parallel Gateway:
Branch A: Nabava (narudžba + delivery) - 10 dana
Branch B: IT priprema (accounts, software) - 7 dana
→ Obje grane završavaju istovremeno
→ Total: Max(10, 7) = 10 dana (ušteda 4 dana)
```

**Dodatno**: IT priprema počinje RANIJE (after Contract signed, ne after oprema stigla)

**Benefit**:
- Ušteda 4 dana
- Oprema spremna prvi dan rada
- Bolja iskustvo novog zaposlenika

#### Promjena 5: Automatiziran IT Provisioning

**As-Is** (ručno):
```
1. IT admin kreira AD account ručno (30 min)
2. IT admin kreira M365 mailbox ručno (20 min)
3. IT admin dodjeljuje grupe ručno (15 min)
4. IT admin kreira VPN account ručno (10 min)
...
Total: 4-6 sati
```

**To-Be** (automatiziran):
```
Service Task sequence (Camunda calls REST APIs):
ST_ProvisionAD → ST_CreateM365 → ST_AssignLic → ST_CreateAccess
→ Total: 10-15 minuta (automated)
```

**Tehnička implementacija**:
- **Job Worker** u Node.js/Python koji sluša Zeebe queue
- Integracije:
  - **Azure AD Graph API** za account creation
  - **Microsoft Graph API** za M365 provisioning
  - **Custom VPN API** (FortiGate/Cisco)
  - **Custom CMDB API** za asset registration

**Benefit**:
- Ušteda 4-6 sati IT vremena po zaposleniku
- Eliminacija grešaka (typos, missing permissions)
- Konzistentnost (svi accountovi jednako konfigurirani)

#### Promjena 6: Digitalizacija formi (Camunda Forms)

**As-Is**:
```
HR screening → Interviewer piše bilješke u Word/Excel → Email HR-u → HR kopira u HRIS
```

**To-Be**:
```
Camunda User Task s formom:
→ Interviewer popunjava formu direktno u Camunda Tasklist
→ Podaci automatski dostupni sljedećem koraku
→ Persistirani u Camunda process variables
→ Export u HRIS putem API-ja
```

**Primjer forme** (Form_HRScreening):
```json
{
  "schemaVersion": 10,
  "components": [
    { "type": "text", "key": "candidateName", "label": "Ime kandidata" },
    { "type": "select", "key": "roleType", "label": "Pozicija",
      "values": [
        { "label": "Helpdesk", "value": "helpdesk" },
        { "label": "Programer", "value": "programer" },
        { "label": "NOC/SOC", "value": "noc_soc" }
      ]
    },
    { "type": "radio", "key": "hrScreeningPassed", "label": "Prolaz",
      "values": [
        { "label": "DA", "value": true },
        { "label": "NE", "value": false }
      ]
    },
    { "type": "number", "key": "softSkillsScore", "label": "Soft skills (0-100)" },
    { "type": "textarea", "key": "hrNotes", "label": "Napomene" }
  ]
}
```

**Benefit**:
- Eliminacija ručnog unosa podataka
- Strukturirani podaci (lakša analiza)
- Audit trail (tko je, kada, što unio)

### 4.4 Primjena Lean i Six Sigma pristupa

#### 4.4.1 Lean pristup: Eliminacija 7 vrsta waste-a

**Waste 1: Waiting → ELIMINATED**
- **Automatizacija odobrenja budžeta**: 3 dana → instant
- **SLA enforcement s boundary events**: Eskalacija sprječava dugačka čekanja
- **Paralelizacija IT + Nabava**: 4 dana uštede

**Rezultat**: Waiting waste smanjen sa 67% na 40% ukupnog vremena.

**Waste 2: Overprocessing → REDUCED**
- **Single source of truth**: Camunda forme eliminiraju dupli unos podataka
- **DMN eliminira redundantni screening**: Agencija + HR screening → Samo strukturirani HR screening
- **Automatiziran IT provisioning**: Eliminirane redundantne provjere

**Rezultat**: Overprocessing smanjen za 60%.

**Waste 3: Defects → REDUCED**
- **Standardizirani DMN kriteriji**: Eliminira subjektivne greške u odabiru
- **Automatiziran provisioning**: 0% error rate u account creation (umjesto 5-10%)
- **Validacije u Camunda formama**: Sprječavanje unosa nevalidnih podataka

**Rezultat**: Defect rate smanjen za 70%.

**Waste 4: Motion → REDUCED**
- **Camunda forme umjesto email ping-pong**: Svi podaci u jednom sustavu
- **Digitalni ugovori**: Eliminacija printanja/skeniranja

**Rezultat**: Motion waste smanjen za 80%.

**Waste 5: Inventory → OPTIMIZED**
- **Just-in-time nabava**: Oprema se naručuje tek nakon prihvaćanja ponude
- **Reduced safety stock**: Smanjeno sa 10 laptopa na 3 (ušteda 10.000 EUR tied capital)

**Waste 6: Transportation → REDUCED**
- **Direktna isporuka**: Oprema se dostavlja direktno IT odjelu, ne preko Nabave

**Waste 7: Talent → OPTIMIZED**
- **HR fokus na strategic HR**: Automatizacija admin zadataka oslobađa 40% HR vremena za strategic recruiting
- **IT voditelj ne screenira loše kandidate**: DMN prefiltrira kandidate prije tehničkog intervjua

#### 4.4.2 Six Sigma pristup: DMAIC metodologija (Pyzdek i Keller, 2014)

**Define (Definiraj problem)**:
- Problem: 15% zaposlenika ne prođe probni rad (quality issue)
- Goal: Smanjiti na 8%
- Metric: % zaposlenika koji uspješno završe probni rad

**Measure (Izmjeri)**:
- Prikupljeni podaci o 30 posljednjih zapošljavanja
- Success rate: 85% (15% failure)
- Root causes failure-a:
  - 40%: Tehnička kompetencija nije odgovarala (loš screening)
  - 30%: Cultural fit problem
  - 20%: Expectation mismatch (kandidat očekivao drugačiji posao)
  - 10%: Personal reasons

**Analyze (Analiziraj)**:
- Pareto analiza pokazuje: 70% problema je u lošem screening-u
- Root cause analysis: Subjektivni kriteriji intervjuera

**Improve (Poboljšaj)**:
- Implementacija DMN standardiziranih kriterija
- Strukturirani behavioral intervjui (STAR format)
- Realistic Job Preview (shadowing dan prije ponude)

**Control (Kontroliraj)**:
- Praćenje probation success rate mjesečno
- Control chart (SPC - Statistical Process Control)
- Target: 8% failure rate (92% success)

**Očekivani rezultat**: Probation failure rate smanjenje sa 15% na 8-10% nakon 6 mjeseci implementacije.

### 4.5 Očekivani rezultati i koristi

#### 4.5.1 Kvantitativni rezultati

**1. Smanjenje trajanja procesa**

| Metric | As-Is | To-Be | Improvement |
|--------|-------|-------|-------------|
| Lead Time (median) | 52 dana | 32 dana | -38% |
| Process Time | 82 sata | 60 sata | -27% |
| Waiting Time | 35 dana | 20 dana | -43% |
| **Cycle Time Efficiency** | **19.2%** | **36.5%** | **+90% relative** |

**2. Smanjenje troškova**

| Cost Category | As-Is (EUR/hire) | To-Be (EUR/hire) | Savings |
|---------------|------------------|------------------|---------|
| Vanjska agencija | 4.000 | 3.000 | -1.000 |
| HR vrijeme | 1.100 | 600 | -500 |
| IT vrijeme | 240 | 80 | -160 |
| Opportunity cost | 2.600 | 1.600 | -1.000 |
| Quality cost (probation failures) | 1.581 | 950 | -631 |
| **TOTAL** | **14.721** | **11.530** | **-3.191 (22%)** |

**Godišnje uštede @ 10 hires**: **31.910 EUR**

**3. Poboljšanje kvalitete**

| Quality Metric | As-Is | To-Be | Improvement |
|----------------|-------|-------|-------------|
| Probation success rate | 85% | 92% | +7 p.p. |
| Candidate acceptance rate | 85% | 90% | +5 p.p. |
| Time-to-productivity | 90 dana | 60 dana | -33% |
| Candidate experience (Glassdoor) | 3.2/5 | 4.0/5 | +25% |

**4. Povećanje produktivnosti resursa**

| Resource | As-Is Utilization | To-Be Utilization | Freed Capacity |
|----------|-------------------|-------------------|----------------|
| HR odjel | 60% admin, 40% strategic | 30% admin, 70% strategic | +75% strategic time |
| IT odjel | 6h ručna konfiguracija | 0.5h supervision | +92% time freed |
| IT voditelj | 30% bad candidates | 10% bad candidates | +67% less wasted interviews |

#### 4.5.2 Kvalitativni rezultati

**1. Poboljšana kandidatska iskustva**
- Transparentnost procesa (kandidat može pratiti status u portalu)
- Brže povratne informacije
- Jasniji kriteriji evaluacije
- Digitalni proces (modern, tech-forward image)

**2. Bolja compliance i auditabilnost**
- Kompletan audit trail u Camunda
- GDPR compliance (centralizirano čuvanje podataka s retention policy)
- Standardizirani kriteriji (anti-diskriminacija)

**3. Skalabilnost procesa**
- Trenutno: 1 HR osoba može handleati max 3 paralelna procesa
- Optimizirano: 1 HR osoba može handleati 8-10 paralelnih procesa
- Omogućava growth bez proporcionalnog povećanja HR headcount-a

**4. Data-driven insights**
- Camunda Dashboard: Praćenje real-time metrika (gdje su bottleneck-ovi)
- Process mining: Analiza stvarnih execution path-ova
- Continuous improvement: A/B testiranje različitih kriterija

**5. Employee experience**
- Bolja priprema prvog dana (oprema spremna 95% vremena vs 60%)
- Strukturiraniji onboarding
- Jasnija očekivanja
- Brži time-to-productivity

#### 4.5.3 ROI analiza To-Be implementacije

**Investment Required (Implementacija To-Be)**:

| Stavka | Trošak (EUR) |
|--------|--------------|
| Camunda 8 licenca (Self-Hosted, production) | 0 (Open Source Community Edition dovoljno za start) |
| Development Job Workera (API integracije) | 15.000 (200h @ 75 EUR/h) |
| IT infrastruktura (serveri, cloud) | 5.000 |
| Obuka osoblja (HR, IT) | 3.000 |
| Change management | 5.000 |
| Process documentation | 2.000 |
| **TOTAL INVESTMENT** | **30.000 EUR** |

**Payback Period**:
- Godišnje uštede: 31.910 EUR
- Investment: 30.000 EUR
- **Payback period: 11.3 mjeseci**

**3-godišnji ROI**:
- Total savings (3 godine): 31.910 × 3 = 95.730 EUR
- Investment: 30.000 EUR
- **Net Benefit: 65.730 EUR**
- **ROI: (65.730 / 30.000) × 100% = 219%**

**Dodatne koristi (ne kvantificirane)**:
- Bolja reputacija kao employer (više kvalitetnih kandidata)
- Smanjenje regret hires (dugoročni retention)
- Freed HR capacity za strategic initiatives
- Scalability za budući rast

#### 4.5.4 Risk Analysis

**Rizici implementacije To-Be modela**:

| Rizik | Vjerojatnost | Impact | Mitigation |
|-------|--------------|--------|------------|
| Otpor promjeni od zaposlenika | Srednja | Visok | Change management program, uključivanje stakeholdera rano |
| Tehnički problemi s integracijama | Srednja | Srednji | Pilot faza, postepena implementacija |
| Nedostatak IT resursa za development | Niska | Visok | Outsource development Job Workera |
| Regulatorni compliance problemi | Niska | Visok | Legal review prije go-live |
| Dependency na vanjsku agenciju | Niska | Srednji | Build in-house sourcing capability postepeno |

**Mitigation Plan**:
1. **Pilot faza** (3 mjeseca): Testiraj To-Be na 2-3 zapošljavanja
2. **Phased rollout**: Implementiraj po fazama (prvo automatizacija budžeta, pa DMN, pa IT provisioning...)
3. **Training program**: Obučiti HR i IT odjel prije go-live
4. **Fallback plan**: Ako automatizacija ne funkcionira, fallback na ručni proces

---

## 5. Zaključak

Ovaj rad predstavio je sveobuhvatnu analizu procesa zapošljavanja IT djelatnika u farmaceutskoj industriji na studiji slučaja JGL d.d. Koristeći BPMN 2.0 notaciju (Dumas et al., 2018), detaljno su modelirana dva stanja procesa: trenutno (As-Is) i optimizirano (To-Be), čime je omogućena strukturirana analiza i identificiranje konkretnih mogućnosti za poboljšanje.

**Ključni nalazi istraživanja:**

As-Is analiza identificirala je značajne izazove u postojećem procesu:
- **Dugotrajnost procesa**: Prosječno trajanje od 52 dana, što je 18% duže od prosječnog industry benchmarka od 44 dana (SHRM, 2025)
- **Niska procesna učinkovitost**: Cycle Time Efficiency od samo 19.2%, što znači da 80% vremena predstavlja čekanje i waste
- **Visoki troškovi**: Prosječni trošak zapošljavanja od 14.721 EUR po kandidatu
- **Problem kvalitete**: 15% zaposlenika ne uspijeva završiti probni rad uspješno

Primjenom Lean waste analysis metodologije, identificiran je godišnji waste u iznosu od približno 100.500 EUR, od čega najveći dio čini waiting waste (67% ukupnog vremena) i neiskorišteni talent (HR na admin zadacima umjesto strategic work).

**Predložena rješenja u To-Be modelu:**

To-Be model uvodi sistemske promjene temeljene na automatizaciji, standardizaciji i paralelizaciji:

1. **Automatizacija ključnih odluka i aktivnosti**: Implementacija 21 Service Task-ova za automatsku provjeru budžeta, IT provisioning, kreiranje računa i konfiguraciju opreme
2. **Standardizacija kroz DMN**: Dva Business Rule Task-a s DMN dijagramima za evaluaciju kandidata i određivanje profila opreme eliminiraju subjektivnost i osiguravaju konzistentnost
3. **SLA enforcement**: Boundary Event-ovi osiguravaju poštivanje vremenskih okvira i proaktivnu eskalaciju
4. **Digitalizacija**: Camunda forme zamjenjuju email komunikaciju i osiguravaju strukturirane podatke
5. **Paralelizacija**: IT priprema i nabava opreme izvode se istovremeno, što štedi 4 dana

**Očekivani rezultati implementacije:**

Kvantitativna analiza pokazuje značajna poboljšanja:
- **Smanjenje trajanja procesa za 38%** (sa 52 na 32 dana)
- **Povećanje Cycle Time Efficiency za 90%** (sa 19.2% na 36.5%)
- **Smanjenje troškova za 22%** (ušteda 31.910 EUR godišnje @ 10 zapošljavanja)
- **Poboljšanje kvalitete**: Probation success rate raste sa 85% na 92%
- **ROI**: 219% kroz 3 godine, payback period 11.3 mjeseci

Kvalitativne koristi uključuju poboljšanu kandidatsku iskustvo (Glassdoor rating 3.2 → 4.0), bolju compliance i auditabilnost, te oslobađanje 40% HR kapaciteta za strategic aktivnosti.

**Doprinos istraživanju:**

Ovaj rad demonstrira primjenu BPMN 2.0 standarda (Dumas et al., 2018) i process mining metodologija (van der Aalst, 2016) u realnom poslovnom kontekstu farmaceutske industrije. Kombinacija kvalitativnih (Lean waste analysis, Customer Journey Mapping) i kvantitativnih (Cycle Time Analysis, Cost-Benefit Analysis) tehnika omogućila je holistički pristup optimizaciji procesa.

Posebna vrijednost rada je u:
- Detaljnoj dokumentaciji stvarnog procesa s višestrukim izvorima podataka
- Integraciji DMN standarda za automatizaciju poslovnih odluka
- Realističnoj ROI analizi s konkretnim implementacijskim planom
- Primjenjivosti nalaza na široku farmaceutsku i proizvodnu industriju

**Ograničenja i budući rad:**

Istraživanje ima određena ograničenja:
- Studija slučaja jedne organizacije (generalizacija upitna)
- Očekivani rezultati To-Be modela temelje se na projekcijama, ne stvarnim mjerenjima
- Nije uključena analiza ljudskog faktora i organizacijske kulture

Buduća istraživanja mogla bi uključiti:
- Longitudinalnu studiju nakon implementacije To-Be modela s mjerenjem stvarnih rezultata
- Komparativnu analizu s drugim farmaceutskim tvrtkama u regiji
- Proširenje na druge HR procese (performance management, offboarding)
- Primjenu AI/ML za prediktivnu analitiku kandidata

**Zaključna riječ:**

Proces zapošljavanja IT djelatnika u farmaceutskoj industriji karakterizira visoka složenost, strogi regulatorni zahtjevi i značajan poslovni utjecaj. Optimizacija ovog procesa kroz sistemsku primjenu BPM metodologija, automatizacije i standardizacije može rezultirati značajnim poboljšanjima u učinkovitosti, kvaliteti i troškovima.

Predloženi To-Be model predstavlja realizabilnu viziju budućeg stanja koja zadržava sve compliance zahtjeve dok istovremeno radikalno poboljšava performanse procesa. Uspješna implementacija zahtijeva commitment menadžmenta, adekvatna ulaganja u tehnologiju i ljudske resurse te kulturnu transformaciju prema data-driven decision making-u.

U konačnici, ovaj rad demonstrira da digitalna transformacija HR procesa nije samo tehnološko pitanje, već strateška inicijativa koja može osloboditi značajne resurse, poboljšati candidate experience i osigurati konkurentsku prednost u privlačenju top IT talenata u sve kompetitvnijem tržištu rada.

---

## 6. Izrada process-driven aplikacije u Camunda 8

### 6.1 Uvod i motivacija

Kao drugi dio projektnog zadatka, izrađena je process-driven aplikacija koja omogućuje egzekuciju, praćenje i upravljanje procesnom instancom zapošljavanja IT djelatnika u stvarnom vremenu. Aplikacija je razvijena na Camunda 8 Self-Managed platformi koja se izvodi lokalno putem Camunda 8 Run (c8run) distribucije.

Za potrebe egzekucije odabran je **reducirani As-Is model** jer puni As-Is model koristi collaboration dijagram s dva participanta (JGL i Vanjska agencija) i message flow-ove između njih, što Camunda 8 Zeebe engine ne podržava za deployment — Zeebe zahtijeva single-process model bez collaboration elementa. Stoga je napravljena redukcija koja zadržava sve ključne faze i logiku originalnog As-Is procesa, ali ih sažima u jedan izvršivi proces.

### 6.2 Redukcija As-Is modela

Redukcija je provedena prema sljedećim principima:

**Uklonjeni elementi:**

| Element | Puni As-Is | Razlog uklanjanja |
|---------|-----------|-------------------|
| Collaboration | 2 participanta (JGL + Agencija) | Zeebe ne podržava collaboration za execution |
| Lanes | 4 (HR, IT voditelj, IT odjel, Nabava) | Zamijenjeno `candidateGroups` atributom |
| Message Flows | 2 (JGL ↔ Agencija) | Agencija simulirana Service Taskom |
| Call Activity | 1 (Priprema radnog mjesta) | Ugrađena inline u proces |
| Generički Task-ovi | 32 | Reducirano na 10 (9 User + 1 Service) |

**Zadržani elementi:**

| Element | Broj | Opis |
|---------|------|------|
| User Tasks | 9 | Svaki s Camunda formom za unos podataka |
| Service Task | 1 | `send-agency-notification` — simulira komunikaciju s agencijom |
| Exclusive Gateways | 5 | Odobrenje budžeta, HR screening, tehnički intervju, prihvaćanje ponude, probni rad |
| Parallel Gateways | 2 | Split/Join za paralelnu IT pripremu i nabavu opreme |
| Timer Events | 2 | Čekanje shortliste (14 dana) i čekanje odgovora kandidata (5 dana) |
| End Events | 5 | Zahtjev odbijen, kandidat odbijen, ponuda odbijena, uspješno zaposlenje, raskid |

**Mapiranje faza originalnog As-Is modela na reducirani model:**

| Originalna faza | Originalni taskovi | Reducirani task |
|-----------------|-------------------|-----------------|
| Faza 1: Identifikacija potrebe | Zaprimanje zahtjeva, Definiranje potreba, Izrada opisa, Odobrenje | `UT_DefineNeed` + `UT_Approval` |
| Faza 2: Objava natječaja | Slanje agenciji, Objava oglasa, Active sourcing, Screening, Shortlista | `ST_NotifyAgency` + `Timer_WaitShortlist` |
| Faza 3: Selekcija | HR screening, Tehnički test, Tehnički intervju, Evaluacija | `UT_HRScreening` + `UT_TechInterview` |
| Faza 4: Ponuda | Priprema ponude, Slanje, Čekanje odgovora, Odluka | `UT_PrepareOffer` + `Timer_WaitResponse` + `UT_CandidateResponse` |
| Faza 5-6: IT priprema + Nabava | 12 taskova (paralelno) | `UT_PrepareIT` ∥ `UT_OrderEquipment` |
| Faza 7: Onboarding | 10 taskova | `UT_Onboarding` + `UT_ProbationEval` |

Timer eventi koriste skraćene intervale za demo (`PT30S` i `PT20S` umjesto `P14D` i `P5D`) kako bi se proces mogao brzo provesti tijekom prezentacije.

### 6.3 Camunda 8 okruženje

Camunda 8 Self-Managed pokrenut je lokalno korištenjem **Camunda 8 Run (c8run-8.8.9)** distribucije koja uključuje sve potrebne komponente (Zeebe, Operate, Tasklist, Elasticsearch) u jednom paketu:

```bash
camunda-start.bat
```

Komponente okruženja:

| Komponenta | URL | Funkcija |
|------------|-----|----------|
| Operate | http://localhost:8080/operate | Praćenje procesnih instanci, incidenti |
| Tasklist | http://localhost:8080/tasklist | Rad s User Taskovima, popunjavanje formi |
| Identity | http://localhost:8080/identity | Upravljanje korisnicima i grupama |
| Orchestration API | http://localhost:8080/v2/ | REST API za upravljanje procesima |
| Connectors | http://localhost:8086/ | Inbound Connectors runtime |
| Zeebe Gateway | localhost:26500 (gRPC) | BPMN engine — izvršava procese |

Pokretanje i zaustavljanje okruženja vrši se putem batch skripti:
- `camunda-start.bat` — pokreće sve komponente
- `camunda-stop.bat` — zaustavlja sve komponente

### 6.4 Struktura aplikacije

```
camunda-app/
├── it-hire-as-is-reduced.bpmn      ← Reducirani BPMN model
├── forms/
├── form-job-request.form        ← IT voditelj: zahtjev
├── form-budget-approval.form    ← Uprava: odobrenje
├── form-hr-screening.form       ← HR: screening intervju
├── form-tech-interview.form     ← IT voditelj: tehnički intervju
├── form-offer.form              ← HR: priprema ponude
├── form-candidate-response.form ← HR: odgovor kandidata
├── form-it-prepare.form         ← IT odjel: računi i konfiguracija
├── form-equipment.form          ← Nabava: narudžba opreme
├── form-onboarding.form         ← HR: onboarding prvi dan
├── form-probation-eval.form     ← IT voditelj: evaluacija probnog rada
├── worker/
│   ├── index.js                     ← Express.js Job Worker
│   └── package.json
└── README.md
```

### 6.5 Camunda Forms

Za svaki User Task kreirana je Camunda forma koja omogućuje strukturirani unos podataka. Forme koriste Camunda Forms JSON schema format (schemaVersion 16) i povezane su s User Taskovima putem `formId` atributa u BPMN modelu. Sve forme koriste prefix `AsIs_` u identifikatoru (npr. `AsIs_Form_JobRequest`) kako bi se izbjegla kolizija s formama iz To-Be modela koje su deployane na istom Camunda okruženju.

Proces koristi 5 Exclusive Gateway-a koji evaluiraju FEEL izraze nad varijablama postavljenima u formama:
- `GW_Approved`: `=approved = true` — odobrenje budžeta
- `GW_HRPass`: `=hrScreeningPassed = true` — prolaz HR screeninga
- `GW_TechPass`: `=techInterviewPassed = true` — prolaz tehničkog intervjua
- `GW_Accepted`: `=offerAccepted = true` — kandidat prihvaća ponudu
- `GW_Probation`: `=probationPassed = true` — uspješan probni rad

**Primjer: Forma za HR screening (`form-hr-screening.form`)**

Forma sadrži polja za ocjenu soft skills-a (0-100), kulturalne kompatibilnosti (0-100), motivacije kandidata (0-100), radio button za prolaz/pad te textarea za napomene. Varijable koje se postavljaju (`softSkillsScore`, `culturalFitScore`, `motivationScore`, `hrScreeningPassed`, `hrNotes`) koriste se u nastavku procesa — gateway `GW_HRPass` evaluira FEEL izraz `=hrScreeningPassed = true` za odluku o nastavku.

**Primjer: Forma za evaluaciju probnog rada (`form-probation-eval.form`)**

Forma sadrži numeričke ocjene performansi (0-100) i uklapanja u tim (0-100), textarea za postignuća i područja razvoja, te radio button za konačnu odluku. Varijabla `probationPassed` određuje završetak procesa — uspješno zaposlenje ili raskid ugovora.

**Pregled svih formi i process varijabli:**

| Forma | User Task | Ključne varijable |
|-------|-----------|-------------------|
| AsIs_Form_JobRequest | Definiranje zahtjeva | `candidateName`, `roleType`, `seniority`, `salaryRange`, `technicalSkills` |
| AsIs_Form_BudgetApproval | Odobrenje zahtjeva | `approved`, `approvalNotes` |
| AsIs_Form_HRScreening | HR screening | `hrScreeningPassed`, `softSkillsScore`, `culturalFitScore` |
| AsIs_Form_TechInterview | Tehnički intervju | `techInterviewPassed`, `techKnowledgeScore`, `problemSolvingScore` |
| AsIs_Form_Offer | Priprema ponude | `offeredSalary`, `startDate`, `probationMonths` |
| AsIs_Form_CandidateResponse | Odgovor kandidata | `offerAccepted`, `declineReason` |
| AsIs_Form_ITPrepare | IT priprema | `adCreated`, `m365Created`, `vpnConfigured`, `laptopConfigured` |
| AsIs_Form_Equipment | Nabava opreme | `equipmentInStock`, `laptopModel`, `monitorCount`, `equipmentDelivered` |
| AsIs_Form_Onboarding | Onboarding | `docsCompleted`, `equipmentHandedOver`, `accessWorking`, `mentorAssigned` |
| AsIs_Form_ProbationEval | Evaluacija probnog rada | `probationPassed`, `performanceScore`, `teamFitScore` |

### 6.6 Job Worker implementacija

Za Service Task `ST_NotifyAgency` (task type: `send-agency-notification`) implementiran je Job Worker u Node.js korištenjem Express.js frameworka i `@camunda8/sdk` biblioteke.

**Arhitektura:**

```
┌──────────────┐     gRPC (26500)     ┌──────────────┐
│   Zeebe       │◄───────────────────►│  Job Worker   │
│   Engine      │  poll / complete    │  (Express.js) │
└──────────────┘                      └──────┬───────┘
                                              │
                                      REST API (port 3001)
                                              │
                                    ┌─────────┴─────────┐
                                    │ GET /health        │
                                    │ GET /api/positions │
                                    │ GET /api/equipment │
                                    └───────────────────┘
```

**Kako worker funkcionira:**

1. Worker se registrira na Zeebe gateway (`localhost:26500`) i pretplaćuje se na task type `send-agency-notification`
2. Kad procesna instanca dođe do Service Taska `ST_NotifyAgency`, Zeebe aktivira job
3. Worker preuzima job, čita process varijable (`candidateName`, `roleType`, `seniority`, `salaryRange`)
4. Worker simulira slanje email obavijesti vanjskoj agenciji (u produkciji bi se integrirao sa SMTP serverom)
5. Worker vraća rezultat — postavlja varijable `agencyNotified=true`, `notificationTimestamp`, `agencyName` i `expectedShortlistDate`
6. Zeebe nastavlja proces na sljedeći element (Timer Event)

**Ključni dio koda:**

```javascript
const { Camunda8 } = require("@camunda8/sdk");

const camunda = new Camunda8({
  ZEEBE_ADDRESS: "localhost:26500",
  CAMUNDA_SECURE_CONNECTION: false,
});

const zbc = camunda.getZeebeGrpcApiClient();

zbc.createWorker({
  taskType: "send-agency-notification",
  taskHandler: async (job) => {
    const { candidateName, roleType, seniority } = job.variables;
    
    // Simulacija slanja emaila agenciji
    console.log(`📧 Obavijest poslana agenciji za: ${candidateName}`);
    
    return job.complete({
      agencyNotified: true,
      notificationTimestamp: new Date().toISOString(),
      agencyName: "IT Recruitment Agency d.o.o.",
    });
  },
});
```

**REST API endpointi:**

Osim Zeebe workera, Express server nudi dva pomoćna REST endpointa:

| Metoda | URL | Opis | Primjer odgovora |
|--------|-----|------|-----------------|
| GET | `/health` | Status workera | `{ "status": "ok", "uptime": 123.4 }` |
| GET | `/api/positions` | Lista IT pozicija u JGL-u | Array s 3 pozicije (helpdesk, programer, NOC/SOC) |
| GET | `/api/equipment/:roleType` | Profil opreme po poziciji | `{ "laptop": "Dell Precision 5680", "monitors": 2, ... }` |

### 6.7 Deployment i pokretanje

**Korak 1: Pokretanje Camunda 8 okruženja**

```bash
camunda-start.bat
```

**Korak 2: Deployment BPMN modela i formi**

Model i forme deployane su putem Camunda Modelera — opcija Deploy → Cluster endpoint `http://localhost:26500`. 

**Korak 3: Pokretanje Job Workera**

```bash
cd worker
npm install
npm start
```

Worker ispisuje: `🔄 Job Worker pokrenut — čeka taskove tipa: send-agency-notification`

**Korak 4: Pokretanje procesne instance**

Nova instanca pokreće se iz Tasklist sučelja (tab "Processes" → "Start process").

### 6.8 Prikaz izvršavanja procesne instance

Nakon pokretanja instance, proces se izvršava sljedećim redoslijedom:

**1. Operate — praćenje procesne instance**

U Operate sučelju (localhost:8080/operate) vidljiv je cijeli reducirani BPMN dijagram s označenim aktivnim tokenom. Na screenshotu je vidljivo kako token prolazi od Start Eventa kroz User Taskove, Service Task (automatski obrađen workerom), Timer Events, pa do paralelnog gateway-a i konačno do End Eventa.

*[Ovdje umetnuti screenshot iz Operate sučelja]*

**2. Tasklist — rad s User Taskovima**

U Tasklist sučelju (localhost:8080/tasklist) korisnik vidi listu otvorenih taskova. Klikom na task otvara se pripadajuća Camunda forma u kojoj korisnik popunjava podatke i klikom na "Complete" dovršava task.

Redoslijed izvršavanja taskova:

1. **Definiranje zahtjeva** — IT voditelj unosi podatke o poziciji (tip, seniority, plaća, vještine)
2. **Odobrenje zahtjeva** — Uprava odobrava ili odbija (gateway: `approved = true/false`)
3. *(Service Task: automatska obavijest agenciji — obrađuje Job Worker)*
4. *(Timer: čekanje shortliste — 30 sekundi za demo)*
5. **HR screening** — HR ocjenjuje kandidata (gateway: `hrScreeningPassed = true/false`)
6. **Tehnički intervju** — IT voditelj ocjenjuje (gateway: `techInterviewPassed = true/false`)
7. **Priprema ponude** — HR definira uvjete ponude
8. *(Timer: čekanje odgovora — 20 sekundi za demo)*
9. **Odgovor kandidata** — HR unosi odluku kandidata (gateway: `offerAccepted = true/false`)
10. **IT priprema** ∥ **Nabava opreme** — paralelno izvršavanje
11. **Onboarding** — HR provjerava spremnost prvog dana
12. **Evaluacija probnog rada** — IT voditelj evaluira (gateway: `probationPassed = true/false`)

*[Ovdje umetnuti screenshotove iz Tasklist sučelja — forme za unos podataka]*

**3. Job Worker — konzolni output**

Kad procesna instanca dođe do Service Taska, Job Worker u terminalu ispisuje:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 SLANJE OBAVIJESTI VANJSKOJ AGENCIJI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Pozicija:     programer (mid)
  Plaća:        3000 EUR/mj
  Vrijeme:      2026-03-17T12:30:00.000Z
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Obavijest uspješno poslana agenciji!
```

*[Ovdje umetnuti screenshot terminala s worker outputom]*

### 6.9 Zaključak o Camunda 8 implementaciji

Izrada process-driven aplikacije demonstrirala je praktičnu primjenu BPMN modela u egzekutabilnom okruženju. Ključni naučeni aspekti:

**Tehničke spoznaje:**
- Camunda 8 Zeebe engine zahtijeva single-process modele (`isExecutable="true"`) bez collaboration dijagrama, što zahtijeva redukciju složenih modela
- Native Zeebe User Tasks (s `<zeebe:userTask />` elementom) koriste `formId` atribut za povezivanje s formama, za razliku od starijih verzija koje su koristile `formKey`
- Job Workers komuniciraju s engineom putem gRPC protokola i `@camunda8/sdk` biblioteke

**Procesne spoznaje:**
- Redukcija modela s 32 na 10 taskova zadržava svu ključnu procesnu logiku ali gubi granularnost pojedinih koraka
- Timer eventi s kratkim intervalima (PT30S) omogućuju brzo testiranje, ali u produkciji zahtijevaju realne vrijednosti (P14D)
- Paralelni gateway za IT pripremu i nabavu opreme funkcionira kako je predviđeno — obje grane moraju završiti prije onboarding-a

---

## 7. Literatura

### Web izvori i dokumentacija

Camunda. (2024). *Camunda 8 documentation*. https://docs.camunda.io/

Deloitte. (2024). *Global human capital trends 2024*. https://www.deloitte.com/global/en/issues/work/content/global-human-capital-trends.html

Gartner. (2024). *IT talent acquisition research 2024*. https://www.gartner.com/en/human-resources

GuidePoint Security. (2026). *Annual ransomware report 2025*. https://www.guidepointsecurity.com/

Health-ISAC. (2025). *2025 annual cyber threat report: Healthcare sector*. https://www.h-isac.org/

IntuitionLabs. (2025). *In-demand pharma roles: AI, manufacturing & clinical jobs*. https://intuitionlabs.ai/articles/in-demand-pharma-roles

JGL d.d. (2025a). *Financijski izvještaji*. https://www.jgl.hr/o-jgl-u/financijski-izvjestaji

JGL d.d. (2025b). *Karijere*. https://karijera.jgl.hr/

Mitratech. (2025). *What 2025 time-to-fill benchmarks reveal about hiring agility and risk*. https://mitratech.com/resource-hub/blog/what-2025-time-to-fill-benchmarks-reveal-about-hiring-agility-and-risk/

MojPosao.hr. (2025). *Oglasi za posao — IT pozicije*. https://www.mojposao.hr/

SHRM. (2025). *2025 recruiting benchmarking report*. Society for Human Resource Management. https://www.shrm.org/

### Regulatorna dokumentacija i standardi

European Commission. (2011). *EudraLex — Volume 4, Annex 11: Computerised systems*. https://health.ec.europa.eu/

International Society for Pharmaceutical Engineering [ISPE]. (2008). *GAMP 5: A risk-based approach to compliant GxP computerized systems*. ISPE.

International Organization for Standardization [ISO]. (2022). *ISO/IEC 27001:2022 — Information security, cybersecurity and privacy protection*. ISO. https://www.iso.org/standard/27001

U.S. Food and Drug Administration [FDA]. (2003). *21 CFR Part 11 — Electronic records; Electronic signatures*. https://www.ecfr.gov/

### Ostali izvori

Specijalist HR operacija, JGL d.d. (osobna komunikacija, siječanj 2026.).

Rukovoditelj IT infrastrukturne podrške, JGL d.d. (osobna komunikacija, veljača 2026.).

Voditelj Odjela poslovnih aplikacija, JGL d.d. (osobna komunikacija, veljača 2026.).

Direktor Korporativnog IT-a, JGL d.d. (osobna komunikacija, siječanj 2026.).

*Napomena*: Svi web izvori zadnji put pristupljeni u razdoblju siječanj–ožujak 2026. godine. Javno dostupne informacije o JGL d.d. korištene su u skladu s dozvolama za akademske svrhe.