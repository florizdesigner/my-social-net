import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let updateMessagesText = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message))
    }
    return <Dialogs addMessage={sendMessage} updateMessagesText={updateMessagesText}
                    dialogsPage={props.store.getState().dialogsPage}/>

}

export default DialogsContainer