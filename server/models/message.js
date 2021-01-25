const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;

const messages = mongoose.connection.useDb('messages');

const messageScheme = new Schema (
    {id:String, 
    sender:String,
    text:String}
);
    
const Message = messages.model("Message", messageScheme);
module.exports = Message