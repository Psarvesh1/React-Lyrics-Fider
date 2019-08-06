import React , {Component} from 'react';
import {Consumer} from '../../Context'
import Track from './Track';
class Tracks extends Component{
    render(){
        return(
            <Consumer>
                {value =>{
                    const { track_list, heading } = value;
                    if(track_list === undefined || track_list.length === 0){
                        return (
                        <>
                            <div class ="d-flex justify-content-center">
                                <div class="spinner-grow text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-grow text-secondary" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-grow text-success" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-grow text-danger" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-grow text-warning" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-grow text-info" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-grow text-light" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </>
                      )
                    }
                    else{
                        return (
                            <>
                            <h3 className = "text-center mb-4">{heading}</h3>
                            <div className = "row bg-light">
                                {track_list.map(item => (
                                    <Track key={item.track.track_id} track = {item.track}/>
                                ))}
                            </div>
                            </>
                        )
                    }
                }}
            </Consumer>
        )
    }
}
export default Tracks;