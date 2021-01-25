
        import './style.css';
        import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';

import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
import {
   loadChats
} from '../../store/actions/chat-actions';
import {
   loadContacts
} from '../../store/actions/chat-actions';
import {
   loadMessages
} from '../../store/actions/message-actions';




const useStyles = makeStyles({
  avatar: {
    backgroundColor: grey[100],
    color: grey[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, emails } = props;
  console.log('selectedValue = ', selectedValue);  
  

  const handleClose = () => {
    onClose(selectedValue);
      console.log('selectedValue = ', selectedValue)
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };


    
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Chats List</DialogTitle>
      <List>
        {emails.map((email) => (
             
          <ListItem button onClick={() => handleListItemClick(email)} key={email.id}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email.title} />
          </ListItem>
        ))}

        <ListItem  button onClick={() => handleListItemClick('AddChat')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add Chat" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  emails:PropTypes.array
};

export function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
 
    const { emails,chatId, userId }= props;
   console.log('demo= ',emails);
    
    const [selectedValue, setSelectedValue] = React.useState(emails[chatId-1]);
    
    
  const setAC = () => {
        props.setAddChat();
           
    }  ;
   
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  let loadChats = props.loadChats;
  let loadMessages = props.loadMessages;
  let loadContacts = props.loadContacts;
    
    const sendCntToChts= (contact) => {
      fetch(   `/api/contact/${userId}`, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify({contact}), // данные могут быть 'строкой' или {объектом}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        .then(d => {loadChats(userId), loadContacts(userId),
          loadMessages(contact.id)})
//        console.log('send Comp messages = ', this.props.messages)});
  } 
    
    const handleClose = (value) => {
    if (value=='AddChat'){setAC() ; console.log(props.setAddChat)};  
    setOpen(false);
    setSelectedValue(value);
     if(value){ 
      window.selectedValueId = value.id;
        console.log('handleClose value = ', value);
    sendCntToChts(value) }
       // return selectedValueId
  };
console.log('DemoDemo selectedValueId = ', window.selectedValueId);
  return (
    <div>
      <Typography variant="subtitle1">Selected: {window.selectedValueId}</Typography>
      <br />
      <Button variant="outlined" color="grey" onClick={handleClickOpen}>
        Choose Chat
      </Button>
      <SimpleDialog selectedValue={window.selectedValueId} open={open} onClose={handleClose} emails={emails}/>
      
    </div>
  );
}

const mapStateToProps = ({
        chtReducer, msgReducer
    }) =>
    ({
        chats: chtReducer.chats, contacts: chtReducer.contacts, messages: msgReducer.message
    });
const mapDispatchToProps = dispatch =>
    bindActionCreators({loadChats, loadContacts, loadMessages
        
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SimpleDialogDemo);
