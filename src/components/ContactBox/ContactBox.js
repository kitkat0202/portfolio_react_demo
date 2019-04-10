import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './ContactBox.css';

export default class ContactBox extends Component {
    render() {
        let { children, title } = this.props
        
        return (
            <div className="contact-box">
                <h3>{title}</h3>
                {children}
            </div>
        );
    }
}
