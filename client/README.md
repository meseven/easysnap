# Easysnap - React + Apollo Client

## Installation

Clone this repo and go to client folder.
```
$ cd client
$ npm install
```

### Enviroment variables

#### - Development
Create a file named ".env.development" in the root directory and fill its contents as follows.

```
REACT_APP_HTTP_URI = http://localhost:4001/graphql
REACT_APP_SUBSCRIPTION_URI = ws://localhost:4001/graphql
```

#### - Production
Create a file named ".env.production" in the root directory and fill its contents as follows.

```
REACT_APP_HTTP_URI = https://easysnap.herokuapp.com/graphql  // This is an example. Please write your GraphQL HTTP URI.
REACT_APP_SUBSCRIPTION_URI = ws://easysnap.herokuapp.com/graphql // This is an example. Please write your GraphQL WS URI.
```

### Run the app
```
$ npm start
```

and go to [localhost:3000](http://localhost:3000/)