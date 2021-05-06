import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

    let renderUser = props.users.map(user => <DialogItem name={user.name} id={user.id}/>)
    let renderMessages = props.messages.map(message => <MessageItem message={message.message} id={message.id}/>)

    let newMessage = React.createRef()

    let sendMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
    }

    let onMessageChange = () => {
        let message = newMessage.current.value
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: message})
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsUsers}>
                {renderUser}
            </div>
            <div className={styles.dialogsItems}>
                {renderMessages}
            </div>
            <div className={styles.sendMessage}>
                <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )

}

export default Dialogs