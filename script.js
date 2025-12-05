const offenceHeadlines = {
  A: "Article A - Traffic Offenses",
  B: "Article B - General Violations",
  C: "Article C - Crimes Against Property",
  D: "Article D - Narcotics",
  E: "Article E - Weapons & Contraband",
  F: "Article F - Major Crimes & Terrorism",
};

const offences = {
  A: [
    {
      name: "A01 - Driving without a valid License",
      fine: 1300,
      time: 0,
      impound: 1,
    },
    {
      name: "A02 - Reckless Driving",
      fine: 1500,
      time: 0,
      impound: 1,
    },
    {
      name: "A03 - Illegal Parking",
      fine: 1250,
      time: 0,
      impound: 1,
    },
    {
      name: "A04 - Vehicle without a License Plate",
      fine: 1300,
      time: 0,
      impound: 1,
    },
    {
      name: "A05 - Hit and Run",
      fine: 2000,
      time: 5,
      impound: 1,
    },
    {
      name: "A06 - Accident resulting in Fatalities",
      fine: 2500,
      time: 10,
      impound: 2,
    },
    { name: "A07 - Driving Against Traffic", fine: 1200, time: 0, impound: 0 },
    {
      name: "A08 - Transporting Passengers Exceeding Capacity",
      fine: 1100,
      time: 0,
      impound: 0,
    },
    {
      name: "A09 - Evading a Law Enforcement Officer",
      fine: 2700,
      time: 10,
      impound: 1,
    },
    {
      name: "A10 - Hitting Traffic Signs/Obstacles",
      fine: 1000,
      time: 0,
      impound: 0,
    },
    {
      name: "A11 - Illegal Modifications (Nitro & Flame Exhaust)",
      fine: 1500,
      time: 0,
      impound: 1,
    },
    {
      name: "A12 - Illegal Street Racing",
      fine: 3000,
      time: 15,
      impound: 2,
    },
    {
      name: "A13 - Breaking through a Police Barricade",
      fine: 1000,
      time: 0,
      impound: 1,
    },
    {
      name: "A14 - Suspect Vehicle",
      fine: 5000,
      time: 0,
      impound: 3,
    },
  ],

  B: [
    { name: "B01 - Minor Assault", fine: 2000, time: 10, impound: 0 },
    { name: "B02 - Spitting in Public", fine: 1000, time: 5, impound: 0 },
    {
      name: "B03 - Public Urination or Defecation",
      fine: 1200,
      time: 5,
      impound: 0,
    },
    {
      name: "B04 - Disturbing / Deceiving an Officer on Duty",
      fine: 1500,
      time: 8,
      impound: 0,
    },
    {
      name: "B05 - Spreading Malicious Speech (Individual / Group)",
      fine: 2200,
      time: 12,
      impound: 0,
    },
    { name: "B06 - Public Brawling", fine: 2500, time: 15, impound: 0 },
    { name: "B07 - Public Order Disturbance", fine: 2000, time: 10, impound: 1 },
    { name: "B08 - Theft (Larceny)", fine: 2800, time: 18, impound: 1 },
    { name: "B09 - Vandalism", fine: 2400, time: 13, impound: 0 },
    {
      name: "B10 - Illegal Use of Agency Attributes/Uniforms",
      fine: 2100,
      time: 8,
      impound: 0,
    },
    {
      name: "B11 - Impersonating an Agency Officer for Personal Gain",
      fine: 2200,
      time: 10,
      impound: 0,
    },
    {
      name: "B12 - Attempted Bribery of an Officer",
      fine: 2300,
      time: 12,
      impound: 0,
    },
    {
      name: "B13 - Providing False Report/Information to an Officer",
      fine: 2250,
      time: 12,
      impound: 0,
    },
    {
      name: "B14 - Possessing Protected Animals (Sharks & Turtles)",
      fine: 3000,
      time: 13,
      impound: 0,
    },
    {
      name: "B15 - Trading Protected Animals",
      fine: 3300,
      time: 15,
      impound: 0,
    },
    {
      name: "B16 - Gathering Mass to Create Chaos",
      fine: 5000,
      time: 25,
      impound: 0,
    },
    {
      name: "B17 - Participating in Riots Causing Damage",
      fine: 4000,
      time: 20,
      impound: 0,
    },
    {
      name: "B18 - Refusing to Disperse (Unlawful Assembly)",
      fine: 2500,
      time: 8,
      impound: 0,
    },
    {
      name: "B19 - Taking Justice into One's Own Hands (Vigilantism)",
      fine: 4000,
      time: 20,
      impound: 0,
    },
    {
      name: "B20 - Hunting Activity Without a Hunter's License",
      fine: 5000,
      time: 15,
      impound: 0,
    },
  ],

  C: [
    {
      name: "C01 - Trespassing on Private Property",
      fine: 3500,
      time: 10,
      impound: 0,
    },
    {
      name: "C02 - Trespassing on Government Property",
      fine: 4000,
      time: 11,
      impound: 0,
    },
    {
      name: "C03 - Damaging Private or Government Property",
      fine: 4500,
      time: 15,
      impound: 0,
    },
    {
      name: "C04 - Arson",
      fine: 5000,
      time: 25,
      impound: 0,
    },
    {
      name: "C05 - Using Property for Illegal Goods Distribution",
      fine: 6500,
      time: 30,
      impound: 0,
    },
    {
      name: "C06 - Breaking and Entering with Intent to Steal",
      fine: 6000,
      time: 23,
      impound: 0,
    },
  ],

  D: [
    {
      name: "D01 - Presence in a Narcotics Location",
      fine: 3000,
      time: 15,
      impound: 0,
    },
    {
      name: "D02 - Involvement in Narcotics Manufacturing",
      fine: 4000,
      time: 20,
      impound: 0,
    },
    {
      name: "D03 - Selling or Distributing Narcotics",
      fine: 7000,
      time: 30,
      impound: 0,
    },
    {
      name: "D04-1 - Possessing Cannabis [1-10 pcs]",
      fine: 3000,
      time: 15,
      impound: 0,
    },
    {
      name: "D04-2 - Possessing Cannabis [11-25 pcs]",
      fine: 4000,
      time: 16,
      impound: 0,
    },
    {
      name: "D04-3 - Possessing Cannabis [ >25 pcs]",
      fine: 5000,
      time: 20,
      impound: 0,
    },
    {
      name: "D05-1 - Possessing Joint [ 1-5 pcs ]",
      fine: 6000,
      time: 25,
      impound: 0,
    },
    {
      name: "D05-2 - Possessing Joint [ 6-10 pcs ]",
      fine: 7000,
      time: 30,
      impound: 0,
    },
    {
      name: "D05-3 - Possessing Joint [ >10 ]",
      fine: 8000,
      time: 35,
      impound: 0,
    },
  ],

  E: [
    {
      name: "E01 - Misuse of Sharp / Blunt Weapons",
      fine: 3000,
      time: 10,
      impound: 0,
    },
    {
      name: "E02-1 - Illegal Firearm Possession (FIRST CLASS)",
      fine: 5000,
      time: 12,
      impound: 0,
    },
    {
      name: "E02-2 - Illegal Firearm Possession (SECOND CLASS)",
      fine: 6000,
      time: 15,
      impound: 0,
    },
    {
      name: "E02-3 - Illegal Firearm Possession (THIRD CLASS)",
      fine: 0,
      time: 120,
      impound: 0,
    },
    {
      name: "E03 - Possession of Kevlar",
      fine: 5000,
      time: 10,
      impound: 0,
    },
    {
      name: "E03 - Possession of Uranium",
      fine: 5000,
      time: 15,
      impound: 0,
    },
    {
      name: "E04 - Selling/Buying Illegal Firearms",
      fine: 8000,
      time: 20,
      impound: 0,
    },
    {
      name: "E05 - Assembling Illegal Firearms",
      fine: 8500,
      time: 30,
      impound: 0,
    },
    {
      name: "E06 - Threatening with a Weapon (Brandishing)",
      fine: 4500,
      time: 16,
      impound: 0,
    },
    {
      name: "E07 - Firing a Weapon at an Individual / Group",
      fine: 5500,
      time: 20,
      impound: 0,
    },
    {
      name: "E08 - Weapon Smuggling",
      fine: 9000,
      time: 25,
      impound: 0,
    },
  ],

  F: [
    {
      name: "F01 - Robbery/Mugging (Personal)",
      fine: 4000,
      time: 15,
      impound: 2,
    },
    {
      name: "F02 - Store/Market Robbery",
      fine: 5000,
      time: 17,
      impound: 2,
    },
    {
      name: "F03 - Car Stealing",
      fine: 2000,
      time: 12,
      impound: 0,
    },
    {
      name: "F04 - Assaulting an Officer on Duty",
      fine: 2500,
      time: 10,
      impound: 0,
    },
    {
      name: "F05 - Hostage Taking (Individual/Small Group)",
      fine: 3000,
      time: 15,
      impound: 0,
    },
    {
      name: "F06 - Armed Conflict between Groups",
      fine: 8000,
      time: 25,
      impound: 0,
    },
    {
      name: "F07 - Terrorism",
      fine: 15000,
      time: 120,
      impound: 0,
    },
    {
      name: "F08 - Mass Hostage Taking",
      fine: 15000,
      time: 120,
      impound: 0,
    },
  ],
};

let checkedState = { A: [], B: [], C: [], D: [], E: [], F: [] };

function initOffences() {
  const container = document.getElementById("offence-list");
  container.innerHTML = "";

  Object.keys(offences).forEach((cat) => {
    const wrapper = document.createElement("div");
    wrapper.className = "offence-block";

    const header = document.createElement("div");
    header.className = "offence-header";
    header.innerHTML = `
      <span>${offenceHeadlines[cat]}</span>
      <span class="arrow">▼</span>
    `;

    const content = document.createElement("div");
    content.className = "offence-content";

    offences[cat].forEach((o, index) => {
      const div = document.createElement("div");
      div.className = "offence";

      const isCourtCase =
        o.name.startsWith("E02-3") ||
        o.name.startsWith("F07") ||
        o.name.startsWith("F08");

      if (isCourtCase) {
        div.innerHTML = `
          <label style="color: #f51800f5; font-weight: 800;">
            ${o.name} <span style="color:#f51800f5;">(Potential Court Case)</span>
          </label>
        `;
      } else {
        div.innerHTML = `
          <label>
            <input type="checkbox"
              data-category="${cat}"
              data-index="${index}"
              data-fine="${o.fine}"
              data-time="${o.time}"
              data-impound="${o.impound}"
              onchange="updateState(this)">
            ${o.name}
          </label>
          <span>Fine: $${o.fine}, Jail Time: ${o.time} months, Impound: ${o.impound} days</span>
        `;
      }

      content.appendChild(div);
    });

    header.addEventListener("click", () => {
      const active = content.classList.contains("active");

      document.querySelectorAll(".offence-content.active").forEach((open) => {
        if (open !== content) {
          open.classList.remove("active");
          open.style.maxHeight = "0px";
          open.previousElementSibling.querySelector(".arrow").style.transform =
            "rotate(0deg)";
        }
      });

      if (!active) {
        content.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        header.querySelector(".arrow").style.transform = "rotate(180deg)";

        setTimeout(() => {
          header.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      } else {
        content.classList.remove("active");
        content.style.maxHeight = "0px";
        header.querySelector(".arrow").style.transform = "rotate(0deg)";
      }
    });

    wrapper.appendChild(header);
    wrapper.appendChild(content);
    container.appendChild(wrapper);
  });
}

function updateState(checkbox) {
  const cat = checkbox.dataset.category;
  const index = checkbox.dataset.index;
  if (!checkedState[cat]) checkedState[cat] = [];
  checkedState[cat][index] = checkbox.checked;
  updateTotals();
}

function updateTotals() {
  let totalFine = 0;
  let totalTime = 0;
  let totalImpound = 0;
  const selectedOffences = [];
  
  // Array baru yang hanya menyimpan kode pelanggaran yang dipilih (e.g., ['A01', 'F03'])
  const selectedOffenceCodes = [];

  Object.keys(offences).forEach((cat) => {
    offences[cat].forEach((o, index) => {
      // Ambil hanya kode pelanggaran (misalnya "A01" dari "A01 - Driving...")
      const offenceCodeMatch = o.name.match(/([A-Z0-9-]+)/);
      const offenceCode = offenceCodeMatch ? offenceCodeMatch[1] : o.name;

      if (checkedState[cat][index]) {
        if (!o.name.includes("Court Case")) {
          // Logika untuk Offenses yang dikenakan Fine/Time/Impound
          totalFine += o.fine;
          totalTime += o.time;
          totalImpound += o.impound;

          selectedOffences.push({
            article: cat,
            name: o.name,
            isCourtCase: false,
          });
          
          // Masukkan kode ke array untuk ringkasan
          selectedOffenceCodes.push(offenceCode);
        } else {
          // Logika untuk Court Case (F07, F08, E02-3)
          selectedOffences.push({
            article: cat,
            name: o.name,
            isCourtCase: true,
          });
          
          // Masukkan kode Court Case dengan penanda khusus
          selectedOffenceCodes.push(`${offenceCode} (COURT: ${o.time}m)`);
        }
      }
    });
  });

  // 1. UPDATE HASIL TOTAL
  document.getElementById("totalFine").innerText = `$${totalFine.toLocaleString()}`;
  document.getElementById("totalTime").innerText = `${totalTime} months`;
  document.getElementById("totalImpound").innerText = `${totalImpound} days`;

  // 2. UPDATE DAFTAR PELANGGARAN TERPILIH (di bagian Result)
  const offenceList = document.getElementById("offenceList");
  offenceList.innerHTML = "";

  if (selectedOffences.length > 0) {
    selectedOffences.forEach((o) => {
      const li = document.createElement("li");
      li.textContent = o.isCourtCase
        ? `${o.name} (POTENTIAL COURT CASE)`
        : `${o.name}`;
      offenceList.appendChild(li);
    });
    // Tampilkan panel copy
    document.getElementById("copy-panel").style.display = 'block';
  } else {
    offenceList.innerHTML = '<li style="color:#666;">No offenses selected</li>';
    // Sembunyikan panel copy jika tidak ada yang dipilih
    document.getElementById("copy-panel").style.display = 'none';
  }

  // 3. UPDATE KONTEN YANG DAPAT DISALIN (RINGKAS)
  let copyableText = '';

  if (selectedOffenceCodes.length > 0) {
    const codesString = selectedOffenceCodes.join(', ');
    
    // Format yang Anda minta: "F01, F03 - 6000 - 27 months - 2 days impound"
    copyableText = `${codesString} - $${totalFine.toLocaleString()} - ${totalTime} months - ${totalImpound} days impound`;
  }
  
  document.getElementById("copyableList").innerText = copyableText;
}

function resetCalculator() {
  Object.keys(checkedState).forEach((cat) => {
    checkedState[cat] = [];
  });

  document.querySelectorAll("input[type='checkbox']").forEach((cb) => {
    cb.checked = false;
  });

  document.getElementById("totalFine").innerText = "$0";
  document.getElementById("totalTime").innerText = "0 months";
  document.getElementById("totalImpound").innerText = "0 days";

  const offenceList = document.getElementById("offenceList");
  offenceList.innerHTML =
    '<li style="color:#666;">No offenses selected</li>';
    
  // Sembunyikan panel copy saat reset
  document.getElementById("copy-panel").style.display = 'none';
  document.getElementById("copyableList").innerText = '';
}
