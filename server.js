'use strict';

var express = require('express');
var cors = require('cors');
const fileUpload = require('express-fileupload');
// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(fileUpload());
app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post("/api/fileanalyse", (req,res) => {
  var file = req.files.upfile;
  res.send({name: file.name, type: file.mimetype, size: file.size});
});

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
