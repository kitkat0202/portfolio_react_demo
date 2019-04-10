import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import AboutCard from './AboutCard'

export default class Education extends Component {
    render() {
        return (
            <Row>
                <AboutCard 
                    title="University at Buffalo"
                    colwidth={6} 
                    year="May 2012" 
                    localtion="Buffalo, New York"
                    position="">
                    <p>Bachelor of Science in Business Administration</p>
                    <p>Concentration: Management Information Systems</p>
                    <p>GPA 3.2/4.0</p>
                </AboutCard>
                <AboutCard 
                    title="Columbia University"
                    colwidth={6} 
                    year="Dec 2018" 
                    localtion="New York, New York"
                    position="">
                    <p>Columbia Engineering Coding Boot Camp</p>
                    <p>Full-Stack Developer Course</p>
                    <p><span className="bold">Grade: </span>A</p>
                </AboutCard>
            </Row>
        );
    }
}
