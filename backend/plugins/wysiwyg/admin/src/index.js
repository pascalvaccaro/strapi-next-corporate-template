import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './containers/Initializer';
import Wysiwyg from './components/Wysiwyg';
import lifecycles from './lifecycles';
import trads from './translations';

export default strapi => {
  const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;
  const icon = pluginPkg.strapi.icon;
  const name = pluginPkg.strapi.name;

  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: pluginDescription,
    icon,
    id: pluginId,
    initializer: Initializer,
    injectedComponents: [],
    isReady: false,
    isRequired: pluginPkg.strapi.required || false,
    layout: null,
    lifecycles,
    mainComponent: null,
    name,
    preventComponentRendering: false,
    trads,
  };

  strapi.registerField({ type: 'wysiwyg', Component: Wysiwyg });

  return strapi.registerPlugin(plugin);
};