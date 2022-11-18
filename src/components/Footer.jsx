import React from 'react'
import Home from '../assets/icons/🦆 Home.svg'
import DiscoverIcon from '../assets/icons/discover.svg'
import mediaIcon from '../assets/icons/media.svg'
import libraryIcon from '../assets/icons/library.svg'
import {DashboardStyle} from '../styles/Footer.style'

const Footer = () => {
  return (
    <DashboardStyle>
        <img src={Home} alt="" />
        <img src={DiscoverIcon} alt="" />
        <img src={mediaIcon} alt="" />
        <img src={libraryIcon} alt="" />
    </DashboardStyle>
  )
}

export default Footer