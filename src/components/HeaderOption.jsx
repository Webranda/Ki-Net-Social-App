import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material';

function HeaderOption({ Icon, title, avatar, onClick }) {
  return (
    <div className={avatar ? 'headerOption avatar' : 'headerOption'} onClick={onClick}>
        {Icon && <Icon className='headerOption__icon'/>}
        {avatar && <Avatar className= 'headerOption__icon avatar' src= {avatar}/>}
        {title && <h4 className='headerOption__title'>{title}</h4>}
    </div>
  )
}

export default HeaderOption;