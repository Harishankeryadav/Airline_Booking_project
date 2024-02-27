const express = require("express");
const bodyParser = require("body-parser");

const  {PORT}  = require("./config/serverconfig.js");
const ApiRoutes = require('./routes/index');

const CityRepository = require(('./repository/City_repository.js'))

const setupAndStartServer = async () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api',ApiRoutes);

    app.listen(PORT, () => {
        
        console.log(`server started at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({ name: "acxv" });
    });
}

setupAndStartServer();
