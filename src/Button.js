import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.youTubeId
            ? <button type="button" className="btn btn-success btn-lg text-left" onClick={this.props.handleBack}><i className="bi bi-arrow-return-left"></i> Back </button>
            : <button type="submit" className="btn btn-primary btn-lg"><i className="bi bi-arrow-return-right"></i> Submit </button>
        );
    }
}

export default Button;
