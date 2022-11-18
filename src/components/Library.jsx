import React from 'react'
import {DashboardStyle} from '../styles/Library.style'
import { Link } from 'react-router-dom';
import soundIcon from '../assets/icons/sound.svg'
import libraryIcon from '../assets/icons/library.svg'
import loveIcon from '../assets/icons/love.svg'
import audioIcon from '../assets/icons/audio.svg'
import mediaIcon from '../assets/icons/media.svg'
import recordIcon from '../assets/icons/record.svg'
import searchIcon from '../assets/icons/search.svg'
import {Songs} from '../assets/links/Links'



const Library = () => {
  return (
    <DashboardStyle>
        <div className='info'>
            <img className='icon' src={libraryIcon} alt="" />
            <div className='text'>Library</div>
        </div>
        <div className='info'>
            <img className='icon' src={loveIcon} alt="" />
            <div className='text'>Liked Songs</div>
            <img className='icon side' src={soundIcon} alt="" />
        </div>
        <div className='info'>
            <img className='icon' src={audioIcon} alt="" />
            <div className='text'>Recently Played</div>
        </div>
        <div className='info'>
            <img className='icon' src={mediaIcon} alt="" />
            <div className='text'>Create Playlist</div>
        </div>
        <div className='new last'>
            <div className='inner'>
            <img className='icon' src={recordIcon} alt="" />
            <div className='text'>My Playlists</div>
            </div>
            <img className='last-icon' src={searchIcon}alt="" />  
        </div>
        <div className='songs'>
       {Songs.map((song)=>{
        const {id,url, text} = song
        return(
            <div  key={id}>
                <Link className='song' to={url}>
                    <p>{text}</p>
                </Link>
            </div>
        )
       })}
        </div>
    </DashboardStyle>
  )
}

export default Library