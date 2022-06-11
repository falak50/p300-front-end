import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonIcon from '@mui/icons-material/Person';
import { Routes } from 'react-router-dom';
import Auth from './Auth';
import Blogs from './Blogs';
import AddBlog from './AddBlog';
import UserBlogs from './UserBlogs';
import BlogDetails from './BlogDetails';
import { Route } from 'react-router-dom';
import { Avatar } from '@mui/material';

const drawerWidth = "15%";

export default function HeaderTest() {

    let navigate = useNavigate();


    const [state,setState] = React.useState({

      name : '',
      email : ''
    })

    const logOut=()=>
    {

      setState({
        name : '',
        email : ''

      })

    }
    
  return (
    <Box sx={{ display : "flex" }}>
      <CssBaseline />
      {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Header callback={logOut}/>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
          </List>
        
          <List>
          <div style={{
        padding : '10px',textAlign : 'center',display : 'flex',
        justifyContent : 'center',alignItems : 'center'}}>
      
          <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
          
           {state?.name[0]} 
         
          </Avatar>
        
        
         
        </div>

        <div style={{textAlign :  'center'}}>
        {state?.name?.length===0? 'Guest' : state?.name}
        </div>

        <div style={{textAlign :  'center',marginBottom : '10px',
      fontSize : '12px',color : 'rgb(156, 163, 175)'}}>
        {
          state?.email?.length===0?' guest@gmail.com' : state.email
        }
        </div>

        <Divider/>
            {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}

<ListItemButton onClick = {()=>navigate('/blogs')}  >
                  <ListItemIcon>
                     <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>

                
<ListItemButton onClick = {()=>navigate('/myblogs')}  >
                  <ListItemIcon>
                     <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={"My Blogs"} />
                </ListItemButton>


                
<ListItemButton onClick = {()=>navigate('/blogs/add')}  >
                  <ListItemIcon>
                     <PostAddIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Create Blog"} />
                </ListItemButton>


          </List>

          <Divider></Divider>

          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar /> */}

       
     
        <Routes>
      
      <Route path="/auth" element={<Auth setState={setState} />} />    
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/add" element={<AddBlog />} />
      <Route path="/myBlogs" element={<UserBlogs />} />
      <Route path="/myBlogs/:id" element={<BlogDetails />} />
  
</Routes>
      </Box>
    </Box>
  );
}