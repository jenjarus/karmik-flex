const initialState = {
    fillerEmote: 'kkFlex',
    activeEmote: 'Dance',
    board: [false, true, true, true, false, true, false, false, false, false, true, true, false, true, false, true,
        false, false, true, false, false, false, true, false, false, false, false, true, true, false, false, true,
        false, false, false, true, true, true, false, true, false, false, false, false, true, false, false, false,
        true, false, false, false, true, false, false, false, true, true, true, false, false, true, true, false, true,
        false, true, false],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'EDIT_ELEMENT_ARR':
            return {
                ...state,
                board: [...state.board.map((item, i) => i === action.id ? !item : item)],
            };
        case 'EDIT_FILLER_EMOTE':
            return {
                ...state,
                fillerEmote: action.fillerEmote,
            };
        case 'EDIT_ACTIVE_EMOTE':
            return {
                ...state,
                activeEmote: action.activeEmote,
            };
        case 'RESET_BOARD':
            return {
                ...state,
                board: [...state.board.map(item => false)],
            };
        default:
            return state;
    }
}
