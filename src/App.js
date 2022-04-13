import React, { useState,useEffect } from 'react';
import './App.css';
import VideoList from './components/video_list/VideoList';

function App() {
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDtxM0gI2XN7x_07Ll7iQrwdt2VT84_eOQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);


  return (
    <>
      <VideoList videos={videos}/>
    </>
  );
}

export default App;
