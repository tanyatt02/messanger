
import './style.css';
import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadChats } from '../../store/actions/chat-actions.js';

import BtnSend from '@material-ui/icons/Send';
import Item from '../ChatListItem/ChatListItem.jsx';


class ChatList extends Component {
//    constructor (props){
//        super(props);
//        this.state={
//            //
//        }
//    }
//    componentDidMount () {
//        this.props.loadChats();
//        console.log('chats= ', this.props.chats);
//    }
    render() {
//        this.props.loadChats();
//        console.log('chats= ', chats);
        let {chats, chatId}=this.props; 
        console.log('ChatID= ',chatId);
        let chatsArray=chats.map((cht,index)=>{
            let { id, title }=cht;
            
            let path=`/chat/${id}/`;
            //console.log('path= ',path);
            return(
                <div key={index}>
            <Link to={path}>
            <Item  name={ title }/>
                </Link>
                </div>)
        });
//        if(chatsArray.length()>0){
//            
//        }
        return (
            <Fragment>
              <ul>
               { chatsArray }
           </ul> 
            </Fragment>
        )
    }
}

const mapStateToProps = ({chtReducer})=>
                        ({chats: chtReducer.chats});
                    
const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadChats }, dispatch);
    

export default connect(mapStateToProps, mapDispatchToProps )(ChatList);   