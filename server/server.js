const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json());

// middleware
app.use(express.static(path.join(__dirname, '../client')))
app.use('/js', express.static(path.join(__dirname, 'public/main.js')))
app.use("/styles", express.static(path.join(__dirname, '../client/index.css')))

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We are live on ${port}`);
});