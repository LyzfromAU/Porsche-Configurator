function themeReducer(state='light', action={}){
    switch(action.type){
        case 'CHANGE_THEME':
            return action.value;
        default:
            return state;
    }
};
export default themeReducer;