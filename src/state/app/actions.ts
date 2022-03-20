//Action Types
export const APP_SET_AUTHENTICATED = 'App.Set.Authenticated';

//Action
export const setAuthenticated = (payload: any) => ({ type: APP_SET_AUTHENTICATED, payload });
