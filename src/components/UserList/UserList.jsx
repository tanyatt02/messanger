
import './style.css';
import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadUsers } from '../../store/actions/user-actions';
import { loadChats, loadContacts } from '../../store/actions/chat-actions';
import { loadMessages } from '../../store/actions/message-actions';

import BtnSend from '@material-ui/icons/Send';
import Item from '../ChatListItem/ChatListItem.jsx';


class UserList extends Component {
    componentDidMount () { console.log('UserList DidMount');
       //this.props.loadUsers('u-0');               
                         }

    
//<button onClick={ () => fetch('/api/users',{method: 'GET'}).then(d=>d.json()).then(d=>{
//                console.log('fetch ', d); loadUsers(d);
//            })}> CHOOSE USER </button>
    
    render() {
//        fetch('/api/user/u-0').then(d=>d.json()).then(d => {console.log('render UserList ', d.id); this.props.loadUsers(d.id)});
        let { users, name, userId }=this.props;
         
        //console.log('UserList = ', users, userId, name);
//        this.props.loadUsers(userId); this.props.loadChats(userId);
//        this.props.loadContacts(userId);
        
//  let loadMessages = props.loadMessages;
//  let loadContacts = props.loadContacts;
        
//        const handleUser = () => {
//            
//            this.props.loadUsers(userId); this.props.loadChats(userId);
//            this.props.loadContacts(userId);
//            
//            console.log('USER LIST CHATS = ', this.props.users.chats,'USER ID = ', userId) ;                       
//            if(this.props.users.chats.length>0){
//                let chatId=this.props.chats[0].id;
//                console.log('UserList CHAT ID = ', chatId);
//                fetch('/api/chat'+chatId).then(d => d.json()).then(d => console.log('messages? = ',d))
//                    console.log('UserList CHAT ID = ', this.props.chats[0].id); this.props.loadMessages(this.props.chats[0].id)
//                    }else{
//                                     
//                                 
//            }
//           
//        };
        
        let linksArr = users.map(usr => 
                                 <Link to='/' key={usr.id}>
                                 <button onClick={ () => { this.props.loadUsers(usr.id); this.props.loadChats(usr.id);
                                this.props.loadContacts(usr.id)}}>
                                 
            <Item name = { usr.name } />
            
        </button>
        </Link>);

//<button onClick={ () => fetch('/api/user/u-0',{method: 'GET'}).then(d=>d.json()).then(d=>{
//                console.log('fetch ', d); this.props.loadUsers(d.id);
//            })}> CHOOSE USER </button>        
        return (
            <Fragment>
                                     <Link to='/'>
                                     <button onClick={ () => {
                                                 this.props.loadUsers('u-0');
                                                 this.props.loadChats('u-0');
                                    this.props.loadContacts('u-0')}}>  CHOOSE USER {name}</button></Link>
                <div
                    className="UserList">
                    <ul>    
                        { linksArr }
                    </ul>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({usrReducer, chtReducer, msgReducer}) => 
                        ({users: usrReducer.users, chats: chtReducer.chats, contacts: chtReducer.contacts, name:usrReducer.name, userId:usrReducer.id, messages: msgReducer.messages});
                    
const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadUsers, loadChats, loadContacts, loadMessages }, dispatch);
    

export default connect(mapStateToProps, mapDispatchToProps )(UserList);   