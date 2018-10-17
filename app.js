const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');

const resolvers = require('./graphql/resolvers/index');

const server = new ApolloServer({
	typeDefs: importSchema('./graphql/types/schema.graphql'),
	resolvers
});

mongoose
	.connect(process.env.DB_URI, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch(e => console.log(e));

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () => {
	console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
});