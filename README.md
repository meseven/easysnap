# easysnap

## 1- Node.JS Server

Clone this repo and go to server folder.

```ruby
cd server
npm install
```

### Enviroment variables
Create a file named ".env" in the root directory and fill its contents as follows.

```ruby
DB_URI = mongodb://<dbuser>:<dbpassword>@<dbhost>:<dbport>/<dbname>
```


### Run the app
```ruby
npm run start:dev // for locally
```

and go to [localhost:4001/graphql](http://localhost:4001/graphql)
