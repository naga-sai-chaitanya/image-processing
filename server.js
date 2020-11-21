const path = require('path');
const moment = require('moment');
const express = require('express');
const app = express();
//var bodyParser = require('body-parser');
var router = express.Router();
var fs = require('fs');
const Joi = require('joi');

app.use("/dist", express.static(__dirname + '/dist'));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));


//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.json());

// http://localhost:8080

const { Router } = require('express');
const { ok } = require('assert');
app.get('/', function (req, res) {
    console.log('Hello World');
    
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/fake_api',(req,res)=>{
    res.download(path.join(__dirname,'Major Project Report.pdf'));
    const time_stamp = moment().format();
    console.log(time_stamp);
    
});


app.listen(8080, function () {
    console.log('Hosted on 8080');
});



