const express = require ('express');

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true  }, function(err){
    if(err) return console.log(err);
        console.log("Сервер ожидает подключения...");
    });
mongoose.connection.on('error', err => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

const Chat = require('./models/chat.js');
const Message = require('./models/message.js');
const User = require('./models/user.js');


const app = express();
app.use(express.json());

const usersPath='./server/db/users';
const chatsPath = './server/db/chats';
const messagesPath = './server/db/messages';

const chat=require('./controllers/chat1');
const user=require('./controllers/user');




app.get('/user/:id', user.loadUsers);

app.get('/chats/:id',(req, res)=>{
    let id=req.params.id;
    
    
    

 User.findOne({id: id},function(err, data){
        if(err) return console.log(err);
        if(!err){//data=JSON.parse(data);
            console.log('server Contacts = ', data.contacts);
                 let cnts=[];
            data.contacts.map(cnt => {if (! data.chats.find(cht => cht.id == cnt.id)) {
                cnts.push(cnt);
            }});
                 data.contacts=cnts;
                 console.log('server Contacts = ', data.contacts);
            res.json(data);
            //res.send(data)//no for Redux or react
        }
    })
});

app.get('/chat/:id',chat.load.bind(chat));



app.post('/chat/:id', (req,res)=>{
   
    const chatId=req.params.id;
    
    
    let text=req.body.text;
    let sender=req.body.sender;
    let today= new Date();
    let msgId='m-'+today.toISOString();
    let msg= new Message({id:msgId, sender:sender, text:text});
    console.log('msg = ',msg);
        msg.save();
    

            chat.sendMsgToChat(chatId, msgId);
            res.json('success');

});
    
app.post('/contact/:id', (req,res)=>{
    try{
    const userId=req.params.id;
    
   
    let contact=req.body.contact;
    console.log('contact = ', contact);
    console.log('userId = ', userId);
    
        let user = new User;
       User.findOne({id: userId},function(err, data){
        if(err) return console.log(err); 
        if(!err && contact.id != ''){
            data.chats.push(contact);
            user = data;
            user.save();
            console.log(data);
            res.json('success');
            
        }
    }
       )
}
    
catch(error) {
      return Promise.reject(error);
    }
});



app.listen(3335, ()=>{
    console.log('Server @ 3335');
});



