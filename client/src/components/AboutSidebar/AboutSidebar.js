import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './AboutSidebar.css';

export default class AboutSidebar extends Component {
    render() {
        const { choice, whatPage } =  this.props
        const inActive = "about-menup"
        const active = "about-menup about-isActive"

        const getPage = e => {
            whatPage(e.target.id)
        }

        return (
            <Row className="fixed-box">
                <Col xs={6} md={12}>
                    <p className={choice === "Education" ? active : inActive} onClick={getPage} id="Education">Education</p>
                </Col>
                <Col xs={6} md={12}>
                    <p className={choice === "Work-Experience" ? active : inActive} onClick={getPage} id="Work-Experience">Work Experience</p>
                </Col>
                <hr className="about-hr" />
                <Col xs={6} md={12}>
                    <p className={choice === "Leadership-Experience" ? active : inActive} onClick={getPage} id="Leadership-Experience">Leadership Experience</p>
                </Col>
                <Col xs={6} md={12}>
                    <p className={choice === "Social-Media" ? active : inActive} onClick={getPage} id="Social-Media">Social Media</p>
                </Col>
            </Row>
        );
    }
}
