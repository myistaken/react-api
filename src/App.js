import React from 'react';
import {useEffect,useState} from 'react';
import { getPosts,getPostDetails,newPost } from './services/post';

function App() {

 useEffect(()=>{
  getPosts().then(res=>console.log(res));
  getPostDetails(2).then(res=>console.log(res));
  newPost({userId:3,title:'test',body:'test'}).then(res=>console.log(res));
 });
  return (
    <></>
  );
}

export default App;
