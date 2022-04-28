import { useEffect, useState } from "react";
import React from "react"
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import { url } from "../../config/config";
import {useContext} from 'react';
import { Context } from "../../context/Context";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const {user,dispatch} = useContext(Context);
  useEffect(() => {
    
    const fetchPosts = async () => {
      const res = await axios.get(`${url}/posts` + search);
      setPosts(res.data);
    };
    const fetchUser = async () => {
      const res = await axios.get(`${url}/users/` + user.data._id);
        //console.log(res.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: res });
    }
    fetchPosts();
    if(user && user.data) fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        {posts ? <Posts posts={posts} /> : <></>}
        {posts ? <Sidebar data={posts}/> : <></>}
      </div>
    </>
  );
}
