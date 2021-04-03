const initialState = {
    darkMode: false,
    endOfScroll: false
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_DARKMODE":
            return {
                ...state,
                darkMode: !state.darkMode
            };
        case "TOGGLE_SCROLL_T":
            return {
                ...state,
                endOfScroll: true
            };
        case "TOGGLE_SCROLL_F":
            return {
                ...state,
                endOfScroll: false
            };
        default:
            return state;
    }
};
