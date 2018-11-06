# Easysnap - Node + GraphQL + Apollo Backend

## Installation

Clone this repo and go to server folder.

```
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
```
$ npm run start:dev
```

and go to [localhost:4001/graphql](http://localhost:4001/graphql)
