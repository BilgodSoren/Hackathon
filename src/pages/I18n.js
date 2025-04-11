// i18n.js (create this file in src/)
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Health Dashboard",
      subtitle: "Your health at your fingertips",
      "Health Records": "Health Records",
      "Medicine Tracker": "Medicine Tracker",
      "Mental Wellness": "Mental Wellness",
      Emergency: "Emergency",
      "Health Education": "Health Education",
      Consultation: "Consultation",
      "Patient Files": "Patient Files",
      "Fitness Plans": "Fitness Plans",
      "Vitals Monitor": "Vitals Monitor",
      Appointments: "Appointments",
      Vaccination: "Vaccination"
    },
  },
  hi: {
    translation: {
      welcome: "हेल्थ डैशबोर्ड में आपका स्वागत है",
      subtitle: "आपकी सेहत, आपकी पहुँच में",
      "Health Records": "हेल्थ रिकॉर्ड",
      "Medicine Tracker": "दवा ट्रैकर",
      "Mental Wellness": "मानसिक स्वास्थ्य",
      Emergency: "आपातकालीन सेवा",
      "Health Education": "स्वास्थ्य शिक्षा",
      Consultation: "परामर्श",
      "Patient Files": "मरीज़ फ़ाइलें",
      "Fitness Plans": "फिटनेस योजनाएँ",
      "Vitals Monitor": "वाइटल्स मॉनिटर",
      Appointments: "नियुक्तियाँ",
      Vaccination: "टीकाकरण"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
}); 

export default i18n;
