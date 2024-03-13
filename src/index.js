const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

mongoose.connect(config.mongoose.url,config.mongoose.options,()=>{
    console.log("Connected to MongoDb");
    app.listen(config.port,()=>{
        console.log("Server is up and running!!");
    })
})


// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
