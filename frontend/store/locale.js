const initialState = 'fr_FR';

export const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_LOCALE':
            return action.payload;
        default: 
            return state;
    }
};