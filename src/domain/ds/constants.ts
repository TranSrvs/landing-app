import CurrencyTpo from "@/domain/models/tpos/currency";
import SubjectTpo from "@/domain/models/tpos/subject";
import PageType from "@/domain/models/enums/pageType";

export const currencies = ["USD", "KRW", "SAR"];
export const contactEmail = "amoallim15@gmail.com";
export const contactPhoneNo = "(+82) 10-9160-1590";
export const contactPersonName = "Eugene";
export const contactPersonPosition = "Account Manager";
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
console.log(basePath);
export const navs = [
  {
    href: "/contact-us",
    showIn: [PageType.WELCOME, PageType.QUOTE],
    strResource: "contact_us",
    bgColor: "bg-slate-500"
  },
  {
    href: "/quote",
    showIn: [PageType.WELCOME, PageType.CONTACT_US],
    strResource: "instant_quote",
    bgColor: "bg-slate-600"
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
