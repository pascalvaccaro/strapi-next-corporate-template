import { useMemo } from 'react';
import { createStore, combineReducers } from 'redux';

import { localeReducer } from './locale';

let store;

const reducers = {
    locale: localeReducer,
};

function initStore(preloadedState = {}) {
    return createStore(
        combineReducers(reducers),
        preloadedState,
    );
}

export const initializeStore = preloadedState => {
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

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}