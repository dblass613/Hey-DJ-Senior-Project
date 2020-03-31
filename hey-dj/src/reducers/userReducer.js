import axios from 'axios';

const LOAD = 'LOAD';

//Action creater
const load = info => ({type: LOAD,info})

//Thunk Middleware
export const loadUser = () => dispatch =>{
    axios.get('/api/auth/me').then((res) =>{

        console.log('USER ID: ', res.data.passport.user)

        axios.get(`/api/users/${res.data.passport.user}`)
            .then(user =>{
                console.log('IN LOAD: ', user.data)
                dispatch(load({
                    id: user.data._id,
                    name: user.data.name,
                    SpotifyId: user.data.SpotifyId,
                    accessToken: user.data.accessToken,
                    proPic: user.data.proPic
                }))
            })


    })
}

export default function reducer (currentUser = {}, action){
    switch(action.type){
        case LOAD:
            return action.info;
        default:
            return currentUser;
    }
}

