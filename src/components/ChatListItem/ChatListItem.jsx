import './style.css';
import React, {
    Fragment
} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BtnSend from '@material-ui/icons/Send';
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #ccc 30%, #fff 90%)',
        border: 0,
        borderRadius: 2,
        color:'grey',
        boxShadow: '0 3px 5px 2px #aaa',
        color: 'grey',
        height: 48,
        padding: '0 30px',
    },
    text: {
        
        border: 0,
        borderRadius: 2,
        color:'grey',
        fontSize: '48px',
        color: 'grey',
        
        padding: '0 30px',
    },
    btn: {
        
        border: 0,
        borderRadius: 2,
        color:'grey',
    }
});

export default props => {
    let {
        name
    } = props;
    const classes = useStyles();
    return ( <
        ListItem button className = {classes.root}>      
        
        
         <BtnSend className = {classes.btn}/>
        <ListItemText primary = {
            name
        } className = {classes.text}> < /ListItemText> <
        /ListItem>
    )
}
