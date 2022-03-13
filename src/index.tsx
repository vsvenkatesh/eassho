import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://tyoku.sse.codesandbox.io/graphql"
});

const rootElement = document.getElementById("root");
render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    rootElement
);