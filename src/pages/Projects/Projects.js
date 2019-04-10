import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import data from '../../data.json';
import Card from '../../components/Card'
import CardModal from '../../components/CardModal'
import './Projects.css';

export default class Projects extends Component {
    state = {
        modalShow: false,
        info: ""
    };
    
    render() {
        // open modal
        let modalOpen = () => this.setState({ modalShow: true })

        // close modal
        let modalClose = () => this.setState({ modalShow: false })

        // add info to modal
        const pullInfo = e => {
            this.setState({info: e }, () => console.log(this.state.info))
        }
        
        // renders the cards
        const renderCards = data.map((card, i) => {
            return (
                <Card key={i} info={card} infoFunction={pullInfo} onOpen={modalOpen}/>
            )
        })
        return (
            <React.Fragment>
                <ButtonToolbar>
                    <CardModal show={this.state.modalShow} onHide={modalClose} chosen={this.state.info}/>
                </ButtonToolbar>
                <div className="row">
                    {renderCards}
                </div>
            </React.Fragment>
        )
    }
}
