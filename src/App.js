import React, { Component } from 'react';
import './App.css';
import UrlForm from './UrlForm';
import VideoPlayer from './VideoPlayer';

const getYtVidId = (inputUrl) => {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (inputUrl.match(p)) ? RegExp.$1 : false;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { youTubeId: '', showError: false };
    }

    handleBack = () => {
        this.setState({ youTubeId: '', showError: false });
    }

    handleSubmit = (inputUrl) => {
        const idInUrl = getYtVidId(inputUrl);
        if (idInUrl) {
            this.setState({ youTubeId: idInUrl, showError: false });
        }
        else {
            this.setState({ youTubeId: '', showError: true });
        }
    }

    render() {
        const youTubeId = this.state.youTubeId;
        return (
            <div className="card text-center App">
                <div className="card-body">
                    <h1>React Video App</h1>
                    <h2>Screen {youTubeId? "2" : "1"}</h2>
                    {youTubeId
                        ? <VideoPlayer {...this.state} handleBack={this.handleBack} />
                        : <UrlForm onUrlSubmit={this.handleSubmit} showError={this.state.showError} />}
                </div>
            </div>
        );
    }
}

export default App;
