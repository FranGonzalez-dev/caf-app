export const initialState = {
    song: []
};

export const actionTypes = {
    LINK_TO_SONG: "LINK_TO_SONG",
    RESET_SONG: "RESET_SONG"
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "LINK_TO_SONG":
            return {
                ...state,
                song: [...state.song, action.item]
            };
        case "RESET_SONG":
            const index = state.song.findIndex((songItem => songItem.id === action.id))
            let resetSong = [...state.song];
            if (index >= 0) {
                resetSong.splice(index, 1)
            }
            return {
                ...state,
                song: resetSong,
            };
        default: return state;
    }
}

export default reducer;