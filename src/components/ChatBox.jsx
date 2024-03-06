import React from 'react';
import { Avatar } from '@mui/material';
import './ChatBox.css';

const ChatBox = ({ onClose, title }) => {
    return (
        <div className="chatbox">
            <div className="chatbox__header">
                <Avatar className="chatbox__avatar"/>
                <h4>{title}</h4>
                <button className="chatbox__closeButton" onClick={onClose}>Close</button>
            </div>
            <div className="chatbox__body">
                <div className='chatbox__message'>
                    <p>message goes here</p>
                    <p>message goes here</p>
                    <p>message goes here</p>
                    <p>message goes here</p>
                    <p>message goes here</p>
                    <p>message goes here</p>
                    <p>message goes here</p>
                </div>
            </div>
            <div className='chatbox__options'>
                <form>
                    <input type='text' name='textbox' placeholder='Type here'/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;
