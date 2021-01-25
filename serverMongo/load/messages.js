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

let messages_ = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));

messages_.map(data => {
               

    let message = new Message({
    ...data});
                            //console.log(user);
                            message.save()

    console.log("Сохранен объект", message.id);
           }
           );



}
catch (err){
    return false
//    console.log(err);
//    //mongoose.disconnect();
};
mongoose.disconnect

