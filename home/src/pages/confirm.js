
import React from 'react';
import '../Styles/confirm.css' ; 
// import login from'../photos/login.png'
import { Link } from 'react-router-dom';
import Layout  from '../layout/mainlayout';
import { useState, useEffect } from 'react';

// import axios from 'axios'
const SignUp = (props) => {


    var initUser = {
    
        country: "",
        city: "",
        zipCode: "",
        phoneNumber :"" , 
        birthDate:"" , 
    };


    const [user, setUser] = useState(initUser);
    const sendData = async () => {
        // let result = await axios.post("http://localhost:5000/user/signup/",user);
        // console.log(result);
    };



    
    return (
        <div>
        

                <div className='allInn'>
                    <div className='allIn'>
                        {/* <div className='imgIn'>
                            <img src={sign} alt="error" id='signimg' />

                        </div> */}
                        <div className="formIn">
                            <div className='see'>

                                <div className='titlIn'> Personal Information </div>
                                <div><input type="text" placeholder="country" className='inpt' onChange={(e) => { setUser({ ...user, country: e.target.value }); }} /></div>
                            
                                <div><input type="text" placeholder="city" className='inpt' onChange={(e) => { setUser({ ...user, city: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="phone number" className='inpt' onChange={(e) => { setUser({ ...user, phoneNumber : e.target.value }); }} /></div>
                                <div><input type="text" placeholder="birthDate" className='inpt' onChange={(e) => { setUser({ ...user, birthDate : e.target.value }); }} /></div>
                                <div className='btns'>
                                    <button className='btnsign' onClick={sendData}>confirm </button>
                                    <button className='cnclsign'> <Link to='/connexion'> Back</Link> </button>    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div >
    );
};



export default SignUp;