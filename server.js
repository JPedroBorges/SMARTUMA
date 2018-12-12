/* IMPORTS */
const ip = require("ip");
const express = require('express');
const app = express();
const open = require('open');
/***********/
/* SET-UP */
const ADDR = ip.address();
const PORT = 1234;
const URL = "http://" + ADDR + ":" + PORT;
app.use(express.static(__dirname));
app.listen(PORT);
console.log(">> " + URL + " <<");
open(URL);
/***********/
/*****************/
/*****************/