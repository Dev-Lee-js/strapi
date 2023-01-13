
import React from 'react';
import {
    MessagesContainer,
    MessageBox,
    MessageText,
    SentBy
} from '../styles';

function Message(props) {
    const { username, message: { user, text } } = props;

    if(text === undefined){
        console.log("fuck you")
    }
    
    let sentByCurrentUser = false;

    const trimmedName = username.trim().toLowerCase()

    if (user === trimmedName) {
        sentByCurrentUser = true
    }
    const background = sentByCurrentUser ? "blue" : "dark";    
    const textColor = sentByCurrentUser ? "white" : "dark";
    const sentBy = sentByCurrentUser ? "right" : "left";
    return (
        <MessagesContainer>
            <MessageBox background={background}>
                <MessageText color={textColor}>{text}</MessageText>
            </MessageBox>
            <SentBy sentBy={sentBy}>{user}</SentBy>
        </MessagesContainer>
    )
}

export default Message;