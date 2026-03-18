/**
 * JGL IT Hiring — Job Worker (Express.js + Zeebe)
 *
 * Ovaj worker obrađuje Service Task "send-agency-notification"
 * iz reduciranog As-Is BPMN modela.
 *
 * Instalacija:
 *   npm install
 *
 * Pokretanje:
 *   npm start
 *
 * Pretpostavlja da Camunda 8 Self-Managed radi lokalno (docker-compose).
 * Zeebe gateway: localhost:26500
 */

const express = require("express");
const { Camunda8 } = require("@camunda8/sdk");

const app = express();
app.use(express.json());

// ===== Konfiguracija =====
const ZEEBE_ADDRESS = process.env.ZEEBE_ADDRESS || "localhost:26500";
const PORT = process.env.PORT || 3001;

// ===== Zeebe klijent =====
const camunda = new Camunda8({
  ZEEBE_ADDRESS,
  ZEEBE_CLIENT_ID: "",
  ZEEBE_CLIENT_SECRET: "",
  CAMUNDA_SECURE_CONNECTION: false,
});

const zbc = camunda.getZeebeGrpcApiClient();

// ===== Job Worker: send-agency-notification =====
// Ovaj worker simulira slanje emaila vanjskoj agenciji za zapošljavanje
// U produkciji bi se integrirao sa SMTP serverom ili API-jem agencije

zbc.createWorker({
  taskType: "send-agency-notification",
  taskHandler: async (job) => {
    const { roleType, seniority, salaryRange, technicalSkills } =
      job.variables;

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📧 SLANJE OBAVIJESTI VANJSKOJ AGENCIJI");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`  Pozicija:     ${roleType || "N/A"} (${seniority || "N/A"})`);
    console.log(`  Plaća:        ${salaryRange || "N/A"} EUR/mj`);
    console.log(`  Vještine:     ${technicalSkills || "N/A"}`);
    console.log(`  Vrijeme:      ${new Date().toISOString()}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    // Simulacija: u produkciji ovdje bi bio poziv prema
    // SMTP serveru ili REST API-ju agencije
    const agencyNotificationResult = {
      agencyNotified: true,
      notificationTimestamp: new Date().toISOString(),
      agencyName: "IT Recruitment Agency d.o.o.",
      expectedShortlistDate: new Date(
        Date.now() + 14 * 24 * 60 * 60 * 1000
      ).toISOString(),
    };

    console.log("✅ Obavijest uspješno poslana agenciji!\n");

    return job.complete(agencyNotificationResult);
  },
});

console.log("🔄 Job Worker pokrenut — čeka taskove tipa: send-agency-notification");
console.log(`🔗 Zeebe gateway: ${ZEEBE_ADDRESS}\n`);

// ===== REST API endpointi (bonus) =====

// GET /health — provjera statusa workera
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    worker: "send-agency-notification",
    zeebe: ZEEBE_ADDRESS,
    uptime: process.uptime(),
  });
});

// GET /api/positions — dostupne IT pozicije u JGL-u
app.get("/api/positions", (req, res) => {
  res.json([
    {
      id: "helpdesk",
      title: "Helpdesk tehničar",
      department: "IT podrška",
      salaryRange: { min: 1200, max: 2000, currency: "EUR" },
      requiredSkills: [
        "Windows/Linux administracija",
        "Networking osnove",
        "ITIL Foundation",
      ],
    },
    {
      id: "programer",
      title: "Programer",
      department: "Razvoj poslovnih aplikacija",
      salaryRange: { min: 2000, max: 4500, currency: "EUR" },
      requiredSkills: [
        "C#/.NET ili Java",
        "SQL",
        "REST API",
        "Git",
      ],
    },
    {
      id: "noc_soc",
      title: "NOC/SOC analitičar",
      department: "Infrastruktura i sigurnost",
      salaryRange: { min: 1800, max: 3500, currency: "EUR" },
      requiredSkills: [
        "SIEM (Splunk/ELK)",
        "Firewall administracija",
        "ISO 27001",
        "Incident response",
      ],
    },
  ]);
});

// GET /api/equipment/:roleType — profil opreme po poziciji
app.get("/api/equipment/:roleType", (req, res) => {
  const profiles = {
    helpdesk: {
      laptop: "Dell Latitude 5540",
      monitors: 1,
      peripherals: ["USB headset", "Miš", "Tipkovnica"],
      software: ["Windows 11 Pro", "Office 365 E3", "Remote Desktop"],
    },
    programer: {
      laptop: "Dell Precision 5680 / MacBook Pro 16",
      monitors: 2,
      peripherals: ["Miš", "Tipkovnica mehanička", "USB-C dock"],
      software: [
        "Windows 11 Pro / macOS",
        "Office 365 E3",
        "Visual Studio / JetBrains",
        "Docker Desktop",
        "Git",
      ],
    },
    noc_soc: {
      laptop: "Dell Latitude 5540",
      monitors: 2,
      peripherals: ["Miš", "Tipkovnica", "USB-C dock"],
      software: [
        "Windows 11 Pro",
        "Office 365 E3",
        "Wireshark",
        "Nessus",
        "FortiClient VPN",
      ],
    },
  };

  const profile = profiles[req.params.roleType];
  if (!profile) {
    return res.status(404).json({ error: "Nepoznat tip pozicije" });
  }
  res.json(profile);
});

app.listen(PORT, () => {
  console.log(`🌐 REST API pokrenut na http://localhost:${PORT}`);
  console.log(`   GET /health`);
  console.log(`   GET /api/positions`);
  console.log(`   GET /api/equipment/:roleType\n`);
});
