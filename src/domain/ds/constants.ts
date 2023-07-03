import LanguageTpo from "@/domain/models/tpos/language";
import CurrencyTpo from "@/domain/models/tpos/currency";
import SubjectTpo from "@/domain/models/tpos/subject";

export const Languages = [
  {
    id: 1,
    code: "EN",
    labelEn: "English",
    labelAr: "English",
    labelKo: "English"
  },
  {
    id: 2,
    code: "KO",
    labelEn: "Korean",
    labelAr: "Korean",
    labelKo: "Korean"
  },
  {
    id: 3,
    code: "AR",
    labelEn: "Arabic",
    labelAr: "Arabic",
    labelKo: "Arabic"
  }
];

export const Currencies = [
  {
    id: 1,
    code: "USD",
    labelEn: "US dollar",
    labelAr: "US dollar",
    labelKo: "US dollar"
  },
  {
    id: 2,
    code: "KRW",
    labelEn: "Korean won",
    labelAr: "Korean won",
    labelKo: "Korean won"
  },
  {
    id: 3,
    code: "SAR",
    labelEn: "Saudi riyal",
    labelAr: "Saudi riyal",
    labelKo: "Saudi riyal"
  }
];

export const Subjects = [
  {
    id: 1,
    labelEn: "General",
    labelAr: "General",
    labelKo: "General"
  },
  {
    id: 2,
    code: "KRW",
    labelEn: "Art",
    labelAr: "Art",
    labelKo: "Art"
  },
  {
    id: 3,
    labelEn: "Medical / Pharmaceutical",
    labelAr: "Medical / Pharmaceutical",
    labelKo: "Medical / Pharmaceutical"
  },
  {
    id: 4,
    labelEn: "Accounting & Finance",
    labelAr: "Accounting & Finance",
    labelKo: "Accounting & Finance"
  },
  {
    id: 5,
    labelEn: "Travel & Tourism",
    labelAr: "Travel & Tourism",
    labelKo: "Travel & Tourism"
  }
];
