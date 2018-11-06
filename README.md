# Easysnap
:neckbeard:   [Live demo React client](http://easysnap.surge.sh/)

:sunglasses:  [GraphiQL Interface](http://54.86.4.87:5000/graphql)

![gif](https://mehmetseven.net/content/images/2018/11/newest.gif)


# Installation


## 1- Node.JS Server

Clone this repo and go to server folder.

```ruby
$ cd server
$ npm install
```

### Enviroment variables
Create a file named ".env" in the root directory and fill its contents as follows.

```
DB_URI = mongodb://<dbuser>:<dbpassword>@<dbhost>:<dbport>/<dbname>
SECRET_KEY = your secret key
```


### Run the app
```ruby
$ npm run start:dev
```

and go to [localhost:4001/graphql](http://localhost:4001/graphql)



## 2- React Client

Clone this repo and go to client folder.
```ruby
$ cd client
$ npm install
```

### Enviroment variables

#### - Development
Create a file named ".env.development" in the root directory and fill its contents as follows.

```ruby
REACT_APP_HTTP_URI = http://localhost:4001/graphql
REACT_APP_SUBSCRIPTION_URI = ws://localhost:4001/graphql
```

#### - Production
Create a file named ".env.production" in the root directory and fill its contents as follows.

```ruby
REACT_APP_HTTP_URI = https://easysnap.herokuapp.com/graphql  // This is an example. Please write your GraphQL HTTP URI.
REACT_APP_SUBSCRIPTION_URI = ws://easysnap.herokuapp.com/graphql // This is an example. Please write your GraphQL WS URI.
```

### Run the app
```ruby
$ npm start
```

and go to [localhost:3000](http://localhost:3000/)
