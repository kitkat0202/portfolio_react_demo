import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    render() {
        let { info, infoFunction, onOpen } = this.props
        
        const getInfo = () => {
            infoFunction(info)
            onOpen()
        }
        return (
            <div className="card-box col-sm-12 col-md-6 col-lg-4" onClick={getInfo}>
                <div className="project-card">
                    <img src={info.img_path === "" ? `https://via.placeholder.com/405x289` : info.img_path} alt={info.name} />
                    <div className="card-text">
                        <h5 className="card-title">{info.name} <br/><span className="small-text">{info.note}</span></h5>
                    </div>
                </div>
            </div>
        );
    }
}
