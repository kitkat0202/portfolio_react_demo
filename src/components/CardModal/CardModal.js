import React, { Component } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import './CardModal.css';

export default class CardModal extends Component {
    state = {
        complang: ""
    }

    render() {
        const { chosen, onHide } = this.props
        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {chosen.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img src={chosen.img_path === "" ? `https://via.placeholder.com/405x289` : chosen.img_path} alt={chosen.name}/>
                        </Col>
                        <Col>
                            <p className="modal-pinfo"><span className="bold">Description: </span>{chosen.description}</p>
                            <p className="modal-pinfo"><span className="bold">Computer Language: </span>{typeof chosen.tech === "object" ? chosen.tech.join(", ") : ""}</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button href={chosen.link} target="_blank" rel="noopener noreferrer">Site</Button>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}