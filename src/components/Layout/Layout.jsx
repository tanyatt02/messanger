
import './style.css';
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Chats from '../Chats/Chats.jsx';
import Comp from '../comp/comp.jsx';
import UserList from '../UserList/UserList.jsx';




export default class Layout extends Component {
    
//    static propTypes = {
//        chatId:PropTypes.number
//    }
//
//   
//
//    static defaultProps = {
//        chatId:'c-1'
//    }
//    
//componentDidMount(){
//        let h1=document.getElementById('title');
//    let {chatTitle}=this.props;
//                    h1.textContent=chatTitle1;
//                    console.log('chatTitle1= ',chatTitle1);
//    }

    render() {
        // let {some}=this.state;
         let title=this.props.chatTitle;
        return ( 
            <  div className='content'>
               <h1 id="title">Chat: { title }</h1>
                < Chats chatId={ this.props.chatId }/>
                <    Comp name = "Darth Vader" chatId={ this.props.chatId }/ >
                <UserList />
         <    /div>
        )
    }
}
