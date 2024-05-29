import { Avatar, Badge } from '@mui/material';
import React from 'react'
import './ContactCard.css'

function ContactCard({ name, excerpt, photoUrl, number, onClick }) {
return (
    <Badge badgeContent={100} max={99} color='primary'>
        <div className='contact-card' onClick={onClick}>
            <div className='contact-card__header'>
                <Avatar className='contact-card__avatar' src={photoUrl}/>
                <div className='contact-card__userInfo'>
                    <h2>{name}</h2>
                    <p>{excerpt}</p>
                </div>
            </div>
        </div>
    </Badge>
)
}

export default ContactCard;