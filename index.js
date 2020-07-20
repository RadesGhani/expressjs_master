const   express = require("express"),
        app = express()

// Middleware
const   bodyParser = require("body-parser"),
        morgan = require("morgan"),
        cors = require("cors"),
        path = require('path'),
        rfs = require('rotating-file-stream')


const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
})

app.use(cors())
app.use(bodyParser.json())
app.use(morgan("combined", { stream: accessLogStream }))

// Routes
app.use("/", require("./routers"))

// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);