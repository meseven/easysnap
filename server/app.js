const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { ApolloServer, PubSub } = require('apollo-server-express');
const { importSchema } = require('graphql-import');

const resolvers = require('./graphql/resolvers/index');

// models
const User = require('./models/User');
const Snap = require('./models/Snap');

const pubsub = new PubSub();

const server = new ApolloServer({
	typeDefs: importSchema('./graphql/schema.graphql'),
	resolvers,
	context: ({ req }) => ({
		User,
		Snap,
		pubsub,
		activeUser: req ? req.activeUser : null
	}),
	introspection: true
});

mongoose
	.connect(process.env.DB_URI, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch(e => console.log(e));

const app = express();

app.use(async (req, res, next) => {
	const token = req.headers['authorization'];
	
	if (token && token !== 'null') {
	  try{
	  	const activeUser = await jwt.verify(token, process.env.SECRET_KEY);
	  	req.activeUser = activeUser;
			console.log(activeUser);
	  }catch (e) {
			console.log(e);
		}
	}

	next();
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(process.env.PORT || 4001, () => {
	console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
});