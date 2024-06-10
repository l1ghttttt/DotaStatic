import {createStore} from "redux";

const initialState = {
    display: true,
    Arrow: false,
    opacity: true,
    slide: `1`,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TRUE':
            return {...state, display: true}
        case 'FALSE':
            return {...state, display: false}
        case 'ARRTRUE':
            return {...state, Arrow: true}
        case 'ARRFALSE':
            return {...state, Arrow: false}
        case 'OPATRUE':
            return {...state, opacity: true}
        case 'OPAFALSE':
            return {...state, opacity: false}
        case 'SETSLIDE':
            return {...state, slide: action.payload}
        default:
            return state;
    }
}

export const store = createStore(reducer);

export type RootState = ReturnType<typeof reducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']