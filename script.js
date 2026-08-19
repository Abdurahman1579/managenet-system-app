// --- 1. SUPABASE CONFIGURATION ---
const supabaseUrl = "https://yjkgipivctdhezwvfwjx.supabase.co";
const supabaseKey = "sb_publishable_wgNooZL5_9oxf_0Mg2RmGw_m78N-O5m";
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

const translations = {
  om: {
    headerMainTitle: "Lakkoofsa Muslimoota Malkaa Noonnoo",
    headerSubTitle: "Mana Marii Dhimmoota Islaamummaa K/M Malkaa Noonnoo",
    mainTitle: "Lakkoofsa Muslimoota Kutaa Magaalaa Malkaa Noonnoo",
    introText:
      "Lakkoofsa muslimoota beekuun diinaaf, hawaasaaf, karoora misoomaaf, gargaarsa waloo fi tokkummaa hawaasaa cimsuuf shoora olaanaa qaba. Ragaa sirrii qabaachuun deeggarsa sirrii kennuuf nu dandeessisa.",
    btn1: "Daataa lakkoofsa muslimtoota kutaa magaalaa malkaa noonnoo haaraa / አዲስ የቆጠራ መረጃ",
    btn2: "Baay'ina muslimtoota aanaa malkaa gafarsaatti galmaa'anii dhiiraa fi dhalaa / መልካ ገፋርሳ ወረዳ ",
    btn3: "Baay'ina muslimtoota aanaa beerootti galmaa'anii dhiiraa fi dhalaa /ቤሮ ወረዳ",
    btn4: "Baay'ina muslimtoota aanaa Noonnootti galmaa'anii dhiiraa fi dhalaa /ኖኖ ወረዳ",
    btn5: "Baay'ina muslimtoota K/M/M/N walii galaa dhiiraa fi dhalaa / አጠቃላይ የመልካ ኖኖ ክ/ከተማ የሙስልሞች ብዛት በወንድ እና በሴት",
    btn6: "Ida'ama Baayyina muslimtoota K/M/M/N walii galaa / አጠቃላይ ድምር",
    lblAanaa: "Aanaa Filadhu / ወረዳ ይምረጡ:",
    lblBara: "Bara Galmee (E.C) / የቆጠራ ዓመት:",
    lblMaqaa: "Maqaa Guutuu / ሙሉ ስም:",
    lblSaala: "Saala / ጾታ:",
    lblUmrii: "Umrii / ዕድሜ:",
    lblBilbila: "Lakkoofsa Bilbilaa / ስልክ ቁጥር:",
    lblGooxii: "Ganda / Gooxii / ቀበሌ ወይም ጎጥ:",
    lblMasjida: "Masjida Itti Dhihaatu /መስጂድ:",
    lblMaatiiDhiira: "Baay'ina Miseensa Maatii (Dhiira) / የቤተሰብ ብዛት (ወንድ):",
    lblMaatiiDhalaa: "Baay'ina Miseensa Maatii (Dhalaa) / የቤተሰብ ብዛት (ሴት):",
    lblBarnoota: "Sadarkaa Barnootaa (Ammayyaa / Diinii) / የትምህርት ደረጃ:",
    btnSubmit: "Galmeessi / መዝግብ",
    formTitle: "Galmee Daataa Haaraa / አዲስ የመረጃ ቆጠራ ቅጽ",
    btnBack: "← Deebi'i/ተመለስ",
    warningMsg:
      "Maaloo osoo saanduuqoota dursanii jiran hin guutin gara isa itti aanutti hin darbin! Maaloo dura saanduuqa kana guuti.",
  },
  am: {
    headerMainTitle: "የመልካ ኖኖ ክፍለ ከተማ ሙስሊሞች ቆጠራ",
    headerSubTitle: "የመልካ ኖኖ ክፍለ ከተማ እስልምና ጉዳዮች ምክር ቤት",
    mainTitle: "የመልካ ኖኖ ክፍለ ከተማ ሙስሊሞች ቆጠራ",
    introText:
      "የሙስሊሞችን ቁጥር ማወቅ ለህብረተሰቡ እድገት፣ ለልማት እቅድ እና ለአብሮነት ትልቅ ሚና አለው። ትክክለኛ መረጃ መኖሩ ተገቢውን ድጋፍ ለማድረግ ያስችላል።",
    btn1: "አዲስ የመልካ ኖኖ ክፍለ ከተማ ሙስሊሞች ቆጠራ መረጃ / Daataa Haaraa",
    btn2: "በመልካ ገፋርሳ ወረዳ የተመዘገቡ ሙስሊሞች ብዛት (ወንድ እና ሴት) / Malkaa Gafarsaa",
    btn3: "በቤሮ ወረዳ የተመዘገቡ ሙስሊሞች ብዛት (ወንድ እና ሴት) / Beeroo",
    btn4: "በኖኖ ወረዳ የተመዘገቡ ሙስሊሞች ብዛት (ወንድ እና ሴት) / Noonnoo",
    btn5: "አጠቃላይ የክ/ከተማው ሙስሊሞች ብዛት በወንድ እና ሴት / Walii Galaa",
    btn6: "አጠቃላይ የክ/ከተማው ሙስሊሞች ድምር ብዛት / Ida'ama Walii Galaa",
    lblAanaa: "ወረዳ ይምረጡ / Aanaa Filadhu:",
    lblBara: "የቆጠራ ዓመት / Bara Galmee:",
    lblMaqaa: "ሙሉ ስም / Maqaa Guutuu:",
    lblSaala: "ጾታ / Saala:",
    lblUmrii: "ዕድሜ / Umrii:",
    lblBilbila: "የስልክ ቁጥር / Lakkoofsa Bilbilaa:",
    lblGooxii: "ቀበሌ / ጎጥ / Ganda / Gooxii:",
    lblMasjida: "መስጂድ / Masjida Itti Dhihaatu:",
    lblMaatiiDhiira: "የቤተሰብ ብዛት (ወንድ) / Maatii (Dhiira):",
    lblMaatiiDhalaa: "የቤተሰብ ብዛት (ሴት) / Maatii (Dhalaa):",
    lblBarnoota: "የትምህርት ደረጃ (ዘመናዊ / ዲን) / Sadarkaa Barnootaa:",
    btnSubmit: "መዝግብ / Galmeessi",
    formTitle: "አዲስ የመረጃ ቆጠራ ቅጽ / Galmee Daataa",
    btnBack: "ተመለስ / Deebi'i",
    warningMsg:
      "እባክዎ ቀድመው ያሉትን ሳጥኖች ሳይሞሉ ወደሚቀጥለው አይሂዱ! እባክዎ መጀመሪያ ይህንን ሳጥን ይሙሉ አብረው ያስገቡ።",
  },
  en: {
    headerMainTitle: "Malkaa Noonnoo Sub-City Muslim Population",
    headerSubTitle: "Malkaa Noonnoo Sub-City Islamic Affairs Supreme Council",
    mainTitle: "Malkaa Noonnoo Sub-City Muslim Population Census",
    introText:
      "Knowing the Muslim population plays a vital role in community planning, development, and strengthening unity. Accurate data ensures proper support and resources.",
    btn1: "New Malkaa Noonnoo Sub-City Muslim Population Data",
    btn2: "Number of Muslims registered in Malkaa Gafarsaa Woreda (Male & Female)",
    btn3: "Number of Muslims registered in Beeroo Woreda (Male & Female)",
    btn4: "Number of Muslims registered in Noonnoo Woreda (Male & Female)",
    btn5: "Total Muslims in Sub-City by Male & Female",
    btn6: "Grand Total of Muslims in Sub-City",
    lblAanaa: "Select Woreda / Aanaa:",
    lblBara: "Registration Year (E.C):",
    lblMaqaa: "Full Name:",
    lblSaala: "Gender:",
    lblUmrii: "Age:",
    lblBilbila: "Phone Number:",
    lblGooxii: "Kebele / Gooxii:",
    lblMasjida: "Nearby Mosque:",
    lblMaatiiDhiira: "Family Members Count (Male):",
    lblMaatiiDhalaa: "Family Members Count (Female):",
    lblBarnoota: "Education Level (Modern / Religious):",
    btnSubmit: "Register",
    formTitle: "New Census Registration Form",
    btnBack: "← Back / Deebi'i",
    warningMsg:
      "Please do not skip previous fields! Please fill out the preceding required fields first.",
  },
};

let currentLang = "om";

function toggleLangMenu() {
  const menu = document.getElementById("langMenu");
  if (menu) menu.classList.toggle("hidden");
}

function selectLanguage(langCode, langDisplayName) {
  currentLang = langCode;
  const langTextEl = document.getElementById("currentLangText");
  if (langTextEl) langTextEl.innerText = langDisplayName;

  const menu = document.getElementById("langMenu");
  if (menu) menu.classList.add("hidden");

  changeLanguage(langCode);
}

window.onclick = function (event) {
  if (
    !event.target.matches(".lang-btn") &&
    !event.target.matches(".lang-btn *")
  ) {
    const menu = document.getElementById("langMenu");
    if (menu && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  }
};

function changeLanguage(lang) {
  currentLang = lang;

  const safeSetText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  };

  // Mata-duree gubbaa (Header)
  safeSetText("headerMainTitle", translations[lang].headerMainTitle);
  safeSetText("headerSubTitle", translations[lang].headerSubTitle);

  safeSetText("mainTitle", translations[lang].mainTitle);
  safeSetText("introText", translations[lang].introText);
  safeSetText("btn1", translations[lang].btn1);
  safeSetText("btn2", translations[lang].btn2);
  safeSetText("btn3", translations[lang].btn3);
  safeSetText("btn4", translations[lang].btn4);
  safeSetText("btn5", translations[lang].btn5);
  safeSetText("btn6", translations[lang].btn6);
  safeSetText("lblAanaa", translations[lang].lblAanaa);
  safeSetText("lblBara", translations[lang].lblBara);
  safeSetText("lblMaqaa", translations[lang].lblMaqaa);
  safeSetText("lblSaala", translations[lang].lblSaala);
  safeSetText("lblUmrii", translations[lang].lblUmrii);
  safeSetText("lblBilbila", translations[lang].lblBilbila);
  safeSetText("lblGooxii", translations[lang].lblGooxii);
  safeSetText("lblMasjida", translations[lang].lblMasjida);
  safeSetText("lblMaatiiDhiira", translations[lang].lblMaatiiDhiira);
  safeSetText("lblMaatiiDhalaa", translations[lang].lblMaatiiDhalaa);
  safeSetText("lblBarnoota", translations[lang].lblBarnoota);
  safeSetText("btnText", translations[lang].btnSubmit);
  safeSetText("formTitle", translations[lang].formTitle);
  safeSetText("btnBack", translations[lang].btnBack);
  safeSetText("btnBackReport", translations[lang].btnBack);
}

function openRegistration() {
  document.getElementById("introSection").classList.add("hidden");
  document.getElementById("menuButtons").classList.add("hidden");
  document.getElementById("registrationForm").classList.remove("hidden");
  document.getElementById("reportSection").classList.add("hidden");
  clearFormValidation();
}

const formFields = [
  "aanaa",
  "bara",
  "maqaa",
  "saala",
  "umrii",
  "gooxii",
  "masjida",
  "maatiiDhiira",
  "maatiiDhalaa",
  "barnoota",
];

function validateField(changedElement) {
  const errorBox = document.getElementById("formErrorMsg");
  let firstUnfilledIndex = -1;

  for (let i = 0; i < formFields.length; i++) {
    const fieldId = formFields[i];
    const el = document.getElementById(fieldId);

    if (el && el.hasAttribute("required")) {
      const val = el.value ? el.value.trim() : "";
      if (!val) {
        firstUnfilledIndex = i;
        break;
      }
    }
  }

  const changedIndex = formFields.indexOf(changedElement.id);

  if (firstUnfilledIndex !== -1 && changedIndex > firstUnfilledIndex) {
    const unfilledEl = document.getElementById(formFields[firstUnfilledIndex]);
    if (unfilledEl) unfilledEl.classList.add("input-error");

    changedElement.value = "";
    changedElement.classList.add("input-error");

    if (errorBox && translations[currentLang]) {
      errorBox.innerText = translations[currentLang].warningMsg;
      errorBox.classList.remove("hidden");
    }
    if (unfilledEl) unfilledEl.focus();
  } else {
    changedElement.classList.remove("input-error");
    if (firstUnfilledIndex === -1 && errorBox) {
      errorBox.classList.add("hidden");
      errorBox.innerText = "";
    }
  }
}

function clearFormValidation() {
  formFields.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("input-error");
  });
  const errorBox = document.getElementById("formErrorMsg");
  if (errorBox) {
    errorBox.classList.add("hidden");
    errorBox.innerText = "";
  }
}

async function showReport(type) {
  document.getElementById("introSection").classList.add("hidden");
  document.getElementById("menuButtons").classList.add("hidden");
  document.getElementById("registrationForm").classList.add("hidden");
  document.getElementById("reportSection").classList.remove("hidden");

  let reportHTML = "";
  let titleText = "";

  try {
    if (type === "malkaa_gafarsaa" || type === "beeroo" || type === "noonnoo") {
      let aanaaName = type;
      titleText = `Gabaasa Aanaa ${type} / የ${type} ወረዳ ሪፖርት`;

      const { data, error } = await _supabase
        .from("muslim_census")
        .select("maatii_dhiira, maatii_dhalaa")
        .eq("aanaa", aanaaName);

      if (error) throw error;

      let sumDhiira = 0;
      let sumDhalaa = 0;

      if (data) {
        data.forEach((row) => {
          sumDhiira += Number(row.maatii_dhiira || 0);
          sumDhalaa += Number(row.maatii_dhalaa || 0);
        });
      }

      reportHTML = `<p>Ida'ama Dhiiraa (የወንድ ድምር): <b>${sumDhiira}</b> | Ida'ama Dhalaa (የሴት ድምር): <b>${sumDhalaa}</b></p>`;
    } else if (type === "walii_galaa") {
      titleText = "Gabaasa Walii Galaa / አጠቃላይ ሪፖርት (Dhiira & Dhalaa)";

      const { data, error } = await _supabase
        .from("muslim_census")
        .select("maatii_dhiira, maatii_dhalaa");

      if (error) throw error;

      let totalDhiira = 0;
      let totalDhalaa = 0;

      if (data) {
        data.forEach((row) => {
          totalDhiira += Number(row.maatii_dhiira || 0);
          totalDhalaa += Number(row.maatii_dhalaa || 0);
        });
      }

      reportHTML = `
                <p>Ida'ama Dhiiraa (አጠቃላይ የወንድ ድምር): <b>${totalDhiira}</b></p>
                <p>Ida'ama Dhalaa (አጠቃላይ የሴት ድምር): <b>${totalDhalaa}</b></p>
            `;
    } else if (type === "iada_ama") {
      titleText = "Ida'ama Walii Galaa / አጠቃላይ ድር K/M/M/N";

      const { data, error } = await _supabase
        .from("muslim_census")
        .select("maatii_dhiira, maatii_dhalaa");

      if (error) throw error;

      let grandTotal = 0;

      if (data) {
        data.forEach((row) => {
          grandTotal +=
            Number(row.maatii_dhiira || 0) + Number(row.maatii_dhalaa || 0);
        });
      }

      reportHTML = `<h3>Ida'ama Waliigala Uummata Muslimaa (አጠቃላይ የሙስሊሞች ድምር): <b>${grandTotal}</b></h3>`;
    }
  } catch (err) {
    console.error("Error fetching report:", err);
    reportHTML =
      "<p style='color: red;'>Ragaan fiduu irratti dogoggorri uumameera! / መረጃውን በማምጣት ላይ ስህተት ተፈጥሯል!</p>";
  }

  const reportTitleEl = document.getElementById("reportTitle");
  const reportContentEl = document.getElementById("reportContent");

  if (reportTitleEl) reportTitleEl.innerText = titleText;
  if (reportContentEl) reportContentEl.innerHTML = reportHTML;
}

function goBackToMenu() {
  document.getElementById("introSection").classList.remove("hidden");
  document.getElementById("menuButtons").classList.remove("hidden");
  document.getElementById("registrationForm").classList.add("hidden");
  document.getElementById("reportSection").classList.add("hidden");
  clearFormValidation();
}

document.addEventListener("DOMContentLoaded", function () {
  formFields.forEach((fieldId) => {
    const el = document.getElementById(fieldId);
    if (el) {
      el.addEventListener("focus", function () {
        validateField(this);
      });
      el.addEventListener("change", function () {
        validateField(this);
      });
      el.addEventListener("input", function () {
        validateField(this);
      });
    }
  });
});

const regForm = document.getElementById("registrationForm");
if (regForm) {
  regForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const btnSubmit = document.getElementById("btnSubmit");
    const spinner = document.getElementById("loadingSpinner");

    if (btnSubmit) btnSubmit.disabled = true;
    if (spinner) spinner.classList.remove("hidden");

    const formData = {
      aanaa: document.getElementById("aanaa").value,
      bara: document.getElementById("bara").value,
      maqaa: document.getElementById("maqaa").value,
      saala: document.getElementById("saala").value,
      umrii: parseInt(document.getElementById("umrii").value) || 0,
      bilbila: document.getElementById("bilbila").value,
      gooxii: document.getElementById("gooxii").value,
      masjida: document.getElementById("masjida").value,
      maatii_dhiira:
        parseInt(document.getElementById("maatiiDhiira").value) || 0,
      maatii_dhalaa:
        parseInt(document.getElementById("maatiiDhalaa").value) || 0,
      barnoota: document.getElementById("barnoota").value,
    };

    try {
      const { data, error } = await _supabase
        .from("muslim_census")
        .insert([formData]);

      if (error) {
        console.error("Dogoggori uumameera:", error);
        alert("Galmeessuu irratti dogoggorri uumame! / መዝገብ ላይ ስህተት ተፈጥሯል!");
      } else {
        alert("Galmeen milkaa'eera! / መዝገቡ ተሳክቷል! (Data saved successfully)");
        this.reset();
        goBackToMenu();
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("Rakkoo internetiitiin daataan hin ergamne!");
    } finally {
      if (btnSubmit) btnSubmit.disabled = false;
      if (spinner) spinner.classList.add("hidden");
    }
  });
}
