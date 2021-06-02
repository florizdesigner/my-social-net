import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {Redirect} from 'react-router-dom'

const Dialogs = (props) => {

    let renderUser = props.dialogsPage.users.map(user => <DialogItem key={user.id} name={user.name} id={user.id}/>)
    let renderMessages = props.dialogsPage.messages.map(message => <MessageItem key={message.id} message={message.message}
                                                                                id={message.id}/>)

    let newMessage = props.dialogsPage.newMessageText


    let sendMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (event) => {
        let message = event.target.value
        props.updateMessagesText(message)
    }

    if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsUsers}>
                {renderUser}
            </div>
            <div className={styles.dialogsItems}>
                {renderMessages}
            </div>
            <div className={styles.sendMessage}>
                <textarea onChange={onMessageChange} value={newMessage}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )

}

export default Dialogs