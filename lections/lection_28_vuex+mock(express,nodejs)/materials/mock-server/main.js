
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    console.log('call /');
//   res.send('hello world');
});

app.get('/persons', function(req, response) {
    console.log('/person');
    let data = [{name:'Valera'}, {name:'Valera'}];

    response.send(JSON.stringify(data));
});

app.post('/persons', function(req, response) {
    console.log('/person');
    let data = [{name:'Valera'}, {name:'Valera'}];

    response.send(JSON.stringify(data));
});

app.listen(3000, function(){
    console.log('connect 3000');
});
