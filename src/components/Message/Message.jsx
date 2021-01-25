
        import './style.css';
        import React, { Fragment } from 'react';

        export default props => {
            let { sender,text,isOwner } = props;
            
            let className1='';
            if (isOwner == 'true') {
                className1='Message owner'
            }else{
                className1='Message partner'
            };
            return (
                <Fragment>
                    <div className={ className1 }>
                       
                        {sender &&  <strong> { sender } </strong>}
                        { !sender && <strong>BOT</strong> }
                        <p>{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>
                        
                    </div>
                </Fragment>
            )
        }
    