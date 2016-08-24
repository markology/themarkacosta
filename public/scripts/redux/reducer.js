export default function reducer (state = {
    activeState: 'Home'
}, action){
    switch(action.type){
        case "CHANGE_ACTIVE_STATE": {

            return {activeState: action.option};
            break;
        }
    }
    return state;
}