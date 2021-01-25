const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;

//import { Schema } from "mongoose";
//mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true  }, function(err){
//    if(err) return console.log(err);
//    console.log("Сервер ожидает подключения...");
//    });
//mongoose.connection.on('error', err => {
//    console.error(`Mongoose connection error: ${err}`);
//    process.exit(1);
//  });

//const messages = mongoose.connection.useDb('messages');
const users = mongoose.connection.useDb('users');

const userScheme = new Schema ({
    id:String, 
    name:String,
    password:String,
    contacts:[{title:String,id:String}],
    chats:[{title:String,id:String}],
});
    
const User = users.model("User", userScheme);
//User.find({id: 'u-1'}, function(err,user){
//    console.log('Model User = ', user)
//});
//console.log('User Model = ', User);
const ppp = 123; 
//console.log('PPP = ',ppp);
module.exports = User;


//module.export = {
//    const User = mongoose.model("User", userScheme);
//}
//
//export interface SolverUser extends Document {
//  password: string;
//  name: string;
//  sessionId: string;
//  companyId: Document['_id'];
//  comparePassword: comparePasswordFunction;
//}