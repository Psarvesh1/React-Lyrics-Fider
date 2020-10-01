import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Lyrics extends Component {
    state = {
        track : {},
        lyrics : {}
    }
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            this.setState({lyrics: res.data.message.body.lyrics});

            return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        })
        .then( res =>{
            this.setState({track: res.data.message.body.track});
        })
        .catch(err => console.log(err));
    }
    render() {
        const { track, lyrics } = this.state;
        console.log(track)
        if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length ===0){
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )

        }else{
            return(
                <>
                <Link to = "/" className = "btn btn-dark btn-sm mb-4">Go Back</Link>
                <div className = "card">
                    <h5 className = "card-header">
                        {track.track_name} by <span className = "text-secondary">{track.artist_name}</span>
                    </h5>
                    <div className = "card-body">
                    {lyrics.lyrics_body.split("\n").map(lyric => {
                         return <p className="card-text">{lyric}</p>
                    })}
                    </div>
                </div>

                <ul className = "list-group mt-3 mb-4">
                    <li className = "list-group-item">
                        <strong> Album ID</strong> : {track.album_id}
                    </li>
                    <li className="list-group-item">
                    <strong>Song Genre</strong>:{' '}
                    {track.primary_genres.music_genre_list.length !== 0
                    ? track.primary_genres.music_genre_list[0].music_genre.music_genre_name: 'N/A'}
                    </li>
                    <li className = "list-group-item">
                        <strong>Explicit Words:</strong>{track.explicit === 0 ? ' No' : ' Yes'}
                    </li>
                    
                </ul>
                </>
            )
            
        }
    

}
}
export default Lyrics;