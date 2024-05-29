import React, { useState } from 'react';
import './Widgets.css';
import ContactCard from './ContactCard';
import ChatBox from './ChatBox';

function Widgets({ isOpen }) {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(prevState => !prevState);
    };

    return (
        <div className={`widgets ${isOpen ? 'open' : ''}`}>
            <div className='widgets__content'>
                <div className='widgets__top'>
                    <div className='widgets__topHeader'>
                        <h4>Communities</h4>
                        <p className='widgets__create'>New +</p>
                    </div>
                    <div className='widgets__topBody'>
                        <ContactCard 
                            name='React Community'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='Devs Room'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='Designers Club'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='MEMES House'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='Gameers Community'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='Tech Chat'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='AI Hub'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='Writers Hub'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='Unlimited Tutorials'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='Premium Video Editing'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                        <ContactCard 
                            name='Project 50 Challenge'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                         <ContactCard 
                            name='Project 50 Challenge'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                         <ContactCard 
                            name='Project 50 Challenge'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                         <ContactCard 
                            name='Project 50 Challenge'
                            excerpt='React devs across the globe'
                            onClick={toggleChat}
                        />
                    </div>
                </div>
            </div>
            {isChatOpen && <ChatBox title='Figure this out' onClose={toggleChat} />}
        </div>
    );
}

export default Widgets;


