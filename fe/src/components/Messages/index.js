import React,{useRef, useEffect} from 'react';
import Message from './Message';
import {StyledMessages} from './styles';

function Messages(props) {
    
    const scrollRef = useRef(null);    
    const { messages, username, pre } = props;    
    function PreMessage(){
        if (pre === undefined) {                      
            <div></div>
        } else {          
          return  pre.usersText.map((message, i) => 
            <div key={i}>
                <Message 
                    message={message} 
                    username={username}
                />
            </div>
        )    
         
        }
    }
    function InputMessage(){        
         if(true){
            return messages.map((message, i) => 
            <div key={i}>
                <Message 
                    message={message} 
                    username={username}
                />
            </div>
        )    
         
        }
    }

    
    
        useEffect(()=>{                
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight)
        })
    
    return (
        <StyledMessages ref={scrollRef}>            
            <PreMessage />
            <InputMessage />
        </StyledMessages>
    );
}
export default Messages;
