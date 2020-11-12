import { Action, Reducer } from 'redux';

const initialState = 'fr_FR';

interface ASelectLocale extends Action<"SELECT_LOCALE"> {
    payload: string;
}

type TLocaleActions = ASelectLocale;

export const localeReducer: Reducer<string, TLocaleActions> = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_LOCALE':
            return action.payload;
        default: 
            return state;
    }
};