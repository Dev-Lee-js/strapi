import React from 'react';
import {
    MessagesContainer,
    MessageBox,
    MessageText,
    SentBy
} from '../styles';

function PreMessage(props) {   
    const { message} = props;
 
    return (
        <MessagesContainer >
            <MessageBox >
                <MessageText>{message}</MessageText>
            </MessageBox>
            <SentBy></SentBy>
        </MessagesContainer>
    )
}

export default PreMessage;