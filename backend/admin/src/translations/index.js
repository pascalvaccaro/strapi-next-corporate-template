import originals, { languageNativeNames } from 'strapi-admin/admin/src/translations';
import fr from './fr.json';
import en from './en.json';

const trads = {
  ...originals,
  fr: {
    ...originals.fr, ...fr,
  },
  en: {
    ...originals.en, ...en,
  },
};

export { languageNativeNames };
export default trads;