import React, { useState } from 'react';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material'
//import { borderRadius } from '@mui/system';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
const Header = () => {
   const dispath = useDispatch
    const isLoggedIn = useSelector(state=>state.isLoggedIn);
    const [value ,setValue] =  useState();

    const logoutClick = ()=>
    {
      dispath(authActions.logout())

      localStorage.clear()
    }
    return (
       <AppBar
       position="sticky"
       sx={{background : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
      <Toolbar>
          <Typography variant='h4'>BlogApp</Typography>
   {  isLoggedIn  && 
      <Box display="flex" marginLeft={'auto'} marginRight='auto'>  
              <Tabs 
               textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
              <Tab LinkComponent={Link} to="/blogs"  label="All Blogs"/>
              <Tab LinkComponent={Link} to="/myblogs"  label="My Blog"></Tab>
              <Tab LinkComponent={Link} to="/blogs/add"  label="ADD BLOG"></Tab>
              </Tabs>
          </Box>
  }
       <Box display="flex" marginLeft='auto' >

          { !isLoggedIn && <>    <Button 
                LinkComponent={Link} to="/auth"
               variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Login</Button>
               <Button
                    LinkComponent={Link} to="/auth"
               variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Singup</Button>
               </>
          }   
          

       { isLoggedIn  && (<Button
             onClick={logoutClick}  
              LinkComponent={Link} to="/auth"
              variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Logout</Button>)
       }

          </Box>
      </Toolbar>
       </AppBar>
    );
};

export default Header;