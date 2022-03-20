import { APP_SET_AUTHENTICATED } from './actions';
import initialState from './initialState';

export default (state: any = initialState,
    action: any): any => {
    switch (action.type) {
        case APP_SET_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.payload
            };
        default:
            return state;
    }
}