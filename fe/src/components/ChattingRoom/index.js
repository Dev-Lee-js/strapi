import React, { useEffect, useState } from 'react';
import { socket } from '../../config/web-sockets';
import Messages from '../../components/Messages';


import {
  ChatBox,  
  ChatIcon,
  MessageBox,
  Header
} from './styles';

function ChattingRoom(props) {
        
    
    const {username, room, joinData } = props.props;
    const [messages, setMessages] = useState([]);    
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]);
    const [pre, setPre] = useState()    
          
    useEffect(() => {        
        if( Object.keys(joinData).length > 0) {            
            socket.on("preChatList", (message, error) => {                    
                setPre(message)
              });
            socket.on('message', (message, error) => {                                
                setMessages(msgs => [ ...msgs, message ]);                
            });
            socket.on("roomInfo", (users) => {
              setUsers(users);
            });            
        } 
        else {            
        }
     }, [joinData])
     const handleChange = (e) => {
      setMessage(e.target.value);
    };
    const handleClick = () => {
      sendMessage(message);           
    };    
    const keypress = (e) => {
        if(e.keyCode === 13){
            handleClick()            
        }
      };  
    const sendMessage = (message) => {
      if(message) {
          socket.emit('sendMessage',{ userId: joinData.userData.id, message }, (error) => {
              if(error) {
                  alert(error)                  
              }
          });
          setMessage('')
      } else {
          alert("Message can't be empty")
      }
    }    
      
        
      
      
      

       return (       
        <ChatBox>
            <Header>
                <span>
                    #일반
                </span>
            </Header>
            <Messages                
                messages={messages} 
                username={username}
                pre={pre}                
            />
            <MessageBox>
                <input onKeyDown={keypress} 
                    type="text"
                    placeholder="메세지 입력"
                    value={message}
                    onChange={handleChange}
                />
                <button onClick={handleClick}>
                    <ChatIcon />
                </button>
            </MessageBox>
        </ChatBox>    
       )
};
export default ChattingRoom;