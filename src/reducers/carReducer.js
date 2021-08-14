function carReducer(state={
    car: 0,
    model: 0,
    color: 'white',
    wheel: 1,
    interiorLevel: 1,
    interior: 1,
    colorIndex: 0,
}, action={}){
    switch(action.type){
        case 'CHANGE_CAR':
            return {...state, car: action.value, model: 0, color: 'white', wheel: 1, interior: 1, interiorLevel: 1, colorIndex: 0};
        case 'CHANGE_MODEL':
            return {...state, model: action.value};
        case 'CHANGE_COLOR':
            return {...state, color: action.value, colorIndex: action.index};
        case 'CHANGE_WHEEL':
            return {...state, wheel: action.value};
        case 'CHANGE_INT':
            return {...state, interiorLevel: action.level, interior: action.value};
        default:
            return state;
    }
};
export default carReducer;