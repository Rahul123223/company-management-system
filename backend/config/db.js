const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://rahul:garud@cluster0.f2ofm.mongodb.net/comanyms?retryWrites=true&w=majority"
  );
};

module.exports = connect;
