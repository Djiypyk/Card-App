const initialState = {}


export const reducer1 = (state = initialState, action: any): any => {
    switch (action.type) {
        case 'Return_State':
            return {...state}

        default:
            return state

    }
}