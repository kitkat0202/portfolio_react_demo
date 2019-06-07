//  Dependencies
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes");

const app = express()
const PORT = process.env.PORT || 3001

// Define middleware here
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the Mongo DB
const db = require('./config/keys').mongoURI

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err))

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () => {
    console.log(`PORT: ${PORT} link to API --> http://localhost:${PORT}/api/message`)
})