
import './style.css';
import React, {Component, Fragment} from 'react';
import MessageComp from '../Message/Message.jsx'

export default class FieldComp extends Component {
//    constructor (props){
//        super(props);
//        this.owner = this.props.owner;
//        this.state={
//            //
//        }
//    }
    componentDidUpdate(){
        let field=document.getElementById("field");
                    field.scrollTop=field.scrollHeight;
                    console.log("scroll");
    }
    componentDidMount(){        
        let field=document.getElementById("field");
                    field.scrollTop=field.scrollHeight;
                    console.log("scroll");
    }
    render() {
        let { messages, owner }=this.props;
        console.log('FieldComp Owner', owner);
        let messagesArray=messages.map((msg,index)=>{
            let { sender, senderName, text }=msg;
            console.log(' msg owner = ', owner);
            let isOwner='false';
            if (sender == owner) { isOwner='true' };
            return(
            <MessageComp  sender={ senderName } text={ text } key={ index } isOwner={ isOwner }/>)}
            
        );
        
        return (
            <Fragment>
                <div
                    className="FieldComp" id="field">
                    { messagesArray }
                   
                </div>
            </Fragment>
        )
    }
}
