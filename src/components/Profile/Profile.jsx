import React from 'react';
import c from './Profile.module.css'
import Myposts from "./MyPosts/Myposts";


const Profile = () => {
    return (
        <div className={c.content}>
            <div>

                <img src="https://www.tokkoro.com/picsup/400212-animal-images-background.jpg" alt="img"/>
            </div>
            <div className={c.item}>
                ava + description
            </div>
            <div>
                <Myposts/>
            </div>

        </div>


    );
}
export default Profile;