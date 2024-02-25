# Airline_Booking_project
/
    -src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        configuration/
        repository/
    -tests/


* clone the project on your local
* Execute npm instal on the same path as the root directory of the downlaod project
* create a .env file in the root directory and add the following environmernt variable of the json.
\
{
  "development": {
    "username": "mysql_userName",
    "password": "Sql_Password",
    "database": "Flight_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  
  
  -once add the db config aslisted above, go to the src foldeer from your terminal and execute `npx sequelize db:create`
  
  npx sequelize db:`file and attribute`
  after that npx sequelize db:migerate