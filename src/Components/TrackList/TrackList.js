import React from 'react';

import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
                {
                    this.props.tracks.map( (track) => {
                        return <Track key={track.id} track={track}/>;
                    })
                }
                
            </div>
        );
    }
}

export default TrackList;