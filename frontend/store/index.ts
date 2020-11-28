import { createStore, combineReducers, Store } from 'redux';

import { localeReducer } from './locale';

const reducers = {
  locale: localeReducer,
};

export type AppState = {
  locale: ReturnType<typeof localeReducer>
};

function initStore(preloadedState = {}) {
  return createStore(
    combineReducers<AppState>(reducers),
    preloadedState,
  );
}

let store: ReturnType<typeof initStore> | undefined;

export const initializeStore = (preloadedState: AppState): Store<AppState> => {
  let _store = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;
  return store;
};
