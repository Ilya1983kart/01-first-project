import React from 'react';
import c from './MyPosts.module.css';


const Post = (props) => {
    return (

        <div className={c.item}>
            <div>{props.message}</div>
            <span>{props.likescount}</span>
        </div>


    );
}

const Myposts = () => {
    let postData = [
        {id: 1, message: 'Hi', likescount: 5},
        {id: 1, message: 'How are You', likescount: 10},
        {id: 1, message: 'What is your name', likescount: 15}
    ];
    let postElements =
        postData.map(p =>
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