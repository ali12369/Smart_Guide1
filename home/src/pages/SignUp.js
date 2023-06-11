import React from 'react';

import '../Styles/SignUp.css'
// import login from'../photos/login.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sign from '../images/aboutus2.png'
import axios from 'axios'
const SignUp = (props) => {


    var initUser = {
        fullname:"" , 
        email: "",
        password: "",
        confirmPassword: "",
    };


    const [user, setUser] = useState(initUser);
    const sendData = async () => {
        let result = await axios.post("http://localhost:5001/user/create_user/",user);
        console.log(result);
    };



    
    return (
        <div>
        

                <div className='allInn'>
                    <div className='allIn'>
                        <div className='imgIn'>
                            <img src={sign} alt="error" id='signimg' />

                        </div>
                        <div className="formIn">
                            <div className='see'>

                                <div className='titlIn'> sign up</div>
                                <div><input type="text" placeholder="fullname" className='inpt' onChange={(e) => { setUser({ ...user, fullname: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="mail : ex@gmail.com" className='inpt' onChange={(e) => { setUser({ ...user, email: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="password" className='inpt' onChange={(e) => { setUser({ ...user, password: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="confirm password" className='inpt' onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }); }} /></div>
                                <div className='btns'><button className='btnsign' onClick={sendData}><div> <Link to='/confirm'>NEXT </Link></div></button>
                                    <button className='cnclsign'><div> <Link to='/home'>cancel</Link></div></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div >
    );
};



export default SignUp;