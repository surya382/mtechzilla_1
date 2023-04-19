import React, { useState } from 'react'
import {Box, FormControl, FormLabel, Input, Heading, Button} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"
import { auth } from './firebase';
import {signInWithEmailAndPassword} from "firebase/auth"

const Login = () => {
    const [user,setuser]=useState({
        email:"",
        password:""
    });
     
    const navigate=useNavigate();

    const handlechange=(e)=>{
    
        const {name,value}=e.target;

        setuser({...user,[name]:value});
    }


     const login=async()=>{
             
        if(user.email!=="" && user.password!==""){
            try{
                 
                await signInWithEmailAndPassword(auth, user.email, user.password).then((res)=>{
                   
                    
                })
            }
            catch(err){
                console.log(err);
                alert("failed");

            }
        }
     }


  return (
    <div>

        <Box>
            <Heading>Login </Heading>

        <FormControl width="40%" margin="auto">
    <FormLabel>Email address</FormLabel>
     <Input type='email' name='email' value={user.email}  onChange={handlechange}/>
   
     <FormLabel>Password</FormLabel>
     <Input type='password' name='password' value={user.password}  onChange={handlechange}/>

     <Button mt={4} onClick={login}>Login</Button>

   </FormControl>

        </Box>
    </div>
  )
}

export default Login