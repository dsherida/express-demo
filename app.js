var express = require('express');
var app = express();

var logger = require('./logger');
var blocks = require('./routes/blocks');

app.use(express.static('public'));
app.use(logger);
app.use('/blocks', blocks);

app.listen(8001, function(){
    console.log('Listening on port 8001');
});
