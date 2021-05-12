import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import ContextStore from '../../ContextStore';

const DialogsContainer = (props) => {

    return <ContextStore.Consumer>
        {
            (store) => {
            let sendMessage = () => {
                store.dispatch(addMessageActionCreator())
            }
            let updateMessagesText = (message) => {
                store.dispatch(updateNewMessageTextActionCreator(message))
            }
            return <Dialogs addMessage={sendMessage} updateMessagesText={updateMessagesText}
                            dialogsPage={store.getState().dialogsPage}/>
        }
        }
    </ContextStore.Consumer>

}

export default DialogsContainer