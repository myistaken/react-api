import React from 'react';
import {useEffect,useState} from 'react';
import { getPosts,getPostDetails,newPost } from './services/post';

function App() {
const [title,setTitle]=useState("wait");
const [count,setCount]=useState(1);

function  nextPost(num){
  getPostDetails(num).then(res=>setTitle(res.title));
  newPost({body:"ben bir body"+num,title:"ben bir title"+num}).then(res=>{console.log(res);getPosts().then(res=>console.log(res));});
  
};

 useEffect(()=>{
  getPosts().then(res=>console.log(res));

 });
 const [color, setColor]=useState("blue");
  return (
    <>
    <h1 style={{color:color}}>{title}</h1>
    <button onClick={()=>{setColor(color === 'red'?'blue':'red'); nextPost(count); setCount(count+1)} }>Toggle</button>
    </>
  );
}



export default App;
