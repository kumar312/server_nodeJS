var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var fs = require(fs);
var multer = require('multer');
const { Console } = require('console');

// var data = [];


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }));

// app.use(bodyParser.json());

// app.get('/index.html', function(req, res) {
//     res.sendFile(__dirname + "/" + "index.html");
//     // res.sendFile(__dirname + "/" + "public/images/logo.png");
// })

app.get('/form.html', function(req, res) {
    res.sendFile(__dirname + "/" + "form.html");
    // res.sendFile(__dirname + "/" + "public/images/logo.png");
})

app.post('/file_upload', function(err, data) {
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    consile.log(req.files.file.type);
    var file = __dirname + "/" + req.files.file.name;


    fs.readFile(req.files.file.path, function(err, data) {
        fs.writeFile(file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files.file.name
                };
            }

            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})

// app.get('/process_get', function(req, res) {
//             response = {
//                 first_name: req.query.first_name,
//                 last_name: req.query.last_name
//             };
// data.push(response);
//     console.log(response);
//     res.end(JSON.stringify(data));
// })

// app.post('/addperson', function(req, res) {
//     var response = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name
//     };
//     data.push(response);
//     console.log(response);
//     res.end(JSON.stringify(data));
// })


// app.delete('/det_user', function(req, res) {
//     console.log("Got a Delete request for /del_user");
//     res.send('Hello Delete');
// })


// app.get('/list_user', function(req, res) {
//     console.log("Got a Post request for /list_user");
//     res.send('Page listning');
// })


// app.get('/ab*cd', function(req, res) {
//     console.log("Got a Post request for /ab*cd");
//     res.send('Page Pattern Match');
// })


var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
})