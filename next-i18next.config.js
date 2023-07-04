const path = require("path");

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ["en", "ar", "ko"],
    defaultLocale: "en"
  },
  ns: ["common"],
  localePath: path.resolve("./public/locales")
};
