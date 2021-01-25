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



let chats_ = fs.readdirSync(chatsPath, 'utf-8');
chats_.map(file => {
               
                    let data=fs.readFileSync(`${chatsPath}/${file}`, 'utf-8');
                    data = JSON.parse(data);
   
    let chat = new Chat({
    ...data});
                            
    chat.save();
    console.log("Сохранен объект", chat);
    
});
mongoose.disconnect
