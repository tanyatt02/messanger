const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;

//import { Schema } from "mongoose";
const chats = mongoose.connection.useDb('chats');

const chatScheme = new Schema ({
    id:String, 
    users:[String],
    messages:[String],
});
    
const Chat = chats.model("Chat", chatScheme);
//User.find({id: 'u-1'}, function(err,user){
//    console.log('Model User = ', user)
//});
//console.log('User Model = ', User);
//const ppp = 123; 
//console.log('PPP = ',ppp);
module.exports = Chat;


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