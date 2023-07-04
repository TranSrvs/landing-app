import CurrencyTpo from "@/domain/models/tpos/currency";
import SubjectTpo from "@/domain/models/tpos/subject";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
export const currencies = ["USD", "KRW", "SAR"];
export const contactEmail = "amoallim15@gmail.com";
export const contactPhoneNo = "(+82) 10-9160-1590";
export const contactPersonName = "Eugene";
export const contactPersonPosition = "Account Manager";
export const basePath = publicRuntimeConfig.basePath;

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
