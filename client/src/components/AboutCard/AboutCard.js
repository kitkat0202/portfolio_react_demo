import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './AboutCard.css';

export default class AboutCard extends Component {
    state = {
        isActive: "about-card about-show"
    }

    render() {
        let { children, title, colwidth, year, position, localtion} = this.props
        let { isActive } = this.state
        
        let handleClick = () => {
            this.setState(isActive === "about-card about-show" ? {isActive: "about-card about-hide"} : {isActive: "about-card about-show"})
        }

        return (
            <Col xs={12} lg={colwidth}>
                <div className={isActive}>
                    <h5 className="text-center " onClick={handleClick}>{title} <span className={isActive === "about-card about-show" ? "small-text" : "small-text disappear"}><br />{title === "Columbia University" ? "The Fu Foundation School of Engineering and Applied Science" : title === "University at Buffalo" ? "School of Management" : ""}</span></h5>
                    <div className="about-content">
                        <p><span className="bold">Year: </span>{year}</p>
                        {position === "" ? "" : <p><span className="bold">Position: </span>{position}</p>}
                        <p><span className="bold">Location: </span>{localtion}</p>
                        {children}
                    </div>
                </div>
            </Col>
        );
    }
}
