import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid padding">
                    <p><strong>Resume:</strong> <a href="He_Katherine_Resume_2019.pdf" target="_blank" className="footer-link"> He_Katherine_Resume.pdf</a></p>
                    <div className="text-center">
                        <p className="small-text">&copy; Katherine He</p>
                    </div>
                </div>
            </div>
        )
    }
}