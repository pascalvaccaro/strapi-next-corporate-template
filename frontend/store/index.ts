import { useMemo } from 'react';
import { createStore, combineReducers, Store } from 'redux';

import { localeReducer } from './locale';


const reducers = {
    locale: localeReducer,
};

function initStore(preloadedState = {}) {
    return createStore(
        combineReducers(reducers),
        preloadedState,
    );
}    

export type AppState = {
    locale: ReturnType<typeof localeReducer>
};

let store;

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

export function useStore(initialState: AppState) {
    const store = useMemo<Store<AppState>>(() => initializeStore(initialState), [initialState]);
    return store;
}