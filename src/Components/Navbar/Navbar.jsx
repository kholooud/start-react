import React, { Component } from 'react';
import styles from './Navbar.module.css';
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';



class Navbar extends Component {
    render() {
        return (
            <>
                        <nav id={styles.navBar} className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top">
                            <div className="container">
                                <Link to='' className="navbar-brand text-white" id={styles.logo}>Start React</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item mx-0 mx-lg-1 ">
                                        <Link to='#Parent' className="nav-link active text-white py-3 px-0 px-lg-3">Portfolio</Link>
                                        </li>
                                        <li className="nav-item mx-0 mx-lg-1">
                                        <Link to='#About' className="nav-link text-white py-3 px-0 px-lg-3">About</Link>
                                        </li>
                                        <li className="nav-item mx-0 mx-lg-1">
                                        <Link to='#Contact' className="nav-link text-white py-3 px-0 px-lg-3">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
               
                    
              
            </>
        );
    }
}

export default Navbar;