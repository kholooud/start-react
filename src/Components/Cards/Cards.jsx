import React from 'react';
import styles from './Cards.module.css';
import HouseImg from '../../images/cabin.png';
import CakeImg from '../../images/cake.png';
import CircusImg from '../../images/circus.png';
import GameImg from '../../images/game.png';
import SafeImg from '../../images/safe.png';
import SubmarineImg from '../../images/submarine.png';
// import Imgs from '../Imgs/Imgs.jsx';

export default function Cards(){
    let myState ={
        Cards:[
            {id:1, Img : HouseImg },
            {id:2, Img : CakeImg},
            {id:3, Img : CircusImg},
            {id:4, Img : GameImg},
            {id:5, Img : SafeImg},
            {id:6, Img : SubmarineImg},
                    ],
    }
    

    function Open(e){
        var Img = document.getElementById('img');
        var ImgSrc = e.target.getAttribute('src');
        let lightboxContainer =document.getElementById('lightboxContainer');
        lightboxContainer.classList.replace('d-none' , 'd-flex');
        var Imgs = myState.Cards;
        Imgs.map((Item , Index)=>
        Img.src=ImgSrc 
        );
    }
    function close(){
        let lightboxContainer =document.getElementById('lightboxContainer');
        lightboxContainer.classList.replace('d-flex' ,'d-none');
    }

        let Cards = myState.Cards;

      

    return(
        <>
         <div className="container text-center" id='Parent'>
                <div className='row my-5'>
                    <h1 >PORTFOLIO</h1>
                    <div className={`${styles.dividers} d-flex justify-content-center py-5`}>
                        <div className={styles.customLine}></div>
                        <i class={`${styles.star} px-3 fa fa-star`} aria-hidden="true"></i>
                        <div className={styles.customLine}></div>
                    </div>
                </div>
                <div className="row">
                   {Cards.map((Card , index)=>
                        <div className={`container col-lg-4 text-center my-3 position-relative text-white`}>
                            <img onClick={(e)=>Open(e)} key={myState.Cards.id} className={styles.img} src={Card.Img} alt=''></img>
                        </div>
                            )}
                    <div className={`${styles.lightboxContainer}  d-none justify-content-center align-items-center`} id="lightboxContainer">
                    <div className={`${styles.lightboxItem} container bg-white m-auto position-relative py-4 my-4 `}>
                        <div className="text-center justify-content-between">
                            <h1>title</h1>
                            <div className={`${styles.dividers} d-flex justify-content-center py-4`}>
                                <div className={styles.customLine}></div>
                                <i class={`${styles.star} px-3 fa fa-star`} aria-hidden="true"></i>
                                <div className={styles.customLine}></div>
                            </div>
                            <i id={styles.close} onClick={()=>close()} className=" fas fa-times position-absolute m-3 "></i>
                                <img className={`${styles.lightimg} img-fluid`} id="img" src='' alt=''></img>  
                            <p>test</p>
                            <button onClick={()=>close()} className={`${styles.button} btn btn-primary `}><i className='fas fa-times'></i>Close Window</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            
        </>
    )
}
