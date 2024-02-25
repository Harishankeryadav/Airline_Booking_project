const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverconfig.js");
const CityRepository = require(('./repository/City_repository.js'))

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        // console.log(process.env.PORT);
        console.log(`server started at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({ name: "gzb" });
    });
}

setupAndStartServer();
