import DashboardIcon from '@mui/icons-material/Dashboard';
import Users from '@mui/icons-material/Person2Outlined';
import Medical from '@mui/icons-material/MedicalServicesOutlined';
import Hotels from '@mui/icons-material/LocationCityOutlined';
import Food from '@mui/icons-material/RestaurantOutlined';
import Administration from '@mui/icons-material/LanOutlined';
import Service from '@mui/icons-material/AccountTree';
import React, {Component} from 'react';


import './sidebar.css'
const Sidebar=() =>{
    return(
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'> Admin </span>
            </div>
            <hr/>
            <div className='mid'> 
            <p className='title'> Main</p>
            <ul>
                <li>
                    <DashboardIcon className='incon'/>
                    <span> Dashboard</span>
                </li>
                <li>
                    <Users className='incon'/>
                    <span> users </span>
                </li>
                <li>
                    <Service className='incon'/>
                    <span> services</span>
                </li>
                <li>
                    <Medical className='incon'/>
                    <span> medical </span>
                </li>
                <li>
                    <Hotels className='incon'/>
                    <span> Hotels </span>
                </li>
                <li>
                    <Food className='incon'/>
                    <span> Food </span>
                </li>
                <li>
                    <Administration className='incon'/>
                    <span> administration </span>
                </li>
            </ul>
            
            
            </div>
            <div className='bottom'>option</div>

        </div>



    )
}
export default Sidebar;