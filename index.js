const express = require('express');

const appConfig = require('./config/appConfig');

const app = express();

// const port = 3000;

app.get('/', (req,res) => res.send("Hello World!"));

app.listen(appConfig.port, () => console.log("the app is listening on localhost:"+appConfig.port));