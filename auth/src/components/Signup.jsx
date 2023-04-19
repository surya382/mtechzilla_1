import React from 'react'
import {Box, FormControl, FormLabel, Input, Heading, Button} from "@chakra-ui/react"
import { useState } from 'react'
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from './firebase';
import {useNavigate} from "react-router-dom"

const Signup = () => {

    const [user,setuser]=useState({
        email:"",
        password:""
    });
     
    const navigate=useNavigate();

    const handlechange=(e)=>{
    
        const {name,value}=e.target;

        setuser({...user,[name]:value});
    }

    const submit=async()=>{
  
        if(user.email!=="" && user.password!==""){

            try{

                await createUserWithEmailAndPassword(auth, user.email, user.password).then((res)=>{
                    navigate("/login")
                })

            }
            catch(err){
                console.log(err);
            }
        }

    }

  return (
    <div>
         <Box>
            <Heading>Signup </Heading>

        <FormControl width="40%" margin="auto">
    <FormLabel>Email address</FormLabel>
     <Input type='email' name='email' value={user.email} onChange={handlechange}/>
   
     <FormLabel>Password</FormLabel>
     <Input type='password' name='password' value={user.password} onChange={handlechange}/>

     <Button onClick={submit} mt={4}>Register</Button>

   </FormControl>

        </Box>
    </div>
  )
}

export default Signup