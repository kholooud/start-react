import React, { Component } from 'react';
import styles from './About.module.css';
import {Outlet} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className={styles.bg} id="About">
            <div className='container text-center' id={styles.About}  >
                <div className='row px-5 my-5' >
                    <h1 className='text-white my-5 text-uppercase'>About</h1>
                    <div className={`${styles.dividers} d-flex justify-content-center`}>
                        <div className={styles.customLine}></div>
                        <i className={`${styles.star} px-3 fa fa-star`} aria-hidden="true"></i>
                        <div className={styles.customLine}></div>
                    </div>
                    <div className="row my-5">
                    <div className="col-lg-6 ml-auto" id={styles.font}>
                        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-lg-6 mr-auto" id={styles.font}>
                        <p className='text-white'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                    </div>
                    </div>
            </div>
            <Outlet/>
            </div>
            
        );
    }
}

export default About;