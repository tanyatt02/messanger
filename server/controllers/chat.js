const chatsPath = './server/db/chats';
const Chat = require('../models/chat.js');
const Message = require('../models/message.js');

const template = {
    id: '',
    users: [],
    messages: []
};

const {
    findMessages
} = require('./message.js');

let mod = {
        async create(req, res) {
            let newChat = Object.assign({}, template);
            newChat.id = req.params.id;
            let chat = new Chat ({...newChat});
            chat.save();

                    res.json({
                        status: true
                    })
                
            

        },

        async load(req, res) {
             let idsArr=[];
            let arr=[];
           let chatId = req.params.id;
            try {
               
                let arrMessages=[];
                
                console.log('chatId = ',chatId);
                 await Chat.findOne({id: chatId}, function(err, data){
                     if(err) { this.create(req, res);return console.log(err)}; 
                     console.log('data = ',data);
                idsArr = data.messages;
                   })
            }
             catch (err) {
                return false
            };    
                     try{
                          
                       await findMessages(idsArr)
                          
                
 
            .then(res => {
                     console.log('server Message ', res);
            
                return res
            } 
            )
                            .then(result => {
//                                //if (arrMessages) {
                                   console.log('server input Chat messages', result);
                                    let dto = Object.assign({}, {
                                        messages: result
                                    });
                                    console.log('server Chat dto', dto);
                                    res.json(dto);
//                                //}
                            })

                    
                }
             catch (err) {
                return false
            }
        },

        sendMsgToChat(chatId, msgId) {
            try {
            Chat.findOne({id: chatId},function(err, result){
        if(err) return console.log(err);

            })
            .then(res => {res.messages.push(msgId); res.save();return})

        }
                catch (err) {
                    return false
                }
            },
        }

        module.exports = mod
