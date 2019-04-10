import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import AboutCard from './AboutCard'

export default class Work extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} lg={6}>
                    <Row>
                        <AboutCard 
                            title="FlightSafety International" 
                            colwidth={12} 
                            year="July 2012 to Sept 2018" 
                            localtion="Flushing, New York"
                            position="Condition Contract Specialist">
                            <ul className="sub-list">
                                <li>Point of contact for special condition pricing, issues with SAP CRM web interface system, special maintenance training invoicing, validity date adjustments and retail rate adjustments</li>
                                <li>Calculated, managed and corrected the retail rate database to assure that rates fall in line with the formula across the different pricing plans</li>
                                <li>Researched and controlled customer discount database to align with customer signed agreements and ensure incorrect rates are removed</li>
                                <li>Worked with SAP Logon 720 and SAP CRM for pricing approval requests, pricing entrees, sales orders, invoices, financial debits, debit memos, contracts and special pricing</li>
                            </ul>
                        </AboutCard>
                        <AboutCard 
                            title="Photography Island" 
                            colwidth={12} 
                            year="Summer of 2009 and 2010" 
                            localtion="Port Washington, New York"
                            position="Production Staff">
                            <ul className="sub-list">
                                <li>Created demos portfolios for each client school </li>
                                <li>Worked with a program called CORE to sort and organize school graduation photos</li>
                                <li>Collected and logged contact information of student customers in to company database</li>
                            </ul>
                        </AboutCard>
                    </Row>
                </Col>
                <AboutCard 
                    title="School of Management Advisory Department" 
                    colwidth={6} 
                    year="August 2009 to May 2012" 
                    localtion="Buffalo, New York "
                    position="Office Administrator Assistant">
                    <ul className="sub-list">
                        <li>Managed office traffic and assisted the students with answering simple walk-in questions </li>
                        <li>Arrange an appointment with the advisor and prepared student portfolios for the meetings</li>
                        <li>Emailed follow up survey to students after their session with their advisor</li>
                        <li>Answered incoming calls and redirected them to proper authority</li>
                        <li>Input student information into Access database and Excel spreadsheets</li>
                    </ul>
                </AboutCard>
            </Row>
        );
    }
}
