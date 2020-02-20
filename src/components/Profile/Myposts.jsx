import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post";


const Myposts = (props) => {
    
    let postElements =
        props.posts.map(p =>
            <Post message={p.message} likescount={p.likescount}/>
        );
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postElements}
        </div>
    );
}
export default Myposts;