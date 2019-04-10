import React, { Component, Fragment } from 'react';
import AboutSidebar from '../../components/AboutSidebar'
import Education from '../../components/AboutCard/Education'
import Work from '../../components/AboutCard/Work'
import Leadership from '../../components/AboutCard/Leadership'
import SocialM from '../../components/AboutSocial/SocialM'
import './About.css';

export default class About extends Component {
    state = {
        page: "Education"
    }
    render() {
        const { page } = this.state

        // on click for navbar
        const pageChange = e => {
            this.setState({page: e })
        }

        return (
        <Fragment>
            <AboutSidebar choice={page} whatPage={pageChange}/>
            <div className="about-container">
                {page === "Education" ? <Education /> : page === "Work-Experience" ? <Work /> : page === "Leadership-Experience" ? <Leadership /> : <SocialM />}
            </div>
        </Fragment>
        );
    }
}
