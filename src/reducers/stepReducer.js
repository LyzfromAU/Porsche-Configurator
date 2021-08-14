function stepReducer(state=1, action={}){
    switch(action.type){
        case 'CHANGE_STEP':
            return action.value;
        default:
            return state;
    }
};
export default stepReducer;