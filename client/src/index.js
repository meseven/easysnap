import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import {ApolloProvider} from 'react-apollo';

import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {SubscriptionClient} from 'subscriptions-transport-ws';
import {WebSocketLink} from 'apollo-link-ws';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const middlewareLink = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: {
			authorization: localStorage.getItem("token") || null
		}
	});
	return forward(operation);
});

const wsLink = new WebSocketLink(
	new SubscriptionClient(process.env.REACT_APP_SUBSCRIPTION_URI, {
		reconnect: true,
	}),
);

const httpLink = middlewareLink.concat(
	createHttpLink({
		uri: process.env.REACT_APP_HTTP_URI,
	})
);

const hasSubscriptionOperation = ({query: {definitions}}) => {
	return definitions.some(({kind, operation}) => kind === 'OperationDefinition' && operation === 'subscription');
};

const link = ApolloLink.split(
	hasSubscriptionOperation,
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});


ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>,
	document.getElementById('root')
);
