import Footerb from '../components/Footer';
import { useState, useEffect } from "react"
import Navb from '../components/Navbar';
import React from 'react';




const layout = (props) => {

    return (
        <>
            <Navb />
            {props.children}
            <Footerb />
        </>
    );
}

export default layout;