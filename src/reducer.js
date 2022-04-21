export const initialState = {
    items: [],
    username:null
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                username: action.username
            };
        case "ALL_ITEMS":
            return {
                ...state,
                items: action.items
            };
        
        default:
            return state;
    }
}; 

export default reducer;