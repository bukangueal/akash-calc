const offenceHeadlines = {
  A: "Pasal A - Lalu Lintas",
  B: "Pasal B - Pelanggaran Umum",
  C: "Pasal C - Kejahatan Terhadap Properti",
  D: "Pasal D - Narkotika",
  E: "Pasal E - Senjata dan barang terlarang",
  F: "Pasal F - Kejahatan & terorisme",
  // G: "Pasal G - Kejahatan Seksual",
};

const offences = {
  A: [
    // Sekarang A = Lalu Lintas (dulunya B)
    {
      name: "A01 - Berkendara tidak memiliki SIM",
      fine: 1300,
      time: 0,
      impound: 1,
    },
    {
      name: "A02 - Berkendara Secara Ugal - Ugalan",
      fine: 1500,
      time: 0,
      impound: 1,
    },
    {
      name: "A03 - Parkir Sembarangan",
      fine: 1250,
      time: 0,
      impound: 1,
    },
    {
      name: "A04 - Kendaraan tidak memiliki plat nomor",
      fine: 1300,
      time: 0,
      impound: 1,
    },
    {
      name: "A05 - Kabur dari Kecelakaan",
      fine: 2000,
      time: 5,
      impound: 1,
    },
    {
      name: "A06 - Kecelakaan hingga menimbulkan korban jiwa",
      fine: 2500,
      time: 10,
      impound: 2,
    },
    { name: "A07 - Mengemudi Melawan Arus", fine: 1200, time: 0, impound: 0 },
    {
      name: "A08 - Mengangkut Penumpang Lebih dari Kapasitas",
      fine: 1100,
      time: 0,
      impound: 0,
    },
    {
      name: "A09 - Menghindar saat diberhentikan petugas",
      fine: 2700,
      time: 10,
      impound: 1,
    },
    {
      name: "A10 - Menabrak Rambu Lalu Lintas",
      fine: 1000,
      time: 0,
      impound: 0,
    },
    {
      name: "A11 - Modifikasi Ilegal (Nitro & Knalpot Api)",
      fine: 1500,
      time: 0,
      impound: 1,
    },
    {
      name: "A12 - Balap Liar",
      fine: 3000,
      time: 15,
      impound: 2,
    },
    {
      name: "A13 - Menerobos barikade kepolisian",
      fine: 1000,
      time: 0,
      impound: 1,
    },
        {
      name: "A14 - Kendaraan Suspect",
      fine: 5000,
      time: 0,
      impound: 3,
    },
    // dst sesuai list B
  ],

  B: [
    // Sekarang B = Pasal A lama (Mengemudi & Lalu Lintas)
    { name: "B01 - Kekerasan Ringan", fine: 2000, time: 10, impound: 0 },
    { name: "B02 - Meludah Sembarangan", fine: 1000, time: 5, impound: 0 },
    {
      name: "B03 - Buang air kecil atau besar sembarangan",
      fine: 1200,
      time: 5,
      impound: 0,
    },
    {
      name: "B04 - Mengganggu / menipu petugas saat bertugas",
      fine: 1500,
      time: 8,
      impound: 0,
    },
    {
      name: "B05 - Menyebarkan ujaran buruk individu / kelompok",
      fine: 2200,
      time: 12,
      impound: 0,
    },
    { name: "B06 - Berkelahi ditempat umum", fine: 2500, time: 15, impound: 0 },
    // {
    //   name: "B07 - Memakai masker (/mask)",
    //   fine: 3000,
    //   time: 15,
    //   impound: 0,
    // },
    { name: "B07 - Gangguan Ketertiban Umum", fine: 2000, time: 10, impound: 1 },
    { name: "B08 - Pencurian", fine: 2800, time: 18, impound: 1 },
    { name: "B09 - Vandalisme", fine: 2400, time: 13, impound: 0 },
    // { name: "B05 - Mabuk di Tempat Umum", fine: 700, time: 3, impound: 0 },
    {
      name: "B10 - Menggunakan atribut milik instansi secara ilegal",
      fine: 2100,
      time: 8,
      impound: 0,
    },
    {
      name: "B11 - Menyamar sebagai petugas instansi untuk keuntungan pribadi",
      fine: 2200,
      time: 10,
      impound: 0,
    },
    {
      name: "B12 - Percobaan suap terhadap petugas",
      fine: 2300,
      time: 12,
      impound: 0,
    },
    {
      name: "B13 - Memberikan laporan/informasi palsu kepada petugas",
      fine: 2250,
      time: 12,
      impound: 0,
    },
    {
      name: "B14 - Memiliki hewan yang dilindungi (hiu & penyu)",
      fine: 3000,
      time: 13,
      impound: 0,
    },
    {
      name: "B15 - Memperjualbelikan hewan yang dilindungi",
      fine: 3300,
      time: 15,
      impound: 0,
    },
    {
      name: "B16 - Mengumpulkan massa untuk menciptakan kekacauan",
      fine: 5000,
      time: 25,
      impound: 0,
    },
    {
      name: "B17 - Ikut dalam kerusuhan yang menyebabkan kerugian",
      fine: 4000,
      time: 20,
      impound: 0,
    },
    {
      name: "B18 - Menolak membubarkan diri",
      fine: 2500,
      time: 8,
      impound: 0,
    },
    {
      name: "B19 - Melakukan penghakiman secara sepihak",
      fine: 4000,
      time: 20,
      impound: 0,
    },
    {
      name: "B20 - Melakukan aktivitas pemburuan tanpa lisensi pemburu",
      fine: 5000,
      time: 15,
      impound: 0,
    },
  ],

  C: [
    {
      name: "C01 - Memasuki properti pribadi tanpa izin",
      fine: 3500,
      time: 10,
      impound: 0,
    },
    {
      name: "C02 - Memasuki properti milik pemerintah tanpa izin",
      fine: 4000,
      time: 11,
      impound: 0,
    },
    {
      name: "C03 - Merusak properti pribadi atau milik pemerintah",
      fine: 4500,
      time: 15,
      impound: 0,
    },
    {
      name: "C04 - Membakar properti",
      fine: 5000,
      time: 25,
      impound: 0,
    },
    {
      name: "C05 - Menjadikan properti sebagai tempat distribusi barang ilegal",
      fine: 6500,
      time: 30,
      impound: 0,
    },
    {
      name: "C06 - Membobol properti dengan niat mencuri",
      fine: 6000,
      time: 23,
      impound: 0,
    },
  ],

  D: [
    {
      name: "D01 - Berada ditempat narkotika",
      fine: 3000,
      time: 15,
      impound: 0,
    },
    {
      name: "D02 - Terlibat dalam pembuatan narkotika",
      fine: 4000,
      time: 20,
      impound: 0,
    },
    {
      name: "D03 - Menjual atau mendistribusikan narkotika",
      fine: 7000,
      time: 30,
      impound: 0,
    },
    {
      name: "D04-1 - Membawa Kanabis [1-10 pcs]",
      fine: 3000,
      time: 15,
      impound: 0,
    },
    {
      name: "D04-2 - Membawa Kanabis [11-25 pcs]",
      fine: 4000,
      time: 16,
      impound: 0,
    },
    {
      name: "D04-3 - Membawa Kanabis [ >25 pcs]",
      fine: 5000,
      time: 20,
      impound: 0,
    },
    // {
    //   name: "D05-1 - Membawa Marijuana [1-10 pcs]",
    //   fine: 5000,
    //   time: 10,
    //   impound: 0,
    // },
    // {
    //   name: "D05-2 - Membawa Marijuana [11-25 pcs]",
    //   fine: 8000,
    //   time: 15,
    //   impound: 0,
    // },
    // {
    //   name: "D05-3 - Membawa Marijuana [ >25 pcs]",
    //   fine: 15000,
    //   time: 20,
    //   impound: 0,
    // },
    {
      name: "D05-1 - Membawa Joint [ 1-5 pcs ]",
      fine: 6000,
      time: 25,
      impound: 0,
    },
    {
      name: "D05-2 - Membawa Joint [ 6-10 pcs ]",
      fine: 7000,
      time: 30,
      impound: 0,
    },
    {
      name: "D05-3 - Membawa Joint [ >10 ]",
      fine: 8000,
      time: 35,
      impound: 0,
    },
  ],

  E: [
    {
      name: "E01 - Menyalahgunakan senjata tajam / tumpul",
      fine: 3000,
      time: 10,
      impound: 0,
    },
    {
      name: "E02-1 - Kepemilikan senjata api ilegal (FIRST CLASS)",
      fine: 5000,
      time: 12,
      impound: 0,
    },
    {
      name: "E02-2 - Kepemilikan senjata api ilegal (SECOND CLASS)",
      fine: 6000,
      time: 15,
      impound: 0,
    },
    {
      name: "E02-3 - Kepemilikan senjata api ilegal (THIRD CLASS)",
      fine: 0,
      time: 120,
      impound: 0,
    },
    {
      name: "E03 - Kepemilikan kevlar",
      fine: 5000,
      time: 10,
      impound: 0,
    },
    {
      name: "E03 - Kepemilikan Uranium",
      fine: 5000,
      time: 15,
      impound: 0,
    },
    {
      name: "E04 - Menjual/Membeli senjata api ilegal",
      fine: 8000,
      time: 20,
      impound: 0,
    },
    // {
    //   name: "E05 - Membeli senjata api ilegal",
    //   fine: 8000,
    //   time: 25,
    //   impound: 0,
    // },
    {
      name: "E05 - Merakit senjata api ilegal",
      fine: 8500,
      time: 30,
      impound: 0,
    },
    {
      name: "E06 - Penodongan senjata ke suatu individu / kelompok",
      fine: 4500,
      time: 16,
      impound: 0,
    },
    {
      name: "E07 - Penembakan senjata ke suatu individu / kelompok",
      fine: 5500,
      time: 20,
      impound: 0,
    },
    {
      name: "E08 - Penyelundupan senjata",
      fine: 9000,
      time: 25,
      impound: 0,
    },
  ],

  F: [
    {
      name: "F01 - Pembegalan",
      fine: 4000,
      time: 15,
      impound: 2,
    },
    {
      name: "F02 - Perampokan Warung",
      fine: 5000,
      time: 17,
      impound: 2,
    },
    {
      name: "F03 - Pencurian Mobil (Car Stealing)",
      fine: 2000,
      time: 12,
      impound: 0,
    },
    {
      name: "F04 - Penyerangan kepada instansi yang sedang bertugas",
      fine: 2500,
      time: 10,
      impound: 0,
    },
    {
      name: "F05 - Melakukan penyanderaan terhadap warga/instansi",
      fine: 3000,
      time: 15,
      impound: 0,
    },
    // {
    //   name: "F06 - Perdagangan manusia",
    //   fine: 15000,
    //   time: 120,
    //   impound: 0,
    // },
    {
      name: "F06 - Peperangan bersenjata antar kelompok",
      fine: 8000,
      time: 25,
      impound: 0,
    },
    {
      name: "F07 - Terorisme",
      fine: 15000,
      time: 120,
      impound: 0,
    },
    {
      name: "F08 - Penyanderaan Massal",
      fine: 15000,
      time: 120,
      impound: 0,
    },
  ],

  // G: [
  //   {
  //     name: "G01 - Pelecehan Seksual",
  //     fine: 15000,
  //     time: 120,
  //     impound: 0,
  //   },
  //   {
  //     name: "G02 - Pemerkosaan",
  //     fine: 15000,
  //     time: 120,
  //     impound: 0,
  //   },
  //   {
  //     name: "G03 - Eksploitasi Seksual",
  //     fine: 15000,
  //     time: 120,
  //     impound: 0,
  //   },
  // ],
};

// Simpan status checkbox tiap kategori
let checkedState = { A: [], B: [], C: [], D: [], E: [], F: []};

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

      // 🧩 Deteksi pasal E02-3, F07, F08 untuk persidangan
      const isCourtCase =
        o.name.startsWith("E02-3") ||
        o.name.startsWith("F07") ||
        o.name.startsWith("F08");

      if (isCourtCase) {
        // tampil tanpa checkbox dan tanpa info denda
        div.innerHTML = `
          <label style="color: #f51800f5; font-weight: 800;">
            ${o.name} <span style="color:#f51800f5;">(Potensi Persidangan)</span>
          </label>
        `;
      } else {
        // normal case (dengan checkbox dan info)
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
          <span>Denda: $${o.fine}, Penjara: ${o.time} bulan, Impound: ${o.impound} hari</span>
        `;
      }

      content.appendChild(div);
    });

    // 🧩 event buka tutup kategori
    header.addEventListener("click", () => {
      const active = content.classList.toggle("active");
      header.querySelector(".arrow").style.transform = active
        ? "rotate(180deg)"
        : "rotate(0deg)";
    });

    wrapper.appendChild(header);
    wrapper.appendChild(content);
    container.appendChild(wrapper);
  });
}




header.addEventListener("click", () => {
  const active = content.classList.contains("active");

  // Tutup semua dulu (opsional kalau mau satu aja kebuka)
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

    // auto-scroll biar header tetap kelihatan
    setTimeout(() => {
      header.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  } else {
    content.classList.remove("active");
    content.style.maxHeight = "0px";
    header.querySelector(".arrow").style.transform = "rotate(0deg)";
  }
});

// 🧮 UPDATE STATUS CEKLIS
function updateState(checkbox) {
  const cat = checkbox.dataset.category;
  const index = checkbox.dataset.index;
  checkedState[cat][index] = checkbox.checked;
  updateTotals();
}

// 🧾 HITUNG TOTAL DENDA, PENJARA, IMPOUND
function updateTotals() {
  let totalFine = 0;
  let totalTime = 0;
  let totalImpound = 0;
  const selectedOffences = [];

  Object.keys(offences).forEach((cat) => {
    offences[cat].forEach((o, index) => {
      if (checkedState[cat][index]) {
        totalFine += o.fine;
        totalTime += o.time;
        totalImpound += o.impound;

        selectedOffences.push({
          pasal: cat,
          nama: o.name,
        });
      }
    });
  });

  // Update total
  document.getElementById(
    "totalFine"
  ).innerText = `$${totalFine.toLocaleString()}`;
  document.getElementById("totalTime").innerText = `${totalTime} bulan`;
  document.getElementById("totalImpound").innerText = `${totalImpound} hari`;

  // Update list pelanggaran
  const offenceList = document.getElementById("offenceList");
  offenceList.innerHTML = "";

  if (selectedOffences.length > 0) {
    selectedOffences.forEach((o) => {
      const li = document.createElement("li");
      li.textContent = `${o.nama}`;
      offenceList.appendChild(li);
    });
  } else {
    offenceList.innerHTML =
      '<li style="color:#666;">Tidak ada pelanggaran dipilih</li>';
  }
}

// ♻️ RESET SEMUA CEKLIS & TOTAL
function resetCalculator() {
  // kosongin semua data terpilih
  Object.keys(checkedState).forEach((cat) => {
    checkedState[cat] = [];
  });

  // uncheck semua checkbox
  document.querySelectorAll("input[type='checkbox']").forEach((cb) => {
    cb.checked = false;
  });

  // reset total
  document.getElementById("totalFine").innerText = "$0";
  document.getElementById("totalTime").innerText = "0 bulan";
  document.getElementById("totalImpound").innerText = "0 hari";

  // kosongin list pelanggaran terpilih
  const offenceList = document.getElementById("offenceList");
  offenceList.innerHTML =
    '<li style="color:#666;">Tidak ada pelanggaran dipilih</li>';
}
