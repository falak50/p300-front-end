import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
const Blog = ({title,description,imageURL,userName,isUser,id}) => {
   const navigate = useNavigate();
   const handleEdit = (e)=>{
   navigate(`/myBlogs/${id}`)
   }

   const deleteRequest = async  () =>{
     const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err=>console.log(err));
     const  data =  res.data;
     return data;

   }
   const handlDelete = () => {
   deleteRequest()
    .then(() => navigate("/blogs"));
  //  .then(()=>navigate("/")
  //  .then(()=>navigate("/blogs")));
  ///problem
   }
  
   //console.log(title,isUser);
    return (
        <div>
             <Card sx={{ width: "40%"  , margin:'auto', mt:2 ,padding:2 ,boxShadow:"6px 6px 12px #ccc" , ":hover:":{boxShadow:"12px 12px 24px #ccc"}
            //  hover dont work here why?
            }}>

            {isUser &&  (
              <Box display='flex'>
                <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><ModeEditOutlineIcon color='warning'/></IconButton>
                <IconButton color='error' onClick={handlDelete}><DeleteForeverIcon/></IconButton>
              </Box>
            )}  
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
            {userName.charAt(0)} 
          </Avatar>
        }
      
        title={title}
     //   subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
      //  height="194"
        image={imageURL}
       alt="Paella dish"
      />
     
      
      <CardContent>
      <hr/>
     <br></br>
        <Typography variant="body2" color="text.secondary">
       <b>{userName}</b> :
        {description}
        </Typography>
      </CardContent>
    
    </Card>
        </div>
    );
};

export default Blog;