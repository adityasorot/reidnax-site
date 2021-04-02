const initialState = {
    darkMode: false
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_DARKMODE":
            return {
                ...state,
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
};
