import './style.css';
import React, {
    Fragment
} from 'react';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddChat(props) {
    
       
    let    open = props.open;
   
//let [text,setText]=React.useState('');
    let text='';


  const   sendAC = () => {
        props.sendAddChat(text);
        text='';
    }

    

   const setAC = evt => {
        props.setAddChat();
    }

  const  handleClose = () => {
        open = false;
        console.log(open);
        setAC()
    }
  const  handleCloseSend = () => {
               sendAC(); open = false;
        console.log(open);
        setAC()
        
    }
  const  handleCloseSend13 = evt => {
              if(evt.keyCode == 13)
              { sendAC(); open = false;
        console.log(open);
        setAC()}
        
    }
  
  
const changeTextField = evt =>{
    text = evt.target.value;
    console.log(text);
    
}
  
return ( <
        div >

        <
        Dialog open = {
            open
        }
        onClose = { handleClose }
        aria-labelledby = "form-dialog-title" >
        <
        DialogTitle id = "form-dialog-title" > Subscribe < /DialogTitle> <
        DialogContent >
        <
        DialogContentText >
        To subscribe to this website, please enter your email address here.We will send updates occasionally. <
        /DialogContentText> <
        TextField autoFocus margin = "dense"
        id = "name"
        label = "New Chat"
        type = "text"
        onKeyUp = { handleCloseSend13 }
        onChange={changeTextField}
        fullWidth /
        >
        <
        /DialogContent> <
        DialogActions >
        <
        Button onClick = {
            handleClose
        }
        color = "primary" >
        Cancel <
        /Button> <
        Button onClick = {
            handleCloseSend
        }
        color = "primary" >
        Subscribe <
        /Button> <
        /DialogActions> <
        /Dialog> <
        /div>
    )
}
