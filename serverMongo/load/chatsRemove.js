const express = require ('express');
const fs = require ('fs');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const app = express();
//app.use(express.json());

// установка схемы
const chatScheme = new Schema({
    id:String, 
    users:[String],
    messages:[String],
    });

  
// подключение
mongoose.connect("mongodb://localhost:27017/chats", { useUnifiedTopology: true,  useNewUrlParser: true });

const Chat = mongoose.model("Chat", chatScheme);


const chatsPath='../../server/db/chats';

Chat.deleteMany({}, function(err, result){
   // mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log('REMOVE = ',result);
});
mongoose.disconnect