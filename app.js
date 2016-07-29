var express = require('express');
var app = express();

app.use(express.static('public'));
// The line above replaces the function below:
// app.get('/', function(request, response){
//     response.sendFile(__dirname, '/public/index.html');
// });

app.get('/blocks', function(request, response){
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks);
});

app.listen(8001, function(){
    console.log('Listening on port 8001');
});
