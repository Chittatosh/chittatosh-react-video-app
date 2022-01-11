import React, { Component } from 'react';
import Button from './Button';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <iframe width="852" height="480" src={"https://www.youtube.com/embed/" + this.props.youTubeId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Button {...this.props} />
            </div>
        );
    }
}

export default VideoPlayer;
