import { Search } from '@mui/icons-material';
import React from 'react'
import "./Header.css"
import HeaderOption from './HeaderOption'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import Notifications from '@mui/icons-material/Notifications';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import ChatRounded from '@mui/icons-material/ChatRounded';

function Header({ toggleWidgets, toggleSidebar }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className='header'>
        <div className='header__left'>
          <img src='./logo192.png' alt='appLogo'/>
          <div className='header__search'>
              <Search/>
              <input type='search' placeholder='Search'/>
          </div>
        </div>

        <div className='header__right'>
            <HeaderOption title='Home' Icon={HomeRoundedIcon}/>
            <HeaderOption title='My Network' Icon={PeopleAltRoundedIcon}/>
            <HeaderOption title='Notification' Icon={Notifications}/>
            <HeaderOption title='Live Rooms' Icon={LiveTvRoundedIcon}/>
            <HeaderOption title='Marketplace' Icon={StorefrontRoundedIcon}/>
        </div>
        <HeaderOption avatar='#' onClick={toggleSidebar}/>
        {isMobile && <HeaderOption title='Chats' Icon={ChatRounded} onClick={toggleWidgets}/>}
    </div>
  )
}

export default Header;