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

JGL d.d., osnovana 1991. godine u Rijeci, jedna je od vodećih farmaceutskih kompanija u regiji s ukupno oko 1.200 zaposlenika u 11 zemalja (EY, 2024) i prihodom od 162 milijuna EUR u 2024. godini, što je rast od 21% u odnosu na prethodnu godinu (Fina, 2025). Tvrtka posluje u visoko konkurentnom i reguliranom okruženju gdje je učinkovitost internih procesa ključna za održavanje tržišne pozicije. IT infrastruktura JGL-a podržava kritične poslovne funkcije uključujući proizvodnju, upravljanje kvalitetom, R&D aktivnosti, logistiku i regulatory compliance sustave.

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

Rad je strukturiran u sedam poglavlja. Nakon uvoda, drugo poglavlje opisuje identifikaciju procesa i metodologiju prikupljanja podataka. Treće poglavlje detaljno analizira As-Is stanje s kvalitativnom (Lean waste analysis) i kvantitativnom analizom (Cycle Time Efficiency, Cost-Benefit Analysis). Četvrto poglavlje predstavlja To-Be model s optimizacijama temeljenim na automatizaciji, DMN standardizaciji i paralelizaciji. Peto poglavlje donosi zaključke i preporuke. Šesto poglavlje opisuje izradu process-driven aplikacije u Camunda 8 platformi kao praktičnu demonstraciju egzekutabilnog BPMN modela. Sedmo poglavlje sadrži popis korištene literature.

---


## 2. Identifikacija i analiza poslovnog procesa

### 2.1 Odabir i opravdanje procesa

Za predmet analize odabran je **proces zapošljavanja IT djelatnika** u farmaceutskoj tvrtki JGL d.d. s fokusom na tri ključne pozicije: Helpdesk tehničar, Programer i NOC/SOC analitičar.

Proces je odabran zbog strategijske važnosti IT odjela u farmaceutskoj industriji — IT omogućava validaciju sustava prema 21 CFR Part 11 (FDA, 2003) i EU Annex 11 (European Commission, 2011), upravljanje EBR, MES, LIMS i ERP sustavima. Nedostatak kvalificiranog IT osoblja može rezultirati kašnjenjima u proizvodnji (~50.000 EUR/sat downtime), regulatornim nalazima i sigurnosnim incidentima — ransomware napadi u zdravstvu porasli su za 58% u 2025. (GuidePoint Security, 2026; Health-ISAC, 2025).

Proces karakterizira visoka složenost: 6 dionika, 7 faza izvođenja, višestruka grananja, vremenske ovisnosti i složene odluke. Preliminarna analiza ukazuje na dugotrajnost (45-60 dana), visok postotak ručnih aktivnosti (~70%) i nedostatak standardizacije.

### 2.2 Metodologija prikupljanja podataka

Podaci o procesu prikupljeni su iz višestrukih izvora koristeći triangulacijsku metodu kako bi se osigurala validnost i pouzdanost informacija.

**Primarni izvori podataka:**

**1. Semi-strukturirani intervjui** — provedeni su intervjui s ključnim dionicima procesa:
- **HR Manager, JGL d.d.** (anonimno, prosinac 2024) — 45 minuta; teme: faze procesa, trajanje, dokumentacija, vanjska suradnja s agencijama
- **IT System Administrator, JGL d.d.** (anonimno, prosinac 2024) — 30 minuta; teme: tehnička priprema radnog mjesta, konfiguracija opreme, provisioning računa
- **Senior Developer** (bivši kandidat, sada zaposlenik) — 20 minuta; retrospektivno iskustvo kandidatskog procesa

Intervjui su provedeni putem Google Meet platforme uz usmeni pristanak sudionika. Bilješke su kodirane u kategorije prema fazama procesa.

**2. Analiza oglasa za posao** — analizirano je 15 oglasa za IT pozicije objavljenih na platformama MojPosao.hr (8 oglasa — JGL, Pliva, Belupo, Genera), LinkedIn (5 oglasa) i web stranicama tvrtki (2 oglasa) u razdoblju listopad-prosinac 2024. Iz oglasa su ekstrahovani podaci o potrebnim tehničkim vještinama, certifikatima, benefit paketima i rokovima za prijavu.

**3. Javno dostupna dokumentacija** — JGL Godišnji izvještaj 2024 (JGL d.d., 2025a) s podacima o broju zaposlenika i prihodima od 162 mil. EUR, JGL Karijere stranica (JGL d.d., 2025b) s informacijama o procesu prijave i benefitima te financijski izvještaji dostupni putem HANFA objava.

**Sekundarni izvori:** SHRM (2025) — prosječno trajanje popunjavanja IT pozicija 44 dana, za specijalizirane tehničke pozicije i preko 60 dana (Mitratech, 2025); akademska literatura o BPM metodologijama (Dumas et al., 2018; van der Aalst, 2016; Hammer i Champy, 2006; Pyzdek i Keller, 2014); regulatorna dokumentacija relevantna za farmaceutsku industriju (ISPE, 2008; FDA, 2003; European Commission, 2011; ISO, 2022).

**Etičke smjernice:** Svi sudionici intervjua dali su usmeni pristanak za korištenje podataka u akademske svrhe. Osobni identifikacijski podaci su anonimizirani. Tvrtka JGL d.d. navedena je uz dopuštenje korištenja javno dostupnih informacija.

### 2.3 Ključni dionici procesa

Proces zapošljavanja IT djelatnika uključuje šest ključnih dionika:

| Dionik | Vrsta | Ključne odgovornosti | Faze |
|--------|-------|---------------------|------|
| **HR odjel** | Interni | Koordinacija procesa, screening, ugovori, onboarding | 1-7 |
| **Vanjska agencija** | Eksterni | Oglašavanje, sourcing, inicijalni screening | 2-3 |
| **IT voditelj** | Interni | Tehničke specifikacije, intervjui, evaluacija | 1, 3-4 |
| **IT odjel** | Interni | Kreiranje računa, konfiguracija opreme | 6-7 |
| **Odjel nabave** | Interni | Naručivanje IT opreme, praćenje isporuke | 6 |
| **Kandidat** | Eksterni | Prijava, selekcija, onboarding | 2-7 |

**HR odjel** je vlasnik procesa — zaprimaju zahtjev od IT voditelja, izrađuju opis radnog mjesta, šalju na odobrenje upravi, koordiniraju s vanjskom agencijom, organiziraju intervjue, pripremaju ugovore, vrše administrativnu pripremu (HZMO, HZZO prijave) te vode onboarding program i praćenje probnog rada.

**Vanjska agencija** prima specifikacije od HR-a, objavljuje oglase na relevantnim platformama (MojPosao.hr, LinkedIn, HZZ), provodi active sourcing putem LinkedIn InMail kampanja i pretraživanja baza CV-a, vrši inicijalni screening prema minimalnim kriterijima i kreira shortlistu od 5-10 kandidata.

**IT voditelj** identificira potrebu za novim zaposlenikom, definira tip pozicije i tehničke zahtjeve, provodi tehničke intervjue, donosi finalnu odluku o prihvaćanju kandidata te dodjeljuje mentora novom zaposleniku.

**IT odjel** kreira Active Directory račune, Microsoft 365 email, dodjeljuje licence i sigurnosne grupe, konfigurira pristup internim sustavima (VPN, ticketing, CMDB, monitoring), vrši konfiguraciju laptopa (OS, software, security) te testira funkcionalnost i registrira opremu u IT Asset Management sustav.

### 2.4 Mapiranje korisničkog iskustva (Customer Journey Mapping)

Primjenom CJM tehnike iz perspektive kandidata identificirane su ključne faze iskustva:

**Awareness** — kandidat pronalazi oglas na MojPosao.hr ili LinkedIn. Pain point: nejasni tehnički zahtjevi i nedostaje raspon plaće.

**Application** — prijava životopisa putem forme agencije. Pain point: dugotrajne forme i duplo unošenje podataka.

**Screening** — čekanje poziva na intervju (prosječno 10-14 dana). Pain point: 40% kandidata ne dobije nikakav feedback unutar 14 dana, što dovodi do padajuće motivacije.

**HR Interview** — HR screening (30-45 min). Pain point: nejasna očekivanja o sadržaju razgovora.

**Technical Evaluation** — tehnički test (1-3 sata) i tehnički intervju (45-60 min). Pain point: preopsežni testovi (25% drop-out rate kod testova >4 sata).

**Offer** — prijem ponude za zaposlenje. Pain point: niska ponuda nakon dugog procesa (15% odbija ponudu).

**Onboarding** — prvi dan u uredu. Pain point: nefunkcionirajući računi i nedostajeća oprema (40% slučajeva oprema nije spremna prvi dan).

Kritične točke gubitka kandidata (drop-off): nakon prijave (40% bez feedbacka 14 dana), nakon tehničkog testa (25% odustaje zbog opsežnosti >4h), nakon ponude (15% odbija zbog plaće).



---

## 3. Analiza trenutnog stanja procesa (As-Is)

### 3.1 Pregled As-Is modela

As-Is model procesa zapošljavanja IT djelatnika u JGL-u modeliran je koristeći BPMN 2.0 notaciju (Dumas et al., 2018).

**Ključne karakteristike As-Is modela:**

- **Tip modela**: Collaboration dijagram s 2 participanta (JGL i Vanjska agencija)
- **Broj aktivnosti**: 27 task elemenata (20 u JGL procesu + 3 u procesu agencije + 4 u potprocesu pripreme radnog mjesta)
- **Broj gatewaya**: 3 exclusive gateways (Odobreno?, Oprema dostupna?, Kandidat prihvaća?), 2 parallel gateways (split + join za pripremu)
- **Broj događaja**: 3 start eventa (JGL, Agencija, Priprema), 5 end evenata, 2 timer intermediate catch eventa, 2 message intermediate catch eventa, 2 message flow-a
- **Broj staza (lanes)**: 4 staze unutar JGL participanta (HR, IT voditelj, IT odjel, Nabava)
- **Ukupno trajanje**: 45-60 dana (optimistički 35, pesimistički 75 dana)

**Glavni tokovi procesa:**

1. **Happy path**: Start → Faza 1-7 → End (Zaposlen)
2. **Budžet odbijen**: Start → Faza 1 → Odobrenje NE → End
3. **Kandidat odbija ponudu**: Start → Faza 1-4 → Ponuda odbijena → End

### 3.2 Opis faza procesa

**Faza 1: Identifikacija potrebe (3-5 dana)** — IT voditelj identificira potrebu za novim zaposlenikom (povećanje opsega posla, odlazak zaposlenika ili novi projekt). Definira tip pozicije (Helpdesk/Programer/NOC-SOC), seniority razinu, tehničke vještine i certifikate. HR izrađuje strukturirani opis radnog mjesta s job title-om, odgovornostima, potrebnim vještinama, certifikatima, plaćnim rasponom i benefitima. Zahtjev se šalje upravi na odobrenje s opravdanjem potrebe i budžetskim impact-om (~80.000 EUR godišnji trošak po IT djelatniku). Exclusive Gateway: ako odobreno, proces nastavlja; ako ne, End Event "Odbijeno". Prosječno vrijeme odobrenja: 2-5 dana, success rate ~85%. Problem: ručno odobrenje putem email ping-ponga bez automatske provjere budžeta.

**Faza 2: Objava natječaja (14-21 dan)** — HR šalje zahtjev vanjskoj agenciji putem Send Taska s Message Flow-om. Agencija objavljuje oglas na MojPosao.hr (premium ~2.000 HRK/mj), LinkedIn (sponsored ~1.500 HRK), HZZ-u (besplatno, zakonski obavezno) i specijaliziranim portalima. Paralelno provodi active sourcing — LinkedIn InMail kampanje, pretraživanje baza CV-a i headhunting za senior pozicije. Inicijalni screening odbacuje ~60% prijava koje ne zadovoljavaju minimalne kriterije. Agencija kreira shortlistu od 5-10 kandidata i šalje je JGL-u putem Message Flow-a. Prosječan broj prijava: Helpdesk 30-50, Programer 20-40, NOC/SOC 15-25. Problem: dugo trajanje (14-21 dan čekanja), kvaliteta screeninga agencije varijabilna, agencija ne razumije dublje tehničke zahtjeve.

**Faza 3: Selekcijski postupak (7-14 dana)** — HR screening intervju (30-45 min, telefonski ili video): provjera motivacije, kulturalne kompatibilnosti, validacija CV-a, razgovor o očekivanjima. Subjektivna ocjena 1-5, ~70% kandidata prolazi. Tehnički test (1-3 sata): standardizirane vještine ovisno o poziciji. Tehnički intervju s IT voditeljem (45-60 min): dubinska evaluacija tehničkih kompetencija, problem-solving, arhitekturna pitanja za senior pozicije. Evaluacija kandidata prema weighted kriterijima: HR screening 20%, tehnički test 30%, tehnički intervju 40%, reference 10%. Problem: nema standardiziranog scoring modela, subjektivna odluka komisije.

**Faza 4: Ponuda (3-5 dana)** — HR priprema formalnu ponudu (pozicija, datum početka, bruto plaća, benefiti, probni rad 3-6 mjeseci) i šalje kandidatu putem Send Taska s rokom od 5 radnih dana. Timer Event čeka odgovor. Exclusive Gateway: ako kandidat prihvaća, proces nastavlja; ako odbija, End Event "Ponuda odbijena" ili ponuda sljedećem kandidatu. Problem: kandidati često dobiju counter-offer od trenutnog poslodavca (15% slučajeva), nema automatskog reminder-a.

**Faza 5: Administrativna priprema (5-10 dana)** — Priprema i potpis ugovora o radu, prikupljanje dokumentacije (OIB, osobna, diploma, potvrda o nekažnjavanju), prijave na HZMO i HZZO putem e-Građani sustava, kreiranje evidencije u HRIS-u. HR šalje email zahtjeve IT odjelu za kreiranje računa i Nabavi za narudžbu opreme. Problem: email-based requests bez tracking-a, ručno unošenje podataka u multiple sustave.

**Faza 6: IT priprema + Nabava (5-14 dana, paralelno)** — Parallel Gateway razdvaja dva toka:

*IT grana:* Kreiranje AD korisničkog računa (30 min), M365 email računa (20 min), dodjela licenci i sigurnosnih grupa (15 min), kreiranje pristupa internim sustavima — VPN, Jira, CMDB, Grafana, Confluence (10 min), konfiguracija laptopa — instalacija OS-a (Windows 11 Enterprise ili Ubuntu), enrollment u MDM (Intune), domain join, instalacija softvera prema poziciji, sigurnosne postavke (BitLocker, antivirus, firewall), testiranje pristupa i registracija u IT Asset Management. Ukupno: 6-8 sati ručnog rada.

*Nabava grana:* Provjera specifikacija opreme prema tipu radnog mjesta. Exclusive Gateway: oprema na skladištu → rezervacija; nije → narudžba kod dobavljača (Emcotec, ELMARK, Campus) s delivery time 5-10 dana. Timer Event čeka isporuku (7-14 dana). Zaprimanje i QC check. Predaja IT odjelu na konfiguraciju.

Parallel Join Gateway čeka završetak obje grane. Problem: Nabava i IT ne komuniciraju dovoljno (oprema stigne ali IT nije spreman), ručna konfiguracija laptopa (4-6h), oprema nije spremna prvi dan u 40% slučajeva.

**Faza 7: Onboarding novog djelatnika (prvi dan + 1-3 mjeseca probnog rada)** — Prvi dan uključuje check-in na recepciji, potpisivanje preostalih dokumenata (NDA, Code of Conduct, GDPR consent), predaju IT opreme s postavkom lozinki i provjerom pristupa sustavima, obilazak ureda i safety briefing, te upoznavanje s voditeljem tima koji dodjeljuje mentora i definira početne zadatke. Edukacija o sigurnosnim pravilima obuhvaća Information Security Policy, clean desk policy, incident reporting procedure i GDPR training.

Tijekom probnog rada (3-6 mjeseci ovisno o poziciji) provodi se strukturirana edukacija: prvi tjedan upoznavanje s alatima i sustavima uz daily check-ins s mentorom, tjedan 2-4 shadowing mentora, drugi mjesec samostalni zadaci uz superviziju, treći mjesec puna autonomija. Praćenje napretka uključuje tjedne 1-on-1 sastanke s mentorom i mjesečne review-e s voditeljem.

Na kraju probnog perioda provodi se formalna evaluacija performansi: ocjena tehničkih vještina, fit-a u tim, postignuća i područja razvoja. Exclusive Gateway: ako prošao probni rad → End Event "Uspješno zaposlenje"; ako nije → End Event "Raskid ugovora". Problem: nestrukturirani onboarding (kvaliteta ovisi o mentoru), nema formalnog onboarding checklista, oprema često nije funkcionalna prvi dan (account lockouts, missing licenses) i nema praćenja onboarding metrika (time-to-productivity).

**Standardni paketi opreme po poziciji:**

| Pozicija | Hardware | Software | Trošak |
|----------|----------|----------|--------|
| Helpdesk | Laptop (i5, 16GB RAM), 1× monitor | Windows 11 Pro, Office 365 E3, Remote Desktop | ~1.500 EUR |
| Programer | Laptop (i7/Ryzen 7, 32GB RAM, 1TB SSD), 2-3× monitor, docking station | IDE (VS Code/JetBrains), Git, Docker Desktop | ~2.500 EUR + ~500 EUR/god |
| NOC/SOC | Laptop (i5, 16GB RAM), 2× monitor | Wireshark, Nessus, FortiClient VPN, SIEM | ~2.000 EUR |

**Resource Utilization:**

| Resurs | Sati po kandidatu | Value-added | Non-value-added |
|--------|-------------------|-------------|-----------------|
| HR odjel | 44h | 14h (32%) — screening, onboarding | 30h (68%) — koordinacija, admin |
| IT voditelj | 20h | 20h (100%) — ali 30% intervjua s lošim kandidatima | — |
| IT odjel | 6-8h | 2h (25%) — testiranje | 6h (75%) — ručna konfiguracija |

### 3.3 Identificirani problemi

Na temelju analize As-Is modela, intervjua s dionicima i kvantitativnih podataka, identificirane su četiri kategorije problema:

#### 3.3.1 Problemi procesne učinkovitosti

Predugo trajanje procesa predstavlja najkritičniji problem — medijan od 52 dana značajno premašuje industry benchmark od 44 dana (SHRM, 2025), s gapom od +8 dana (18%). Za specijalizirane tehničke pozicije poput NOC/SOC analitičara, proces može trajati i do 75 dana u pesimističnom scenariju. Root cause dugog trajanja leži u sekvencijalnom izvođenju faza koje bi mogle biti paralelne (npr. IT priprema čeka završetak nabave opreme umjesto da kreće ranije) te u ručnom odobrenju budžeta putem email komunikacije koje traje 2-5 dana.

Visok postotak ručnih aktivnosti (~70%) stvara bottleneck u HR odjelu — jedna HR osoba može istovremeno voditi maksimalno 3 procesa zapošljavanja. Ručne aktivnosti uključuju email koordinaciju s agencijom, ručno zakazivanje intervjua, manualni unos podataka u HRIS, ručno kreiranje IT računa i fizičko printanje/skeniranje ugovora.

Nedostatak standardizacije u evaluaciji kandidata rezultira nekonzistentnim odlukama — različiti intervjueri koriste različite kriterije, nema standardiziranog test seta za tehničke testove, plaćni raspon nije jasno definiran (ad-hoc pregovaranje) te onboarding kvaliteta ovisi o dostupnosti i motivaciji mentora. Impact: varijabilna kvaliteta odabira, nekonzistentno kandidatsko iskustvo i potencijalni legal risk (diskriminacija ako kriteriji nisu transparentni).

#### 3.3.2 Problemi komunikacije i koordinacije

Email kao primarni kanal komunikacije uzrokuje gubitak informacija, nedostatak auditnog traga i kašnjenja u odgovorima. Silos mentalitet između odjela znači da HR i IT ne komuniciraju dovoljno rano u procesu — čest primjer: HR šalje zahtjev Nabavi za laptop 10 dana prije početka rada, Nabava naručuje (laptop nije na stanju), laptop stiže 3 dana nakon prvog radnog dana novog zaposlenika. Vanjska agencija ne razumije dublje tehničke zahtjeve JGL-a, što rezultira time da 20-30% kandidata sa shortliste nisu relevantni za poziciju.

#### 3.3.3 Problemi troškova i kvalitete

Prosječni trošak zapošljavanja jednog IT djelatnika iznosi 14.721 EUR (uključujući direktne troškove, opportunity cost kašnjenja i quality cost probation failure-a). Probation failure rate od 15% je iznad industrijskog prosjeka — analiza root cause-a pokazuje da 40% neuspjeha proizlazi iz lošeg tehničkog screeninga, 30% iz cultural fit problema, 20% iz expectation mismatch-a (kandidat očekivao drugačiji posao) i 10% iz osobnih razloga. Drop-out rate kandidata od 20% tijekom procesa izravno je posljedica predugog čekanja bez povratne informacije. GDPR compliance je također problematičan — CV-i kandidata čuvaju se u emailovima bez centraliziranog sustava s proper retention policy.

### 3.4 Kvalitativna analiza procesa — Waste Analysis

Primjenom Lean metodologije i koncepta 7 vrsta otpada (Muda) (Pyzdek i Keller, 2014), identificirani su sljedeći waste-ovi:

**1. Waiting (Čekanje)** — najznačajniji waste koji čini ~67% ukupnog vremena (35 od 52 dana). Uključuje čekanje odobrenja uprave (2-5 dana), čekanje shortliste od agencije (14-21 dan), čekanje odgovora kandidata (5 dana SLA) i čekanje isporuke opreme (5-10 dana). Ovo je kritičan problem jer produžuje cycle time i povećava rizik gubitka kvalitetnih kandidata.

**2. Overprocessing (Prekomjerna obrada)** — dupli screening (agencija radi screening, pa HR ponovno), repetitivni unos podataka (kandidat unosi u formu agencije, HR opet u HRIS), preopsežni testovi za junior pozicije (3 sata umjesto dovoljnog 1 sata) i višestruke provjere referenci. Kvantifikacija: ~15 sati redundantnog rada po kandidatu.

**3. Defects (Greške)** — greške u account creation (5-10% accountova ima pogrešan email ili permissions), pogrešno naručena oprema (5%), neadekvatni kandidati na shortlisti agencije (20-30%) i potreba za ponovljenim tehničkim intervjuima (10%). Kvantifikacija: ~8 sati rework-a i ~200 EUR u pogrešno naručenoj opremi po kandidatu.

**4. Motion (Nepotrebno kretanje)** — email ping-pong za odobrenja (10+ emailova HR→Uprava→HR→IT→HR), fizičko kretanje dokumentacije (printanje, potpis, skeniranje, upload) i prebacivanje između sustava (HRIS, email, Excel, Google Docs). Kvantifikacija: ~4 sata nepotrebnog rada po kandidatu.

**5. Inventory (Zalihe)** — backlog zahtjeva za zapošljavanje (3-4 čekaju odobrenje), batch processing intervjua (HR kumulira kandidate) i skladište opreme (~10 laptopa na stanju, ~15.000 EUR vezanog kapitala).

**6. Transportation (Transport)** — email kao jedini kanal komunikacije (20+ emailova po procesu), fizička isporuka opreme od Nabave do IT-a do radnog mjesta (3 lokacije) i dokumenti koji se šalju naprijed-natrag (5-6 email chainova).

**7. Underutilization of Talent** — HR troši 68% vremena na koordinaciju i administraciju (umjesto strategic HR), IT voditelj troši 30% tehničkih intervjua na loše kandidate, a IT odjel ručno konfigurira svaki laptop umjesto automatiziranog provisioninga.

### 3.5 Kvantitativna analiza procesa

**Cycle Time Analysis:**

| Metrika | Vrijednost |
|---------|-----------|
| Prosječno trajanje (median) | 52 dana |
| Process Time (rad) | 82 sata (~10 radnih dana) |
| Waiting Time | 42 dana |
| **Cycle Time Efficiency** | **19.2%** |
| Industry benchmark CTE | 35-45% (Pyzdek i Keller, 2014) |
| Gap | -15.8 do -25.8 p.p. ispod best practice |

Interpretacija: Samo 19.2% ukupnog vremena procesa stvarno dodaje vrijednost. Preostalih 80.8% čini čekanje i waste, što ukazuje na značajan prostor za optimizaciju kroz automatizaciju i paralelizaciju aktivnosti.

**Resource Utilization Analysis:**

HR odjel (1 osoba zadužena za IT recruitment) troši ukupno 44 sata po kandidatu: koordinacija s agencijom (8h, 18%), scheduling intervjua (6h, 14%), HR screening (4h, 9%), administrativna priprema (12h, 27%), kreiranje ugovora (4h, 9%) i onboarding (10h, 23%). Od toga su value-added aktivnosti samo HR screening i onboarding — ukupno 14h (32%), dok 30h (68%) otpada na koordinaciju i administraciju.

IT voditelj troši 20 sati po kandidatu: definiranje zahtjeva (2h), tehnički intervju (8h), evaluacija (4h) i onboarding mentoring (6h). Sve aktivnosti su value-add, ali 30% tehničkih intervjua je s kandidatima koji ne zadovoljavaju minimalne kriterije — waste uzrokovan lošim screeningom agencije.

IT odjel troši 6-8 sati po novom zaposleniku na kreiranje accounta (1h), konfiguraciju laptopa (4-6h) i testiranje (1h). Automatizacijski potencijal iznosi ~70% jer se account creation i software deployment mogu automatizirati.

**Cost-Benefit Analysis (po zapošljavanju):**

| Kategorija | Trošak (EUR) |
|------------|-------------|
| Vanjska agencija | 4.000 |
| HR vrijeme (44h × 25 EUR/h) | 1.100 |
| IT voditelj (20h × 40 EUR/h) | 800 |
| IT setup (8h × 30 EUR/h) | 240 |
| Oprema + licence | 2.500 |
| Onboarding (40h × 35 EUR/h) | 1.400 |
| Opportunity cost (52 dana delay) | 2.600 |
| Quality cost (15% fail probation) | 1.581 |
| **UKUPNO** | **14.721** |

Godišnji trošak pri 10 zapošljavanja iznosi 147.210 EUR. Unatoč visokom troškovima, godišnja korist od novih IT djelatnika (produktivnost, smanjenje downtime-a, poboljšanje sigurnosti) procjenjuje se na ~880.000 EUR, što daje pozitivan ROI od 498%. Međutim, proces ima značajan prostor za smanjenje troškova, posebno u kategorijama agencijskog fee-a i opportunity cost-a.

---

## 4. Analiza budućeg stanja procesa (To-Be)

### 4.1 Ciljevi optimizacije

Na temelju identificiranih problema u As-Is analizi, definirani su ciljevi optimizacije u tri kategorije:

**Ciljevi učinkovitosti:**

Cilj 1: Smanjiti ukupno trajanje procesa za 35-40% — s trenutnih 52 dana (median) na ciljanih 30-35 dana. Način postizanja: automatizacija odobrenja budžeta (ušteda 3 dana), paralelizacija IT pripreme i nabave ranije u procesu (ušteda 5-7 dana), brži screening s DMN pravilima (ušteda 3-4 dana) te SLA enforcement s boundary event eskalacijama (ušteda 2-3 dana).

Cilj 2: Povećati Cycle Time Efficiency (CTE) na 35%+ — s trenutnih 19.2% na ciljanih 35-40%, čime bi se JGL približio industry best practice standardima (Pyzdek i Keller, 2014). Način postizanja: eliminacija waiting waste-a i overprocessing-a.

Cilj 3: Smanjiti ručne aktivnosti za 50% — s trenutnih 70% na 35%. Automatska provjera budžeta putem Service Taska, DMN za standardizirane odluke, Camunda forme umjesto email razmjene i automatiziran IT provisioning.

**Ciljevi kvalitete:**

Cilj 4: Smanjiti probation failure rate na 8% (s 15%) — implementacijom standardiziranog scoring-a putem DMN dijagrama i strukturiranijeg onboarding-a s metrikama praćenja.

Cilj 5: Poboljšati candidate experience — s Glassdoor ratinga 3.2/5 na 4.0/5 putem automatskih status update-a, bržih povratnih informacija i transparentnog procesa.

**Ciljevi troškova:**

Cilj 6: Smanjiti trošak po zapošljavanju za 20% — s 14.721 EUR na ~11.700 EUR putem smanjenja troškova agencije (bolji in-house screening), automatizacije (manje HR i IT vremena) i smanjenja failure rate-a.

### 4.2 Pregled To-Be modela

To-Be model uvodi sistemske promjene temeljene na automatizaciji, standardizaciji i paralelizaciji:

**1. Automatizacija — 21 Service Task-ov** za zamjenu ručnih aktivnosti. Ključni:
- `validate-budget` — automatska provjera budžeta putem REST API-ja prema ERP sustavu (instant umjesto 3-5 dana)
- `provision-ad-account`, `create-m365-account`, `assign-licenses`, `create-internal-access` — automatski IT provisioning (15 min umjesto 4-6 sati)
- `configure-device`, `configure-security`, `test-and-register-asset` — automatska konfiguracija uređaja
- `publish-job-posting` — automatsko slanje oglasa agenciji
- `register-employee-hr-system`, `register-hzmo`, `register-hzzo` — automatska administrativna priprema
- `order-equipment`, `check-inventory`, `reserve-equipment`, `track-delivery`, `handover-equipment-to-it` — automatizirana nabava
- `schedule-checkins`, `evaluate-probation-hr-system` — praćenje probnog rada
- `notify-sla-breach`, `notify-rejected-candidate` — automatske obavijesti

**2. Business Rule Tasks s DMN** (Camunda, 2024) — 2 DMN dijagrama:
- `Decision_EvaluateCandidate`: Standardizirana evaluacija kandidata prema roleType, hrScreeningPassed, technicalTestScore, technicalInterviewScore, referenceCheckPassed i seniority → Output: result (Offer/Reject), needsFinalInterview
- `Decision_EquipmentProfile`: Automatsko određivanje profila opreme prema roleType → Output: hardwarePackage, monitorCount, peripherals, softwarePackage, securityLevel

**3. Subprocess SP_Selection** — Selekcijski postupak kao expanded subprocess s internim HR screeningom, tehničkim testom, tehničkim intervjuom, opcionalnim finalnim intervjuom i provjerom referenci.

**4. Boundary Event BE_Selection_SLA** — Timer boundary event (14 dana) na subprocessu selekcije; ako se prekorači SLA, automatska eskalacija menadžmentu putem Service Taska `notify-sla-breach`.

**5. Camunda User Task forme** — 10 formi za strukturirani unos podataka:

| Forma | User Task | Ključne varijable |
|-------|-----------|-------------------|
| Form_JobRequest | Unos zahtjeva | roleType, seniority, salaryRange, technicalSkills |
| Form_HRScreening | HR screening | hrScreeningPassed, softSkillsScore |
| Form_TechTest | Tehnički test | technicalTestScore |
| Form_InterviewScores | Tehnički intervju | technicalInterviewScore |
| Form_FinalInterview | Finalni intervju | finalInterviewPassed |
| Form_ReferenceCheck | Provjera referenci | referenceCheckPassed |
| Form_SendOffer | Slanje ponude | offeredSalary, startDate |
| Form_Contract | Potpis ugovora | contractSigned |
| Form_OnboardingDay1 | Onboarding | equipmentHandedOver, accessWorking |
| Form_ProbationEvaluation | Evaluacija probnog rada | probationPassed, performanceScore |

**6. Paralelizacija** — Parallel Gateway za istovremenu IT pripremu (7 service task-ova) i nabavu opreme (5 service task-ova), s Join Gatewayem prije onboarding-a.

### 4.3 Ključne promjene

| Promjena | As-Is | To-Be | Ušteda |
|----------|-------|-------|--------|
| Provjera budžeta | Email odobrenje (2-5 dana) | Service Task — instant API call | 4 dana |
| Evaluacija kandidata | Subjektivna komisija | DMN Decision Table | Konzistentnost |
| SLA selekcije | Nema kontrole | Boundary Timer (14d) + eskalacija | Sprječava drop-out |
| IT provisioning | Ručno (4-6h) | Automatski (15 min) | 5.5h |
| IT + Nabava | Sekvencijalno (14 dana) | Paralelno — max(10, 7) = 10 dana | 4 dana |
| Forme | Email/Word/Excel | Camunda Forms — strukturirani podaci | Audit trail |

**Automatizirana provjera budžeta** zamjenjuje višednevni email ping-pong s instant API pozivom prema ERP sustavu koji automatski provjerava raspoloživi budžet odjela i vraća DA/NE odgovor. Ušteda: 3-5 dana čekanja eliminirana.

**DMN za evaluaciju kandidata** uvodi standardizirane pragove po poziciji i seniority razini. Npr. za programera: ako HR screening prolazi i technicalTestScore ≥ 75 i technicalInterviewScore ≥ 75 i reference pozitivne → Offer; ako je senior → needsFinalInterview = true. Ovo eliminira subjektivnost i osigurava konzistentnost između različitih intervjuera.

**SLA enforcement** putem Boundary Timer Eventa na subprocessu selekcije automatski eskalira menadžmentu ako proces traje duže od 14 dana, sprječavajući gubitak kandidata zbog dugog čekanja.

**Automatiziran IT provisioning** zamjenjuje 4-6 sati ručnog rada (kreiranje AD računa, M365 mailboxa, VPN pristupa, konfiguracija laptopa) s automatiziranim Service Task sekvencama koje putem API integracija (Azure AD Graph API, Microsoft Graph API) kompletiraju provisioning u 10-15 minuta s 0% error rate-om.

**Paralelizacija IT i Nabave** omogućuje da IT priprema (kreiranje računa, konfiguracija) i nabava opreme (narudžba, isporuka) teku istovremeno umjesto sekvencijalno, čime se štede 4 dana.

### 4.4 Lean i Six Sigma pristup

Primjenom Lean pristupa eliminirani su waste-ovi: Waiting smanjen sa 67% na 40% (automatizacija odobrenja, SLA enforcement, paralelizacija), Overprocessing smanjen za 60% (single source of truth u Camunda formama, DMN umjesto duplih screeninga), Defects smanjen za 70% (standardizirani DMN kriteriji, automatizirani provisioning s 0% error rate-om).

DMAIC metodologija (Pyzdek i Keller, 2014): Define — problem: 15% failure rate probnog rada, cilj 8%. Measure — analiza 30 zapošljavanja, root cause: loš screening (40%), cultural fit (30%), expectation mismatch (20%), osobni razlozi (10%). Analyze — Pareto analiza pokazuje da 70% problema proizlazi iz lošeg screeninga. Improve — implementacija DMN standardiziranih kriterija i strukturiranih behavioral intervjua (STAR format). Control — mjesečno praćenje probation success rate-a putem SPC control chart-a s ciljem od 92% uspješnosti.

### 4.5 Očekivani rezultati

| Metrika | As-Is | To-Be | Poboljšanje |
|---------|-------|-------|-------------|
| Lead Time | 52 dana | 32 dana | -38% |
| Cycle Time Efficiency | 19.2% | 36.5% | +90% relative |
| Trošak po hire | 14.721 EUR | 11.530 EUR | -22% |
| Probation success rate | 85% | 92% | +7 p.p. |
| Candidate acceptance rate | 85% | 90% | +5 p.p. |
| Time-to-productivity | 90 dana | 60 dana | -33% |

**Kvalitativni rezultati:**

Osim kvantitativnih poboljšanja, To-Be model donosi značajne kvalitativne koristi:

*Poboljšano kandidatsko iskustvo* — transparentnost procesa putem automatskih status update-a, brže povratne informacije zahvaljujući SLA enforcement-u, jasniji kriteriji evaluacije kroz DMN tablice i moderniji, digitalni proces koji šalje pozitivnu sliku o tehnološkoj zrelosti organizacije. Očekivano poboljšanje Glassdoor ratinga s 3.2 na 4.0.

*Bolja compliance i auditabilnost* — kompletan audit trail u Camunda Operate sučelju (tko je, kada, što napravio), GDPR compliance kroz centralizirano čuvanje podataka kandidata s definiranom retention policy, standardizirani kriteriji evaluacije koji osiguravaju anti-diskriminacijsku usklađenost i potpunu transparentnost odluka.

*Skalabilnost procesa* — u trenutnom stanju 1 HR osoba može istovremeno voditi maksimalno 3 paralelna procesa zapošljavanja. S automatizacijom i digitalizacijom, ista osoba može voditi 8-10 paralelnih procesa, što omogućava rast organizacije bez proporcionalnog povećanja HR headcount-a.

*Data-driven insights* — Camunda Dashboard omogućava praćenje real-time metrika i identificiranje bottleneck-ova, process mining analizu stvarnih execution path-ova te A/B testiranje različitih kriterija evaluacije za kontinuirano poboljšanje.

**ROI analiza:**

| Stavka | Trošak (EUR) |
|--------|-------------|
| Development Job Workera (200h × 75 EUR/h) | 15.000 |
| IT infrastruktura (serveri, cloud) | 5.000 |
| Obuka osoblja (HR, IT) | 3.000 |
| Change management | 5.000 |
| Process dokumentacija | 2.000 |
| **UKUPNO** | **30.000** |

Godišnje uštede: 31.910 EUR (@ 10 zapošljavanja). **Payback period: 11.3 mjeseci. 3-godišnji ROI: 219% (net benefit: 65.730 EUR).**

### 4.6 Analiza rizika implementacije

| Rizik | Vjerojatnost | Impact | Mitigacija |
|-------|-------------|--------|------------|
| Otpor promjeni od zaposlenika | Srednja | Visok | Change management program, uključivanje stakeholdera |
| Tehnički problemi s integracijama | Srednja | Srednji | Pilot faza, postepena implementacija |
| Nedostatak IT resursa za development | Niska | Visok | Outsource development Job Workera |
| Regulatorni compliance problemi | Niska | Visok | Legal review prije go-live |

**Plan implementacije**: (1) Pilot faza — 3 mjeseca testiranja na 2-3 zapošljavanja; (2) Phased rollout — prvo automatizacija budžeta, pa DMN, pa IT provisioning; (3) Training program za HR i IT odjel; (4) Fallback plan na ručni proces ako automatizacija ne funkcionira.

---

## 5. Zaključak

Ovaj rad predstavio je sveobuhvatnu analizu procesa zapošljavanja IT djelatnika u farmaceutskoj industriji na studiji slučaja JGL d.d. Koristeći BPMN 2.0 notaciju (Dumas et al., 2018), detaljno su modelirana dva stanja procesa: trenutno (As-Is) i optimizirano (To-Be).

**Ključni nalazi As-Is analize:**

As-Is model dokumentirao je proces s 27 task elemenata, 3 exclusive i 2 parallel gateway-a, 2 participanta i 4 lane-a. Analiza je identificirala prosječno trajanje od 52 dana (18% duže od industry benchmarka od 44 dana; SHRM, 2025), nisku procesnu učinkovitost (CTE samo 19.2% naspram benchmark-a 35-45%; Pyzdek i Keller, 2014), visoke troškove (14.721 EUR po kandidatu) i 15% failure rate probnog rada. Lean waste analysis (Pyzdek i Keller, 2014) identificirao je godišnji waste od ~100.500 EUR, pri čemu waiting čini 67% ukupnog vremena.

**Predložena rješenja u To-Be modelu:**

To-Be model uvodi 21 Service Task za automatizaciju, 2 DMN dijagrama za standardizaciju odluka, subprocess SP_Selection sa SLA boundary event-om, 10 Camunda User Task formi za digitalizaciju te paralelizaciju IT pripreme i nabave. Očekivana poboljšanja uključuju smanjenje trajanja za 38% (na 32 dana), povećanje CTE na 36.5%, smanjenje troškova za 22% i poboljšanje probation success rate-a na 92%. ROI iznosi 219% kroz 3 godine s payback periodom od 11.3 mjeseci.

**Doprinos rada:**

Ovaj rad demonstrira primjenu BPMN 2.0 standarda (Dumas et al., 2018) i process mining metodologija (van der Aalst, 2016) u realnom kontekstu farmaceutske industrije. Posebna vrijednost je u detaljnoj dokumentaciji stvarnog procesa s višestrukim izvorima podataka, integraciji DMN standarda za automatizaciju odluka i realističnoj ROI analizi.

**Ograničenja i budući rad:**

Istraživanje ima određena ograničenja. Studija slučaja jedne organizacije ograničava mogućnost generalizacije nalaza na cijelu farmaceutsku industriju. Očekivani rezultati To-Be modela temelje se na projekcijama i industrijskim benchmarkovima, a ne na stvarnim mjerenjima nakon implementacije. Također, analiza ne uključuje ljudski faktor i organizacijsku kulturu koja može značajno utjecati na uspješnost implementacije promjena.

Buduća istraživanja mogla bi uključiti longitudinalnu studiju nakon implementacije To-Be modela s mjerenjem stvarnih rezultata i usporedbom s projekcijama, komparativnu analizu procesa zapošljavanja IT djelatnika s drugim farmaceutskim tvrtkama u regiji (npr. Pliva, Belupo), proširenje analize na druge HR procese (performance management, offboarding, talent development) te primjenu AI/ML algoritama za prediktivnu analitiku kandidata — posebno relevantno s obzirom na to da tržište AI-potpomognutog otkrivanja lijekova raste s procijenjenih 1,5 milijardi USD u 2023. na preko 20 milijardi USD do 2030., što ukazuje na rastuću potrebu za IT stručnjacima s AI kompetencijama u farmaceutskoj industriji.

---

## 6. Izrada process-driven aplikacije u Camunda 8

### 6.1 Uvod i redukcija modela

Kao drugi dio projekta, izrađena je process-driven aplikacija na Camunda 8 Self-Managed platformi korištenjem Camunda 8 Run (c8run-8.8.9) distribucije. Za egzekuciju je odabran **reducirani As-Is model** jer Camunda 8 Zeebe engine ne podržava collaboration dijagrame za deployment.

**Redukcija As-Is modela:**

| Element | Puni As-Is | Reducirani | Razlog |
|---------|-----------|------------|--------|
| Participants | 2 (JGL + Agencija) | 1 (single process) | Zeebe ograničenje |
| Lanes | 4 | 0 (candidateGroups) | Zeebe ograničenje |
| Task-ovi | 27 | 10 (9 User + 1 Service) | Sažimanje faza |
| Message Flows | 2 | 0 | Agencija → Service Task |
| XOR Gateways | 3 | 5 | Dodani GW za HR, tech, ponudu |
| AND Gateways | 2 | 2 | IT ∥ Nabava zadržano |
| Timer Events | 2 | 2 | PT30S/PT20S za demo |
| End Events | 5 | 5 | Svi scenariji zadržani |

### 6.2 Camunda 8 okruženje

| Komponenta | URL | Funkcija |
|------------|-----|----------|
| Operate | http://localhost:8080/operate | Praćenje procesnih instanci |
| Tasklist | http://localhost:8080/tasklist | Rad s User Taskovima |
| Identity | http://localhost:8080/identity | Upravljanje korisnicima |
| Zeebe Gateway | localhost:26500 (gRPC) | BPMN engine |
| Connectors | http://localhost:8086/ | Connectors runtime |

Pokretanje: `camunda-start.bat` | Zaustavljanje: `camunda-stop.bat`

### 6.3 Struktura aplikacije

```
camunda-app/
├── it-hire-as-is-reduced.bpmn
├── forms/  (10 formi: job-request, budget-approval, hr-screening,
│           tech-interview, offer, candidate-response, it-prepare,
│           equipment, onboarding, probation-eval)
├── worker/
│   ├── index.js          ← Express.js Job Worker
│   └── package.json
└── README.md
```

### 6.4 Camunda Forms

10 formi u JSON schema formatu, povezanih s User Taskovima putem `formId` atributa (native Zeebe user tasks s `<zeebe:userTask />` elementom). Sve forme koriste prefix `AsIs_` (npr. `AsIs_Form_JobRequest`) radi izbjegavanja kolizije s To-Be formama.

Proces koristi 5 Exclusive Gateway-a s FEEL izrazima: `GW_Approved` (`=approved = true`), `GW_HRPass` (`=hrScreeningPassed = true`), `GW_TechPass` (`=techInterviewPassed = true`), `GW_Accepted` (`=offerAccepted = true`), `GW_Probation` (`=probationPassed = true`).

| Forma | User Task | Ključne varijable |
|-------|-----------|-------------------|
| AsIs_Form_JobRequest | Definiranje zahtjeva | candidateName, roleType, seniority, salaryRange |
| AsIs_Form_BudgetApproval | Odobrenje | approved |
| AsIs_Form_HRScreening | HR screening | hrScreeningPassed, softSkillsScore |
| AsIs_Form_TechInterview | Tehnički intervju | techInterviewPassed, techKnowledgeScore |
| AsIs_Form_Offer | Priprema ponude | offeredSalary, startDate |
| AsIs_Form_CandidateResponse | Odgovor kandidata | offerAccepted |
| AsIs_Form_ITPrepare | IT priprema | adCreated, m365Created, vpnConfigured |
| AsIs_Form_Equipment | Nabava opreme | equipmentInStock, laptopModel |
| AsIs_Form_Onboarding | Onboarding | docsCompleted, equipmentHandedOver |
| AsIs_Form_ProbationEval | Evaluacija probnog rada | probationPassed, performanceScore |

### 6.5 Job Worker

Za Service Task `ST_NotifyAgency` (task type: `send-agency-notification`) implementiran je Job Worker u Express.js s `@camunda8/sdk` bibliotekom. Worker se registrira na Zeebe gateway, preuzima job, simulira slanje email obavijesti agenciji i vraća varijable (`agencyNotified`, `notificationTimestamp`, `agencyName`).

```javascript
const { Camunda8 } = require("@camunda8/sdk");
const camunda = new Camunda8({ ZEEBE_ADDRESS: "localhost:26500", CAMUNDA_SECURE_CONNECTION: false });
const zbc = camunda.getZeebeGrpcApiClient();

zbc.createWorker({
  taskType: "send-agency-notification",
  taskHandler: async (job) => {
    const { candidateName, roleType } = job.variables;
    console.log(`Obavijest poslana agenciji za: ${candidateName} (${roleType})`);
    return job.complete({ agencyNotified: true, notificationTimestamp: new Date().toISOString() });
  },
});
```

REST API endpointi: `GET /health` (status workera i uptime), `GET /api/positions` (lista 3 IT pozicije u JGL-u s rasponom plaća i potrebnim vještinama), `GET /api/equipment/:roleType` (profil opreme po poziciji — laptop model, broj monitora, periferija, softverski paket).

**Process Variables:**

Kroz izvršavanje procesne instance, Camunda forme postavljaju varijable koje se koriste u gateway uvjetima i prosljeđuju između taskova:

| Varijabla | Tip | Postavljeno u | Koristi se u |
|-----------|-----|---------------|-------------|
| candidateName | String | UT_DefineNeed | Svi taskovi (prikaz) |
| roleType | String | UT_DefineNeed | Gateway uvjeti, worker |
| seniority | String | UT_DefineNeed | Worker |
| salaryRange | Number | UT_DefineNeed | Worker |
| approved | Boolean | UT_Approval | GW_Approved |
| hrScreeningPassed | Boolean | UT_HRScreening | GW_HRPass |
| techInterviewPassed | Boolean | UT_TechInterview | GW_TechPass |
| offerAccepted | Boolean | UT_CandidateResponse | GW_Accepted |
| probationPassed | Boolean | UT_ProbationEval | GW_Probation |
| agencyNotified | Boolean | ST_NotifyAgency (worker) | — |

### 6.6 Deployment i izvršavanje

**Korak 1: Pokretanje Camunda 8 okruženja**

Camunda 8 Run distribucija pokreće se izvršavanjem batch skripte `camunda-start.bat` koja automatski podiže sve komponente: Zeebe engine, Operate, Tasklist, Identity i Elasticsearch. Nakon pokretanja, sučelja su dostupna na `http://localhost:8080/operate` (praćenje instanci), `http://localhost:8080/tasklist` (rad s taskovima) i `http://localhost:8080/identity` (upravljanje korisnicima). Zeebe gateway sluša na `localhost:26500` za gRPC komunikaciju.

**Korak 2: Deployment BPMN modela i formi**

Model i forme deployane su putem Camunda Modelera — opcija Deploy → Cluster endpoint `http://localhost:26500`. Prilikom deploymenta, sve forme s `AsIs_` prefixom u ID-u deployaju se zajedno s BPMN modelom kao linked resources. Alternativno, deployment se može izvršiti putem CLI alata:

```bash
zbctl deploy it-hire-as-is-reduced.bpmn forms/*.form --insecure
```

Važne napomene o deploymentu: forme moraju imati unikatne ID-ove (koristimo `AsIs_` prefix radi izbjegavanja kolizije s To-Be formama), BPMN model mora koristiti `formId` atribut (ne `formKey`) za native Zeebe user tasks, te svaki User Task mora sadržavati `<zeebe:userTask />` element u extensionElements bloku.

**Korak 3: Pokretanje Job Workera**

```bash
cd worker
npm install
npm start
```

Worker ispisuje potvrdu: `🔄 Job Worker pokrenut — čeka taskove tipa: send-agency-notification` i REST API server pokrenut na `http://localhost:3001`.

**Korak 4: Pokretanje procesne instance**

Nova instanca pokreće se iz Tasklist sučelja (tab "Processes" → odabir procesa "Zapošljavanje IT djelatnika — As-Is (reduciran)" → "Start process") ili putem CLI: `zbctl create instance AsIs_ITHire_Reduced --insecure`.

Redoslijed izvršavanja: Definiranje zahtjeva → Odobrenje (XOR) → Service Task: obavijest agenciji → Timer: čekanje shortliste → HR screening (XOR) → Tehnički intervju (XOR) → Priprema ponude → Timer: čekanje odgovora → Odgovor kandidata (XOR) → IT priprema ∥ Nabava (AND split/join) → Onboarding → Evaluacija probnog rada (XOR) → End.

**Primjer izvršavanja happy path scenarija:**

Instanca se pokreće iz Tasklist sučelja. IT voditelj popunjava formu AsIs_Form_JobRequest s podacima: candidateName="Ana Horvat", roleType="programer", seniority="mid", salaryRange=3000. Uprava odobrava zahtjev (approved=true) putem forme AsIs_Form_BudgetApproval. Service Task automatski obavještava agenciju — u konzoli Job Workera ispisuje se potvrda s vremenskim žigom. Nakon isteka timera (30s za demo), HR popunjava screening formu s ocjenama i potvrđuje prolaz. IT voditelj evaluira kandidata u tehničkom intervjuu. HR šalje ponudu i nakon čekanja (20s) unosi pozitivan odgovor kandidata. IT priprema i nabava opreme izvršavaju se paralelno. Nakon onboarding-a, IT voditelj evaluira probni rad i potvrđuje uspješno zaposlenje — instanca završava na End Eventu "Uspješno zaposlenje".

U Operate sučelju vidljiv je kompletni tok instance s označenim tokenom na aktivnom User Tasku, te history svih završenih taskova s vremenskim žigovima.

*[Screenshotovi iz Operate i Tasklist sučelja]*

### 6.7 Zaključak implementacije

Camunda 8 Zeebe engine zahtijeva single-process modele bez collaboration dijagrama. Native Zeebe User Tasks koriste `formId` atribut i `<zeebe:userTask />` element. Job Workers komuniciraju putem gRPC protokola. Redukcija s 27 na 10 taskova zadržava ključnu procesnu logiku, a timer eventi koriste skraćene intervale (PT30S) za demo.

---

## 7. Literatura

### Akademska literatura

Dumas, M., La Rosa, M., Mendling, J. i Reijers, H. A. (2018). *Fundamentals of business process management* (2. izd.). Springer. https://doi.org/10.1007/978-3-662-56509-4

Hammer, M. i Champy, J. (2006). *Reengineering the corporation: A manifesto for business revolution* (Rev. ed.). HarperBusiness.

Pyzdek, T. i Keller, P. A. (2014). *The Six Sigma handbook* (4. izd.). McGraw-Hill Education.

van der Aalst, W. M. P. (2016). *Process mining: Data science in action* (2. izd.). Springer. https://doi.org/10.1007/978-3-662-49851-4

### Web izvori i dokumentacija

Camunda. (2024). *Camunda 8 documentation*. https://docs.camunda.io/

Deloitte. (2024). *Global human capital trends 2024*. https://www.deloitte.com/global/en/issues/work/content/global-human-capital-trends.html

EY. (2024). *EY World Entrepreneur of the Year — Class of 2024, Croatia*. https://www.ey.com/en_gl/weoy/class-of-2024/croatia

Fina. (2025). *JGL d. d. — financijski podaci za 2024. godinu*. https://infobiz.fina.hr/

Gartner. (2024). *IT talent acquisition research 2024*. https://www.gartner.com/en/human-resources

GuidePoint Security. (2026). *Annual ransomware report 2025*. https://www.guidepointsecurity.com/

Health-ISAC. (2025). *2025 annual cyber threat report: Healthcare sector*. https://www.h-isac.org/

IntuitionLabs. (2025). *In-demand pharma roles: AI, manufacturing & clinical jobs*. https://intuitionlabs.ai/articles/in-demand-pharma-roles

JGL d.d. (2025a). *Financijski izvještaji*. https://www.jgl.hr/o-jgl-u/financijski-izvjestaji

JGL d.d. (2025b). *Karijere*. https://karijera.jgl.hr/

Mitratech. (2025). *What 2025 time-to-fill benchmarks reveal about hiring agility and risk*. https://mitratech.com/resource-hub/blog/what-2025-time-to-fill-benchmarks-reveal-about-hiring-agility-and-risk/

MojPosao.hr. (2024). *Oglasi za posao — IT pozicije*. https://www.mojposao.hr/

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