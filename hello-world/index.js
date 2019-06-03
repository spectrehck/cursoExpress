const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    res.send("hello world")
})

// iniciar el server

const server = app.listen(8000, function() {
    console.log(`listening  http://localhost:$(server.address().port )`);
});