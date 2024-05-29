import { ImageOutlined } from '@mui/icons-material';
import { EventNoteOutlined } from '@mui/icons-material';
import { ArticleOutlined } from '@mui/icons-material';
import { CreateOutlined } from '@mui/icons-material';
import './Feed.css'
import InputOption from './InputOption'
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import Post from './Post';
import Image from '../assets/post_image1.jpg';
import Image2 from '../assets/cover_image.jpeg';

function Feed() {
    return (
        <div className='feed'> 
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateOutlined />
                    <form>
                        <input type='text' placeholder='Create a Post'/>
                        <button className='buttonHover' type='submit'>Post</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageOutlined} title='Photo' color='#70e5f9'/>
                    <InputOption Icon={LiveTvRoundedIcon} title='Video' color='#e7a33e'/>
                    <InputOption Icon={EventNoteOutlined} title='Event' color='#c0cbcd'/>
                    <InputOption Icon={ArticleOutlined} title='Article' color='#7fc15e'/>
                </div> 
            </div>

            {/* This is the Posts Area. This renders all the posts to the feed. */}
            <div className='post__container'>
                <Post
                    name= "Diego__Codes"
                    date= "2 mins ago"
                    message= "Lorem Ipsum is simply dummy text of the printing and typesetting industry,\n\
                    this post is about my school project really. I was asked to redesign any space of my choice and\n\
                    I picked my room, rearranged the space changed some of the materials and furnitures. Here is the outcome."
                    photoUrl= ""
                    postImage= {Image}
                />
                <Post
                    name= "Adegoke Logbon"
                    date= "10 mins ago"
                    message= "React is cool"
                    photoUrl= ""
                    postImage= {Image2}
                />
                <Post
                    name= "Diego__Codes"
                    date= "2 mins ago"
                    message= "Astalavi is a big head but we dey manage am like that sha we no get where to push am"
                    photoUrl= ""
                    postImage= ""
                />
                <Post
                    name= "Adegoke Logbon"
                    date= "10 mins ago"
                    message= "React is cool"
                    photoUrl= ""
                    postImage= ""
                />
                <Post
                    name= "Adegoke Logbon"
                    date= "10 mins ago"
                    message= "React is cool"
                    photoUrl= ""
                    postImage= ""
                />
            </div>  
        </div>
    )
}

export default Feed;