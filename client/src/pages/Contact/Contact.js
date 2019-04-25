import React, { Component } from 'react';
import ContactBox from '../../components/ContactBox'
import API from '../../utils/API'
import './Contact.css';

export default class Contact extends Component {
    state = {
        sendName: "",
        sendContact: "",
        sendMessage: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    
    handleFormSubmit = event => {
        const { sendContact, sendMessage, sendName } = this.state
        event.preventDefault()
        console.log( `${sendContact}, ${sendMessage}, ${sendName}`);
        API.saveMessage(this.state)
    }

    render() {
        return (
        <React.Fragment>
            <ContactBox title="Telephone">
                <p className="contact-p">Cell: 347-679-1939</p>
            </ContactBox>

            <ContactBox title="Email">
                <p className="contact-p">he.katherine321@gmail.com</p>
            </ContactBox>

            <ContactBox title="Message Box">
            <h5 className="text-center">(Coming Soon)</h5>
                <form className="contact-form">
                    <input
                        name="sendName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                    />

                    <input
                        name="sendContact"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Contact"
                        autoComplete="off"
                    />

                    <textarea
                        name="sendMessage"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Message..."
                        autoComplete="off"
                        className="scrollbar scrollbar-message"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </ContactBox>
        </React.Fragment>
        );
    }
}
