import Header from "./conponents/Header";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./conponents/Auth";
import Blogs from "./conponents/Blogs";
import UserBlogs from "./conponents/UserBlogs";
import BlogDetails from "./conponents/BlogDetails";
import AddBlog from "./conponents/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import HeaderTest from "./conponents/HeaderTest";
function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
 
  return ( <React.Fragment>
     <header>
     

       <HeaderTest>

     

       </HeaderTest>
     </header> 
     <main>
   

      </main> 
     
  </React.Fragment>);
}

export default App;
