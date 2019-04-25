import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="outer-container">
                    <div className="container">
                        <Router>
                            <Switch>
                                <Route exact path="/" render={() => <Projects link="projects" /> } />
                                <Route path="/Projects" render={() => <Projects link="projects" /> } />
                                <Route path="/About" render={() => <About link="about" /> } />
                                <Route path="/Contact" render={() => <Contact link="contact" /> } />
                                <Route render={() => <Projects link="projects" /> } />
                            </Switch>
                        </Router>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
