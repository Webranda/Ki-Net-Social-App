import { Avatar } from '@mui/material';
import React from 'react'
import { ThumbUpOutlined } from '@mui/icons-material';
import { CommentRounded } from '@mui/icons-material';
import { Share } from '@mui/icons-material';
import { SaveAltOutlined } from '@mui/icons-material';
import InputOption from './InputOption';
import './Post.css'

function Post({ name, date, message, photoUrl, postImage }) {
return (
    <div className='post'>
        <div className='post__header'>
            <Avatar src={photoUrl}/>
            <div className='post__userInfo'>
                <h2>{name}</h2>
                <p>{date}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
            <img src={postImage}/>
        </div>
        <div className='post__options'>
            <InputOption Icon={ThumbUpOutlined} title='Like'/>
            <InputOption Icon={CommentRounded} title='Comment'/>
            <InputOption Icon={Share} title='Share'/>
            <InputOption Icon={SaveAltOutlined} title='Save'/>
        </div>
    </div>
)
}

export default Post;