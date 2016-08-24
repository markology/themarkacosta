export function changeState(option){
    return {
        type: "CHANGE_ACTIVE_STATE",
        payload: {
            option
        }
    }
}