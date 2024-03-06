import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css'
import Image from '../assets/cover_image.jpeg'
// import { deepOrange } from '@mui/material/colors';

function Sidebar({ isOpen }) {

    const links = (topic) => {
        return (
        <>
            <p className='sidebar__links'>{topic}</p>
        </>
        );
    }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='sidebar__top'>
            <img className='sidebar__image' src={Image} alt=''/>
            <Avatar className='sidebar__avatar'>OA</Avatar>
            <h2>My Username</h2>
            <h4>This is my description area</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>1234</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on Posts</p>
                <p className='sidebar__statNumber'>2468</p>
            </div>
        </div>

        <div className='sidebar__middle'>
            <h5>Quick Links</h5>
            <div className='sidebar__nav'>
                <h6>{links('Feed')}</h6>
                <h6>{links('Forums')}</h6>
                <h6>{links('Events')}</h6>
                <h6>{links('Interests')}</h6>
                <h6>{links('Analytics')}</h6>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <h5>Recent</h5>
            <div className='sidebar__recentItems'>
                {links ('#web_dev')}
                {links ('#react_js')}
                {links ('#javascript')}
                {links ('#typescript')}
            </div>
        </div>
    </div>
)
}

export default Sidebar;