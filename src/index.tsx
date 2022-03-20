import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import {
    BrowserRouter
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './state/store';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://tyoku.sse.codesandbox.io/graphql"
});

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </Provider>,
    rootElement
);