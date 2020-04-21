import React, {Component} from 'react';
import {loadUser} from "../reducers/userReducer";
import store from "../store";
import axios from 'axios'

var SpotifyWebApi = require ('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi({
    clientId: '5b84921b785e49df8c29cbe5b86bd1c1',
    clientSecret: '5f4b5ceae55347169d391770b75b62d0',
    redirectUri: 'http://localhost:5000/callback'
})

const loadingUser = {
    loaded: false
}


export default class Profile extends Component {


    constructor(){
        super();
        this.state = store.getState;


    }

    componentDidMount() {
        store.dispatch(loadUser())
        this.unsubscribe = store.subscribe (() => this.setState(store.getState()))

        loadingUser.loaded = true;




    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {

        if(loadingUser.loaded){

            const jsonData = {
                name: "Test Playlist",
                public: true,
            }

            axios({
                method: 'post',
                url: `https://api.spotify.com/v1/users/${this.state.userReducer.SpotifyId}/playlists`,
                data: jsonData,
                dataType: 'json',
                headers: {
                    'Authorization': 'Bearer ' + "BQALggr7Xfc3hRp55pjpfixH3bzQ1rHvUJA9nJovj7ZAdiDqcArBXItJfw7xfcjSHQb_f3fkcy-I-XRTV8iHeU1OlXisJspOOK6N24cgdyCmV1e9EXG1vd6X-zVK6r0ei2NzJCMvA_Zzm8lzTBLdlmsrxfBuIrji",
                    'Content-Type': 'application/json'
                }})
                .then(res => {
                    const data = {
                        name: res.data.name,
                        externalUrl: res.data.external_urls.spotify,
                        playlistId: res.data.id,
                        userId: this.state.userReducer.id,
                    }

                    console.log(res)
                })
        }

        return(
            <div>
                <h1>{loadingUser.loaded? this.state.userReducer.name: "Didn't work"}</h1>
            </div>
        )
    }
}