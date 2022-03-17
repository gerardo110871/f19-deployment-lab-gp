//boilerplate code
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json());

const nameArray = []
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
// app.use(express.static(path.join(__dirname, '../client')))
app.use('/js', express.static(path.join(__dirname, '../client/main.js')))
app.use("/styles", express.static(path.join(__dirname, '../client/index.css')))
app.use("/favicon", express.static(path.join(__dirname, '../favicon/favicon.ico')))


// endpoints

//this is the same as the favicon above
app.get('/', function (req, res) {
    rollbar.info('served successfully')
    res.sendFile(path.join(__dirname, '../client/index.html'))
})
 
app.post('/names', (req, res) => {
    let {name} = req.body

    nameArray.push(name)
    rollbar.info('we added a name')
    res.status(200).send(nameArray)
})

//server port info
const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`We are live on ${port}`);
});