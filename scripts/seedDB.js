const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/portmsg"
);

const messageSeed = [
  {
    name: "Katherine He",
    contact: "he.katherine321@gmail.com",
    msg: "Hello World",
    date: new Date(Date.now())
  },
  {
    name: "Amy Li",
    contact: "646-123-4567",
    msg: "this is the message",
    date: new Date(Date.now())
  },
  {
    name: "Sandy Yeung",
    contact: "sandy.yeung@yahoo.com",
    msg: "Contat me about a job",
    date: new Date(Date.now())
  },
  {
    name: "Lina Yang",
    contact: "478-321-6783",
    msg: "this is something",
    date: new Date(Date.now())
  },
  {
    name: "Victoria Xu",
    contact: "vic@gmail.com",
    msg: "message",
    date: new Date(Date.now())
  }
];

db.Message
  .remove({})
  .then(() => db.Message.collection.insertMany(messageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
