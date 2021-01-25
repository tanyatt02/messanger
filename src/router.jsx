import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadChats, loadContacts } from './store/actions/chat-actions';

import Layout from './components/Layout/Layout.jsx';
import UserList from './components/UserList/UserList.jsx';

class Router extends React.Component {
    componentDidMount () {
        console.log('router DidMount= ');
        
        this.props.loadChats('u-0');
        this.props.loadContacts('u-0');
        
        console.log('router DidMount= ',this.props.chats)
    }
    render(){
        //this.props.loadChats();
        
        let {chats, contacts, users}=this.props;
        console.log('users= ',users);
        //this.props.loadChats();
        
        console.log('router 1 = ',chats);//
        let routesArr=chats.map(ch => <Route
                   exact
                   path = {`/chat/${ch.id}/`} key={ch.id}
                    render = { () => <Layout  chatId= {ch.id} chatTitle = { ch.title }  />}/>);
//           let routesArr = chats.map(ch => <Route exact path = {`/chat/${ch.id}/`} render = { () => <Layout chatTitle = { ch.title }  /> } />)                 
        
    return (
        
        
        <Switch>
            <Route exact path='/' component={ Layout } />
               { routesArr }
            
        </Switch>
    )}
}

const mapStateToProps = ({chtReducer})=>
                        ({chats: chtReducer.chats, contacts: chtReducer});
                    
const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadChats, loadContacts }, dispatch);
    

export default connect(mapStateToProps, mapDispatchToProps )(Router);                      