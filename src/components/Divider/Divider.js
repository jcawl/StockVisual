import React from 'react';
import './Divider.scss'

export default class Divider extends React.Component{

    render() {
        return(
            <div className="divider-container">
                <div className="first-line"> </div>
                <div className="title">{this.props.title}</div>
                <div className="second-line"></div>
            </div>
        )
    }
}