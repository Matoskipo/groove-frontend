import React from 'react'
import LeftSide from './LeftSide'
import  profileImage from '../assets/images/matt.jpg'
import {DashboardStyle} from '../styles/Dashboard.styles'
import RightSide from './RightSide'
import Home from '../assets/icons/🦆 Home.svg'
import Library from './Library'
import DiscoverIcon from '../assets/icons/discover.svg'
// import {topLinks} from '../assets/links/Links'


const Dashboard = () => {
  return (
    <DashboardStyle>
        <div className='row'>
            <div className='col-3'>
                <div className='left-side'>
                    <div className='top'>
                        <div className='image-top'>
                            <img  src={profileImage} className="image"  alt="image" />
                        </div>
                        <div className='name'>
                            <h3>Hey! Matthew</h3>
                        </div>
                    </div>
                    <div className='content '>
                    <div className='first-section'>
                       <div className='info'>
                        <img className='icon' src={Home} alt="" />
                        <div className='text'>Home</div>
                       </div>
                       <div className='info'>
                        <img className='icon' src={DiscoverIcon} alt="" />
                        <div className='text'>Discover</div>
                       </div>
                    </div>
                       <Library />    
                       
                    </div>
                </div>
            </div>
                <RightSide className="right-side1"/>
            
        </div>
    </DashboardStyle>
  )
}

export default Dashboard