export const initialState = {
    items: [],
    homeItems: [],
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
        
        case "HOME_ITEMS":
            return {
                ...state,
                homeItems:action.homeItems
            };
        
        default:
            return state;
    }
}; 

export default reducer;