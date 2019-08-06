import React from 'react'
import {Link} from 'react-router-dom'
const Track = (props) => {
    const {track} = props
    return (
        <div className = "col-md-6">
            <div className = "card mb-4 shadow-sm ">
                <div className = "card-body">
                    <h5>{track.artist_name}</h5>
                    <p className = "card-text">
                        <strong><i className="fa fa-play-circle"></i> Track</strong>: {track.track_name}
                        <br />
                        <strong><i className="fa fa-compact-disc"></i> Album</strong>: {track.album_name
                        }
                    </p>
                    <Link to ={`lyrics/track/${track.track_id}`} className = "btn btn-outline-secondary btn-block">
                        <i className = "fa fa-eye"> View Lyrics</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Track;
