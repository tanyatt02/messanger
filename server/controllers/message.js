const messagesPath = './server/db/messages/messages.json';

const Message = require('../models/message.js');

module.exports = {
    async findMessages(idsArr) {
        try{
        let msg=[];
            //let arr = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));
            await Message.find({}, function(err, result){
                if(err) return console.log(err);
            })
            .then(arr => {//console.log('server Message ', arr);
            msg = idsArr.map(id => 
                
                arr.find(msg =>  
                msg.id == id));
            
            
           console.log('server Message msg from message.js= ', msg);
                return msg
            })
//            msg.forEach( item => {
//                console.log('server Message msg.sender= ', item.sender);
//                findUser(item.sender) 
//                .then(userName => {
//                console.log(' server message userName= ', userName);
//                item.sender = userName;})});
//                        
//            console.log('server Message msg= ', msg);
//            let userName='';
//            let msgU = [];
//            msg.forEach(item => 
//                
//                userName = findUser(item.sender)
//                .then (userName => msgU.push({item, userName}))
//            );
//            
//            console.log('server Message msg U= ', msgU);
//           
//            .then(res => {console.log('msg = ', msg);
//                          return msg
//                         })
        } 
         catch (err) {
            return false
        }
    }
}
