export const userReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_USER':
            return[
                ...state,
                {name:action.user.name,surname:action.user.surname,id:Math.random()}
            ];
            break;
            case 'REMOVE_USER':
                return state.filter(user =>user.id !==Number(action.id));
             break;
            default:
               return state;
    }
};