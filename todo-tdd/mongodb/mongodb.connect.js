const mongoose = require("mongoose");

async function connect() {
    try {        
        await mongoose.connect(
            "mongodb+srv://mgoodingdb:greenhell@todo-tdd.vpetk.mongodb.net/todo-tdd:27017",
            { useNewUrlParser: true }
        );
    } catch (err) {
        console.error("Error connecting to mongodb");
        console.error(err);
    }
}

module.exports = { connect };

// mongodb+srv://mgoodingdb:<password>@todo-tdd.vpetk.mongodb.net/todo-tdd?retryWrites=true&w=majority