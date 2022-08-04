import React, { Component } from 'react';
import Styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <>
            <div className={Styles.Footer}>
            <div className='container text-center'>
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0 mr-auto">
                        <h4 className='text-uppercase mb-4'>Location</h4>
                        <p className='mb-0'>2215 John Daniel Drive<br/>Clark, MO 65243</p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className='text-uppercase mb-4'>Around the web</h4>
                        <a className={`${Styles.btnIcon} btn btn-outline-light btn-social mx-2`}>
                            <i className='fa-brands fa-facebook'></i>
                        </a>
                        <a className={`${Styles.btnIcon} btn btn-outline-light btn-social mx-2`}>
                            <i className='fa-brands fa-twitter'></i>
                        </a>
                        <a className={`${Styles.btnIcon} btn btn-outline-light btn-social mx-2`}>
                            <i className='fa-brands fa-linkedin'></i>
                        </a>
                        <a className={`${Styles.btnIcon} btn btn-outline-light btn-social mx-2`}>
                            <i className='fa-brands fa-dribbble'></i>
                        </a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className='text-uppercase mb-4'>ABOUT FREELANCER</h4>
                        <p className='mb-0'>Freelance is a free to use, MIT <br/>licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            </div>
            <div className={` ${Styles.copyRight}`}>
            <div className={`container`}>
            <div className="row">
                <div className=" text-center text-white">
                    <small>Copyright © kholoud 2022</small>
                </div>
            </div>
            </div>
            </div>
            </>
        );
    }
}

export default Footer;