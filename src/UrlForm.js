import React, { Component } from 'react';
import Button from './Button';

class UrlForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputUrl: ''};
    }

    handleChange = (event) => {
        this.setState({inputUrl: event.target.value.trim()});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onUrlSubmit(this.state.inputUrl);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label h5">YouTube URL:</label>
                    <input type="text" value={this.state.inputUrl} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <Button {...this.state}/>
                {this.props.showError && <div className="text-danger">Please enter a valid YouTube URL</div>}
            </form>
        );
    }
}

export default UrlForm;
