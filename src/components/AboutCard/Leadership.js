import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import AboutCard from './AboutCard'

export default class Education extends Component {
    render() {
        return (
            <Row>
                <AboutCard 
                    title="Asian American Student Union" 
                    colwidth={6} 
                    year="August 2010 to July 2012" 
                    localtion="Buffalo, New York "
                    position="Treasurer & Senior Advisor">
                    <ul className="sub-list">
                        <li>Prepare the club’s budgets, ensure that club activities stayed adhere to the budget and managed new fundraising event to increase club budget for future club leaders</li>
                        <li>Organized workshops to educate other about the Asian American community</li>
                        <li>Prepared paperwork for room reservation, purchase orders, line transfers, merchandise sales, ticketing events, performance preparations, etc.</li>
                        <li>Trained the new executive board and offered solutions when problems arise</li>
                    </ul>
                </AboutCard>
            </Row>
        );
    }
}
