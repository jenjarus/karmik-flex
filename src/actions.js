export function editElementArr(id) {
    return {
        type: 'EDIT_ELEMENT_ARR',
        id: id,
    }
}

export function editFillerEmote(value) {
    return {
        type: 'EDIT_FILLER_EMOTE',
        fillerEmote: value,
    }
}

export function editActiveEmote(value) {
    return {
        type: 'EDIT_ACTIVE_EMOTE',
        activeEmote: value,
    }
}

export function resetBoard() {
    return {
        type: 'RESET_BOARD',
    }
}

