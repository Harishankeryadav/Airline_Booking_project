const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./configs/serverconfig.js");

const setupAndStartServer = async () => {

    const app = express();
    app.listen(PORT, () => {
        // console.log(process.env,PORT);
        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        console.log(`server started at ${PORT}`);
    });
}

setupAndStartServer();


