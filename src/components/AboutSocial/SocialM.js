import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import AboutSocial from './AboutSocial'

export default class Education extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Row className="social">
                        <AboutSocial iconClass="fab fa-facebook" link="https://www.facebook.com/katherine.he"/>
                        <AboutSocial iconClass="fab fa-github" link="https://github.com/kitkat0202"/>
                        <AboutSocial iconClass="fab fa-instagram" link="https://www.instagram.com/kitkat020290/"/>
                        <AboutSocial iconClass="fab fa-linkedin-in" link="https://www.linkedin.com/in/katherinehe2/"/>
                    </Row>
                </Col>
            </Row>
        );
    }
}
