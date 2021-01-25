const express = require ('express');
const fs = require ('fs');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
    id:String, 
    name:String,
    password:String,
    contacts:[{title:String,id:String}],
    chats:[{title:String,id:String}],
});

  
// подключение
mongoose.connect("mongodb://localhost:27017/users", { useNewUrlParser: true, useUnifiedTopology: true  });

const User = mongoose.model("User", userScheme);


const usersPath='../../server/db/users';

let users_ = fs.readdirSync(usersPath, 'utf-8');
let user=new User;
users_.map(file => {
               
                    let data=fs.readFileSync(`${usersPath}/${file}`, 'utf-8');
                           data = JSON.parse(data);
   
    let user = new User({
    ...data});
                            
                            user.save()
.then(function(doc){
    console.log("Сохранен объект", doc);
    //mongoose.disconnect();  // отключение от базы данных
})
});
//.catch (err)=>{
//    console.log(err);
//    //mongoose.disconnect();
//};

//mongoose.disconnect
