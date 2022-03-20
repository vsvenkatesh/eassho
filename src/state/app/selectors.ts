import { createSelector } from "reselect";
import initialState from "./initialState";

//Selectors
const app = (state: any) => state.app;
export const isAuthenticated = createSelector(app, state => state.isAuthenticated ? state.isAuthenticated : initialState.isAuthenticated);