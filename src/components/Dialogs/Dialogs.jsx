import React from 'react';
import styles from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsUsers}>
                {props.renderUser}
            </div>
            <div className={styles.dialogsItems}>
                {props.renderMessages}
            </div>
        </div>
    )

}

export default Dialogs