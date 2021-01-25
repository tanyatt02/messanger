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

User.deleteMany({}, function(err, result){
   // mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log('REMOVE = ',result);
});

mongoose.disconnect
