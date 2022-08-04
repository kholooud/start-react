import React , {useState}  from 'react';
import styles from './Form.module.css';
import joi, { func } from 'joi';

export default function Form() {

    let[user, setUser] = useState({
        first_name:'',
        email_address:'',
        phone_number:"",
        message:'',
    })
    let [errorsList , setErrorsList] = useState([]);
  
    function submitFormData(e) {
        e.preventDefault();
        let validateResponse = validateForm();
        setErrorsList(validateResponse.error.details) ;
        console.log(errorsList)
    }
    function validateForm(){
        const schema = joi.object({
            first_name:joi.string().alphanum().required().min(3).max(10),
            email_address:joi.string().required().email({tlds:{allow: false}}),
            phone_number:joi.number().required(),
            message:joi.string(),
        });
        return schema.validate(user,{abortEarly:false});
    }
    function getFormValue(e){
        let myUser = {...user} ;
        myUser[e.target.name]= e.target.value;
        setUser(myUser);
    }
    
        return (
            <div className="container ">
                <div className="row my-5" id='Contact'>
                    <div className="col-lg-8 mx-auto">
                        <h1 className='my-2 text-center'>CONTACT ME</h1>
                        <div className={`${styles.dividers} d-flex justify-content-center my-5`}>
                                <div className={styles.customLine}></div>
                                <i class={`${styles.star} px-3 fa fa-star`} aria-hidden="true"></i>
                                <div className={styles.customLine}></div>
                        </div>
                        
                        {errorsList.map((error , index)=><div key={index} className="alert alert-danger">{error.message}</div>)}
                        <form onSubmit={submitFormData}>
                            <div className={`${styles.form} form-group controls mb-0 pb-2 `}>
                                <input onChange={getFormValue} type="text" name='first_name' className="form-control" id="Name" placeholder="Name" />
                            </div>
                            <div className={`${styles.form} form-group controls mb-0 pb-2 `}>
                                <input onChange={getFormValue} type="email" name='email_address' className="form-control" id="email" placeholder="Email Address" />
                            </div>
                            <div className={`${styles.form} form-group controls mb-0 pb-2 `}>
                                <input onChange={getFormValue} type="tel" name='phone_number' className="form-control" id="phone" placeholder="Phone Number" />
                            </div>
                            <div className={`${styles.form} form-group controls mb-0 pb-2 `}>
                                <textarea onChange={getFormValue} className="form-control" name='message' id="message" placeholder="Message" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className={`${styles.btnXl} btn btn-primary`}>send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )

        }


