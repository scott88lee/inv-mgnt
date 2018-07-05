const express = require('express');
const db = require('./db');

const app = express();

app.get('*', (req, res) => {
    res.send('Hey');
})

app.listen(3000, ()=> {console.log('Listen port: 3000')})