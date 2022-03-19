const initialState = {}


export const reducer2 = (state = initialState, action: any): any => {
    switch (action.type) {
        case 'Return_State':
            return {...state}

        default:
            return state

    }
}