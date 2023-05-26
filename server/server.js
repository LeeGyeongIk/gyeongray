/* Load Module */
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require("cors");
const bodyParser = require("body-parser");

/* Load DB */
const USER_DATA = JSON.parse(fs.readFileSync('./DB/USER_ACCOUNT.json', 'utf8'));

/* Start Server */
app.listen(8080, function () {
    console.log('listening on 8080');
});

/* CSR */
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..//build/index.html'));
});

/* Request SIGN_IN */
app.post('/Main', (req, res) => {
    const SIGN_IN = {
        ID: req.body.ID,
        PASSWORD: req.body.PASSWORD
    };
    let SIGN_IN_RESULT = false;

    for (const [INDEX, DATA] of Object.entries(USER_DATA)) {
        if (SIGN_IN.ID === DATA.ID && SIGN_IN.PASSWORD === DATA.PASSWORD) {
            SIGN_IN_RESULT = true;
            break;
        }
    }

    res.send({SIGN_IN_RESULT: SIGN_IN_RESULT});

    // fs.writeFileSync("./DB/USER_ACCOUNT.json", JSON.stringify(SIGN_IN, null, 2));
})