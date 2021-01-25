
const express = require("express");


const User = require('../models/user.js');





module.exports = {
    



    loadUsers (req, res) {
        console.log(' Load Users ID = ', req.params.id);
       
        let userName='';
    let userId=req.params.id;
    let users={id:userId, name: '', users:[]};
        

  

   


    
    User.findOne({id: userId},function(err, result){
        if(err) return console.log(err);
         userName = result.name;
        }
        ).then(res => userName=res.name)
     .then(res => {users={id:userId, name: userName, users:[]};
                 })  
//        
   .then(res => User.find({},function(err, result){
        if(err) return console.log(err);
        result.forEach(res => { users.users.push( {id: res.id, name: res.name});
                             });}))

  
       .then(result => {console.log('Load Users out out= ',users);res.send(users)})
              
 .catch(err => {
                console.log('ERROR = ', err)});
        
        
}
    
}

    
 


