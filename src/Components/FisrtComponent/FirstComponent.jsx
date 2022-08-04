import React, { Component } from 'react';
import styles from './FirstComponent.module.css';
import Header from '../../images/avataaars.svg';


class FisrtComponent extends Component {
    render() {
        return (
            <div id={styles.main} >
            <div className='container align-items-center py-5'  >
                <div className= 'text-center text-white '>
                    <img src={Header} className={styles.headerIMG} alt=""/>
                    <h1 className='my-5'>START REACT</h1>
                    <div className={`${styles.dividers} d-flex justify-content-center`}>
                        <div className={styles.customLine}></div>
                        <i className={`${styles.star} px-3 fa fa-star`} aria-hidden="true"></i>
                        <div className={styles.customLine}></div>
                    </div>
                    <p className='my-3' id={styles.text}>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
            </div>
        );
    }
}

export default FisrtComponent;