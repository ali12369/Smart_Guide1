import React from "react";
import "../Styles/connexion.css";
import contact from "../images/contactus.jpg";
import { useEffect, useState } from "react";
// import Button from '../components/buttonall';
import Layout from "../layout/mainlayout";
import axios from "axios";

import { Link } from "react-router-dom";
const Contactus = (props) => {
  var initRec = {
    email: "",
    msg: "",
    firstName: "",
    lastName: "",
  };

  const [rec, setRec] = useState(initRec);
  const sendData = async () => {
    console.log(rec);
    let result = await axios.post(
      "http://localhost:5001/feedback/create_msg",
      rec
    );
    console.log(result);
  };

  return (
    <div>
      <div className="allInn">
        <div className="allIn">
          <div className="imgIn">
            <img src={contact} alt="error" id="cntactimg" />
          </div>
          <div className="formIn">
            <div className="see">
              <div className="titlIn"> Contact us</div>
              <div>
                <input
                  type="text"
                  placeholder="first name"
                  className="inpt"
                  onChange={(e) => {
                    setRec({ ...rec, firstName: e.target.value });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="last name"
                  className="inpt"
                  onChange={(e) => {
                    setRec({ ...rec, lastName: e.target.value });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="email"
                  className="inpt"
                  onChange={(e) => {
                    setRec({ ...rec, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <textarea
                  placeholder="type your message"
                  className="inptrec"
                  onChange={(e) => {
                    setRec({ ...rec, msg: e.target.value });
                  }}
                />
              </div>

              <div className="btns">
                <button className="btnsign" onClick={sendData}>
                  Send
                </button>
                <div>Reset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
