const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 500;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('hm.html', {root: __dirname});
}); 
app.get('/index.html', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});
 });     //server responds by sending the index.html file to the client's browser
app.get('/second.html', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('second.html', {root: __dirname});
});
app.get('/signup.html', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('signup.html', {root: __dirname});
});
app.get('/loginsuccess.html', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('loginsuccess.html', {root: __dirname});
 });
 app.get('/forgotpassword.html', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('forgotpassword.html', {root: __dirname});
 });
 app.get('/signupsuccess.html', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('signupsuccess.html', {root: __dirname});
 });
 app.get('/index.html', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});
 }); 
 app.get('/style.css', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('style.css', {root: __dirname});
 });
 app.get('/hm.html', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('hm.html', {root: __dirname});
 });
 app.get('/Wahran.mp3', (req, res) => {        //get requests to the root ("/") will route here
   res.sendFile('Wahran.mp3', {root: __dirname});
});
app.get('/xyz.mp4', (req, res) => {        //get requests to the root ("/") will route here
   res.sendFile('xyz.mp4', {root: __dirname});
});
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});