import './style.css';
import React, {
    Component,
    Fragment
} from 'react';
import CompField from '../FieldComp/FieldComp.jsx';
import InputComp from '../InputComp/InputComp.jsx';

import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';

import {
    sendMessage,
    loadMessages
} from '../../store/actions/message-actions';
import {
    loadUsers
} from '../../store/actions/user-actions';
//import {  findUser } from '../../../server/controllers/user.js';


class Comp extends Component {

    componentDidMount() {
        console.log('Comp chatId= ', this.props.chatId);

        this.props.loadMessages(this.props.chatId);
        //        this.props.loadUsers('c-1');

    }
    


    


    //        send = (text, sender = this.props.userId, chatId=this.props.chatId) => {
    //            this.props.sendMessage(text, sender, chatId)
    //
    //        }
    // 
    
//    send = (text, sender, chatId) => {
//        try {
//            const res = fetch(   `/api/chat/${chatId}`, {
//                method: 'POST', // или 'PUT'
//                body: JSON.stringify({text, sender, chatId}), // данные могут быть 'строкой' или {объектом}!
//                headers: {
//                    'Content-Type': 'application/json'
//                }
//            });
//            
//           // return  res.json();
//            console.log('Успех:', res);
//        } catch (error) {
//            console.error('Ошибка:', error);
//        };
//        console.log('this = ', this, ' chatId = ', chatId);
//        this.props.loadMessages(chatId);
//        console.log('send Comp messages = ', this.props.messages);
//    }
    send = (text, sender, chatId) => {
        fetch(   `/api/chat/${chatId}`, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify({text, sender, chatId}), // данные могут быть 'строкой' или {объектом}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        .then(d => {this.props.loadMessages(chatId),
        console.log('send Comp messages = ', this.props.messages)});
            
           // return  res.json();
//            console.log('Успех:', res);
//        } catch (error) {
//            console.error('Ошибка:', error);
//        };
//        console.log('this = ', this, ' chatId = ', chatId);
//        this.props.loadMessages(chatId);
//        console.log('send Comp messages = ', this.props.messages);
    }




    render() {
        //            fetch('/api/user/u-1').then(d=>d.json()).then(d=>{
        //                console.log('fetch ', d)
        //            });

        let {
            messages
        } = this.props;
        console.log('render messages = ', messages);
        
        let {
            users
        } = this.props;
        console.log('render comp users = ', users);
        
        let senderName = '';
        let msgs = messages.map(msg => {
            if (msg.sender) {
                senderName = users.find(usr => usr.id == msg.sender).name
            } else {
                senderName = ''
            };
            return Object.assign({}, msg, {
                senderName: senderName
            })
        });
        console.log('msgsU = ', msgs);


        let {
            userId
        } = this.props;
        let {
            chatId
        }= this.props;
        console.log('Comp UserID = ', userId);
        let owner = userId;
        //            let users0=[];
        //           users.forEach(function(item) { let userName = findUser(item);console.log('Comp userName=', userName);
        //                user0.push( Object.assign({}, { item, userName}))});
        //            user = user0;

        //console.log('Comp messages = ', messages);
        return ( <
            Fragment >
            <
            div className = "Comp" >
            <
            CompField messages = {
                msgs
            }
            owner = {
                userId
            }
            />   <
            InputComp send = {
                this.send
            } userId={userId} chatId={chatId}
            />< /
            div >
            <
            /Fragment>

        )
    }


}



const mapStateToProps = ({
        msgReducer,
        usrReducer
    }) =>
    ({
        messages: msgReducer.messages,
        users: usrReducer.users,
        userId: usrReducer.id
    });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        sendMessage,
        loadMessages,
        loadUsers
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Comp);
