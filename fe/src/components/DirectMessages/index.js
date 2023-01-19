import React, {useEffect, useState} from 'react'
import {DM, UserName} from "./styles"
import { useSelector } from "react-redux";
import { socket } from '../../config/web-sockets';


function DirectMessage() {   

  const joinData = useSelector((state) => state.slact.value);
  const [users, setUsers] = useState([]);  

  useEffect(() => {        
    
        socket.on("roomInfo", (users) => {
          setUsers(users);
        });            
    
 }, [joinData])     

 console.log(users.users)
 function UserInfo(){
  if (users.users === undefined) {                      
      <div></div>
  } else {          
    return users.users.map((item) => 
       <div key={item.id}>               
                 {item.username}                                
             </div>          
       )   
   
   } 
  }
  
  return (

    <>                          
      <DM>DirectMessage</DM>            
      <UserName>
        <UserInfo />
      </UserName>
         
    </>

  )
}

export default DirectMessage