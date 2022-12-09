export const authEndpoint="https://accounts.spotify.com/authorize"
const redirectUri="http://localhost:3000/"
const clientId="917bf7c8c72a44b99b635bee79079008"
const scopes=[
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read"
]
export const loginUrl=`${authEndpoint}
?client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;

export const getTokenFromUrl=()=>{
    
    // console.log("logging at 1..",window.location.hash
    //     .substring(1).split("&"));
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item)=>{
        // console.log("value of item",item);
        var parts=item.split("=");
        // console.log("value of parts",parts);
        // console.log("decode Urti..",decodeURIComponent(parts[1]));
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{})
}