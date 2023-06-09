import React from 'react';
import '../Styles/connexion.css'
// import login from'../photos/login.svg'
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Layout  from '../layout/mainlayout';
import axios from 'axios'
import sign from '../images/img4.png'
import { Link, useNavigate } from 'react-router-dom';
import Checkbox  from '../components/Checkbox';
const Connexion = (props) => {


    var initUser = {
        email: "",
        password: "",
    };

    const navigate = useNavigate()
    const [user, setUser] = useState(initUser);
    const [errors, setError] = useState("")
    const sendData = async () => {
        await axios.post("http://localhost:5000/user/signin/", user).then(result => {
            localStorage.setItem("token", result.data.token)

            navigate("/account")
        }).catch(err => {
            setError(err.response.data.msg)
        })
    };

    // data = axios.get("http://localhost:5000/user/getdata",user)







    return (
        <div>
        
                <div className='allInn'>
                    <div className='allIn'>
                        <div className='imgIn'>
                            <img src={sign} alt="error" id='signimg' />

                        </div>
                        <div className="formIn">
                            <div className='see'>
                                <div className='titlIn'> connectez-vous à votre compte </div>
                                {errors && <h1 className='errorstylr'>{errors}</h1>}
                                <div><input type="text" placeholder="ex@gmail.com" className='inpt' onChange={(e) => { setUser({ ...user, email: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="password" className='inpt' onChange={(e) => { setUser({ ...user, password: e.target.value }); }} /></div>
                                <div  className="forgot">
                                <a href="../SignUp">Forgot password?</a>
                                </div>
                                <Checkbox>
                                    <div>
                                        <input type="checkbox" id="remember_me" />
                                        <label htmlFor="remember_me">Remember me</label>
                                    </div>
                                </Checkbox>
                                <div className='btns'>
                                    <button className='btnsign' onClick={sendData}> <div> <Link to=''>connexion</Link></div></button>
                                    <button className='btnsignup'> <div><Link to="/signup">sign up</Link></div></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>

    )
}

export default Connexion;