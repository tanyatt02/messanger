const express = require ('express');
const fs = require ('fs');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const app = express();
//app.use(express.json());

// установка схемы
const messageScheme = new Schema(
    {id:String, 
    sender:String,
    text:String}
    );

  
// подключение
mongoose.connect("mongodb://localhost:27017/messages", { useNewUrlParser: true, useUnifiedTopology: true });

const Message = mongoose.model("Message", messageScheme);


const messagesPath='../../server/db/messages/messages.json';
try{
Message.deleteMany({}, function(err, result){
   // mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log('REMOVE = ',result);
})



}
catch (err){
    return false
//    console.log(err);
//    //mongoose.disconnect();
};
mongoose.disconnect

