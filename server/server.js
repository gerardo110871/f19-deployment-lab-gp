//boilerplate code
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '88262ca9e4b84ef0a0e8f16cf5be656a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

// middleware
app.use(express.static(path.join(__dirname, '../client')))
app.use('/js', express.static(path.join(__dirname, 'client/main.js')))
app.use("/styles", express.static(path.join(__dirname, '../client/index.css')))
// app.use("/favicon", express.static(path.join(__dirname, '../favicon/favicon.ico')))


// endpoints

//this is the same as the favicon above
app.get('/favicon', function (req, res) {
    rollbar.info('Favicon served successfully')
    res.sendFile(path.join(__dirname, '../favicon/favicon.ico'))
})
 

//server port info
const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We are live on ${port}`);
});