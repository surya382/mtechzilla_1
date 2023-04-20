import React, { useState } from 'react'
import {Box, FormControl, FormLabel, Input, Heading, Button, useToast} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"
import { auths,provider } from './firebase';
import * as firebase from 'firebase/app'
import 'firebase/auth';
import {signInWithEmailAndPassword,signInWithPopup} from "firebase/auth"

import { async } from '@firebase/util';

const Login = () => {
    const [user,setuser]=useState({
        email:"",
        password:""
    });
     
    const navigate=useNavigate();
    const toast = useToast();

    const handlechange=(e)=>{
    
        const {name,value}=e.target;

        setuser({...user,[name]:value});
    }


     const login=async()=>{
             
        if(user.email!=="" && user.password!==""){
            try{
                 
                await signInWithEmailAndPassword(auths, user.email, user.password).then((res)=>{
                   
                    toast({
                        title: "Login successful",
                        status: "success",
                        position:"top",
                        duration: 2000,
                        isClosable: true,
                      })
                })

                navigate("/");
            }
            catch(err){
                toast({
                    title: "Login failed",
                    status: "error",
                    position:"top",
                    duration: 2000,
                    isClosable: true,
                  })
                console.log(err);
                

            }
        }
     }


     const withgoogle=async()=>{

         

         try{
            signInWithPopup(auths,provider).then((res)=>{
                toast({
                    title: "Login successful",
                    status: "success",
                    position:"top",
                    duration: 2000,
                    isClosable: true,
                  })
            })

                navigate("/");
         }
         catch(err){
            toast({
                title: "Login Failed",
                status: "error",
                position:"top",
                duration: 2000,
                isClosable: true,
              })
            console.log(err);
         }
     }

  return (
    <div>

        <Box>
            <Heading>Login </Heading>

        <FormControl width="40%" margin="auto" display="flex" flexDirection="column" gap="20px">
    <FormLabel>Email address</FormLabel>
     <Input type='email' name='email' value={user.email}  onChange={handlechange}/>
   
     <FormLabel>Password</FormLabel>
     <Input type='password' name='password' value={user.password}  onChange={handlechange}/>

     <Button mt={4} onClick={login}>Login</Button>

     <Button onClick={withgoogle}>Sign in with google</Button>

   </FormControl>

        </Box>
    </div>
  )
}

export default Login