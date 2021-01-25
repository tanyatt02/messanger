
import './style.css';
import React, {Component, Fragment} from 'react';

import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';

import AddCommentIcon from '@material-ui/icons/AddComment';
import {
   loadMessages
} from '../../store/actions/message-actions';

class InputComp extends Component {
    constructor (props){
        super(props);
        this.state={
            text:''
            
        };
        this.textInput=React.createRef()
    }
    componentDidMount=()=>{
        
            this.textInput.current.focus()
       
    }
    
    HandleClick=evt=>{
        if(evt.keyCode !== 13) {
            this.setState({text: evt.target.value})
        }
        else {
            this.props.send(this.state.text, this.props.userId, this.props.chatId);
            this.setState({text: ''})
        }
    }
     
    sendM = () => {
        this.props.send(this.state.text, this.props.userId, this.props.chatId);
        this.setState({text: ''});
//        this.props.loadMessages(this.props.chatId);
//        console.log('send Input messages = ', this.props.messages);
//        console.log('InputComp userId = ', this.props.userId)
//            this.setState({text: ''});
//        fetch('/api/msg/m-4').then(d=>{
//                console.log('HI from SEND ', d)
//            });
//        fetch('/api/msg/m-9', {method: 'POST'}).then(d=>d.json()).then(d=>{
//                console.log('c-1.json ', d)
//            });
    }
    
    
    render() {
        let { text } = this.state;
        let {sender, chatId, userId}=this.props;
        console.log('InputComp userId = ', userId);
        return (
            <Fragment>
                <div
                    className="InputComp">
                    <input type="text"
                    ref={this.textInput}
                    value = { this.state.text }
                    onKeyUp = { this.HandleClick }
                    onChange = { this.HandleClick }/>
                    <button onClick={this.sendM}><AddCommentIcon/>SEND</button>
                </div>
            </Fragment>
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
        loadMessages,
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(InputComp);

