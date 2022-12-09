import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import {loginUrl,getTokenFromUrl} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify= new SpotifyWebApi();
function App() {
  // const [token,setToken]=useState(null);
  const [{user,token},dispatch]=useDataLayerValue();
    useEffect(()=>{
        const hash=getTokenFromUrl();
        window.location.hash="";
        const _token=hash.access_token;
        // console.log("got token:", _token);
        if(_token){
            // setToken(_token)
            dispatch({
              type:"SET_TOKEN",
              token:_token
            })
            spotify.setAccessToken(_token);
            spotify.getMe().then((user)=>{
              // console.log("my details: ",user);
              dispatch({
                type:'SET_USER',
                user:user
              })
            })
            spotify.getUserPlaylists().then((playlists)=>{
              dispatch({
                type:"SET_PLAYLISTS",
                playlists:playlists
              })
            })
            spotify.getPlaylist('37i9dQZEVXcSxMAKHE4cjZ').then((res)=>{
              dispatch({
                type:"SET_DISCOVER_WEEKLY",
                discover_weekly:res
              })
            })
            spotify.getMyCurrentPlayingTrack().then(res=>{
              console.log("current Track :",res.item.album.images[0].url)
              dispatch({
                type:"SET_CURRENT_TRACK",
                current_track:res
              })
            })
        }
    },[])
    // console.log("my details: ",user)
    // console.log("my token: ",token)
  return (
    <div className="app">
      {token?<Player spotify={spotify}/>:
      <Login/>}
     
    </div>
  );
}

export default App;
