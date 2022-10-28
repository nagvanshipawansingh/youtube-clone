import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';


export default function Header() {

  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className='header'>
    <div className='header_left'>
    <MenuIcon/>
    <Link to='/'>
    <img className='header_logo'
    src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png" 
    alt="" />
    </Link>
    </div>
    <div className='header_input'>
         <input value={inputSearch}
         onChange= {(event)=> setInputSearch(event.target.value) }
         
          placeholder='Search' type="text" />
          <Link to={`/search/${inputSearch}`}>
    <SearchIcon className='header_inputButton' />
    </Link>
    </div>
    <div className='header_icons'>
    <VideoCallSharpIcon className='header_icon'/>
    <AppsIcon className='header_icon'/>
    <NotificationsIcon className='header_icon'/>

    <Avatar className='header_icon' 
    src=''
    alt=''/>
    </div>
    
 </div>
  )
}
