import React from 'react'
import {Box} from "@chakra-ui/react"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Box display="flex" gap="50px" p={8}>
         <Link to="/">Home</Link>
         <Link to="/login">Login</Link>
         <Link to="/signup">signup</Link>
        </Box>
    </div>
  )
}

export default Navbar