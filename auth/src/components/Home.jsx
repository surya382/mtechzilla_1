import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Home = () => {

  const [timer,settimer]=useState(25*60);
  const [start,setstart]=useState(false);
  const [type,settype]=useState("normal");

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(()=>{

    let id=null;

    if(start){
      id=setInterval(()=>{
        settimer((timer)=>timer-1);
      },1000);

    }

    else{
      clearInterval(id);
    }

    if(timer===0){

      if(type=="normal"){
        settype("break");
        settimer(5*60);
      }
      else{
        settype("normal");
        settimer(25*60);
      }
    }

    return ()=>clearInterval(id);

  },[timer,type,start]);

  const startstop=()=>{
    setstart(!start);
  }

  const reset=()=>{
    setstart(false);
    settimer(25*60);
    settype("normal");
  }



  return (
    <div>
      <Box>
      {type=="break" && <Text> Break time</Text>}
        <Heading>{`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</Heading>

        <Box display="flex" justifyContent="center" gap="50px"  p={5} width="40%" margin="auto">
                 <Button onClick={startstop}>{start?"Pause":"Start"}</Button> 
                 <Button onClick={reset}>Reset</Button>
        </Box>
      </Box>
    </div>
  )
}

export default Home