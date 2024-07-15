import es from '../locales/es.json';
import en from '../locales/en.json';

const messages = {
  es,
  en,
};

export function t(key, lang) {
  try {
    return key.split('.').reduce((o, i) => o[i], messages[lang]);
  } catch (error) {
    console.error(`Translation key "${key}" not found for language "${lang}"`);
    return key;
  }
}

export function getLanguageFromUrl(url) {
  const params = new URLSearchParams(url.search);
  return params.get('lang') || 'en';
}
