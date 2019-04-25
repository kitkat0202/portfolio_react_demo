import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

export default class MyNavbar extends Component {
    state = {
        lastScrollY: 0,
        scrollClass: ''
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const currentScrollY = window.scrollY;
    
        // navbar color effect
        if (window.scrollY > 10) {
          this.setState({ scrollClass: 'scroll-effect' });
        } else {
          this.setState({ scrollClass: '' });
        }
    
        this.setState({ lastScrollY: currentScrollY });
      };

    render() {
        const { scrollClass } = this.state
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className={scrollClass}>
                <Navbar.Brand href="/projects">Katherine He</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/projects" active={(window.location.href !== 'http://localhost:3000/about' && window.location.href !== 'http://localhost:3000/contact') ? true : false} >Projects</Nav.Link>
                        <Nav.Link href="/about" active={window.location.href === 'http://localhost:3000/about' ? true : false} >About</Nav.Link>
                        <Nav.Link href="/contact" active={window.location.href === 'http://localhost:3000/contact' ? true : false} >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}