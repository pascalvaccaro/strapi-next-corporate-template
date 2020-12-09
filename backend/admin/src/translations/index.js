import originals, { languageNativeNames } from 'strapi-admin/admin/src/translations';
import fr from './fr';
import en from './en';

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