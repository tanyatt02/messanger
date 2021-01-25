import './style.css';
import React, {
    Component,
    Fragment
} from 'react';

import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import AddChat from '../AddChat/AddChat.jsx';
import ChatList from '../ChatList/ChatList.jsx';

import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';

import {
    loadMessages
} from '../../store/actions/message-actions';



class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddChat: false
            //
        };
        //        this.emails = ['username@gmail.com', 'user02@gmail.com', 'test@lol.net'];
    }
    
    setAddChat = () => {
        let flag = !this.state.openAddChat;
        this.setState({
            openAddChat: flag
        });
        console.log(this.state.openAddChat);

    }
    sendAddChat = (title) => {
        this.props.sendChat(title)
    }
//    componentDidMount() {
//        this.props.loadChats();
//
//        console.log('chats!!!!!!!!! DidMount= ',this.props.chats);
//    }
    render() {


        let chats = this.props.chats;
        
        let contacts = this.props.contacts;
        let {
            chatId, userId
        } = this.props;
//        if(!chatId){
//            if (chats.length>0){chatId=chats[0].id};
//        console.log('chats!!!!!!!!! chatId= ',chatId);
//        };
//        if (chats.length>0) { this.chatId=1 };
        let chatsTitles = chats.map(cht => {cht.id, cht.title});
        console.log('chats!!!!!!!!! chatId= ',chatId);
        //this.props.loadMessages(chatId);
        return (

            <
            Fragment >
            <
            div className = "Chats" >
            <
            ChatList chats = {
                chats
            }
            chatId = {
                chatId
            }
            /> <
            ChatsDialog emails = {
                contacts
            }
            setAddChat = {
                this.setAddChat
            }
            chatId = {
                chatId
            }
            userId = {
                userId
            }
            /> <
            AddChat open = {
                this.state.openAddChat
            }
            setAddChat = {
                this.setAddChat
            }
            sendAddChat = {
                this.sendAddChat
            }
            /> <
            button onClick = {
                this.setAddChat
            } > Add Chat < /button>

            <
            /div> <
            /Fragment>
        )
    }
} 

const mapStateToProps = ({
        chtReducer, usrReducer,msgReducer
    }) =>
    ({
        chats: chtReducer.chats, contacts: chtReducer.contacts, userId: usrReducer.id, messages: msgReducer.messages
    });
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        loadMessages
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Chats);
