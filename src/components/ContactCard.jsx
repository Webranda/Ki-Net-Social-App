import { Avatar } from '@mui/material';
import React from 'react'
import './ContactCard.css'

function ContactCard({ name, excerpt, photoUrl, number, onClick }) {
return (
    <div className='contact-card' onClick={onClick}>
        <div className='contact-card__header'>
            <Avatar className='contact-card__avatar' src={photoUrl}/>
            <div className='contact-card__userInfo'>
                <h2>{name}</h2>
                <p>{excerpt}</p>
            </div>
        </div>
        <p>{number}</p>
    </div>
)
}

export default ContactCard;