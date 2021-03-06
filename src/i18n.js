// require Polyglot
const Polyglot = require('node-polyglot');

// environment
const getLocale = require('./environment').getLocale;

// english translation
const enLocaleTranslation = require('./translations/en.json');
const zhLocaleTranslation = require('./translations/zh.json');

// all translations
const localeTranslations = {
  en: enLocaleTranslation,
  zh: zhLocaleTranslation,
};

// translate utility
const polyglot = new Polyglot({
  locale: getLocale(),
  phrases: localeTranslations[getLocale()],
});

// translate function
const t = function(phraseKey, phraseData) {
  return polyglot.t(phraseKey, phraseData);
};

// export i18n functions
module.exports = {
  t: t,
};
