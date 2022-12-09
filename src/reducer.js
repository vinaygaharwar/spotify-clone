export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:"BQBkAK0RTaQUkl36eRQqjE07RaBNHg32KDzwwQpC3BitrTwg3qiQBbmS8ucXxKSsG5c9M9hBIQGj_6BEZ0H7w1PA0J2GNno3mWoCZXt7CS8tegrUOZii9fZjRuK80Gn3p_Sb28IqKorOvr1TGfZ6UEQP13nZZqeejMgLxeCAC5RFuqOBGp1I6bee_PGGpR9MiRx0mAUtzXdA19Gc"
};
const reducer=(state,action)=>{
    console.log("action..",action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
        case 'SET_CURRENT_TRACK':
            return{
                ...state,
                current_track:action.current_track
            }
            default:
                return state;
    }
}
export default reducer;