import React from 'react'
import app from '../Firebase/firebase';
import { useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import NavComponent from '../HomeComponents/NavComponent'
import '../HomePage/home.css'
import './profile.css'

export default function Profile() {

    const auth = getAuth(app);

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
        // You can send a request to your authentication server here
    };

    return (
        <div id="containerhome">
            <div id="sidebar">
                <div id="connectwithlogo">
                    <img src="connectwithlogo.png" alt="connectlogo" />
                </div>
                <div id="stripes">
                    <div id="blackstripe"></div>
                    <div id="orangestripe"></div>
                </div>

                <div id="navhome">
                    <NavComponent iconSource='home.png' navName="Home" navPage='/home'></NavComponent>
                    <NavComponent iconSource='search.png' navName="Search" navPage="/search"></NavComponent>
                    <NavComponent iconSource='messages.png' navName="Messages" navPage="/messages"></NavComponent>
                    <NavComponent iconSource='notifications.png' navName="Notifications" navPage="/notifications"></NavComponent>
                    <NavComponent iconSource='create.png' navName="Create" navPage="/create"></NavComponent>
                    <NavComponent selected='#F3F3F3' iconSource='profile_icon.png' navName="Profile" navPage="/profile"></NavComponent>
                    <NavComponent iconSource='more.png' navName="More" navPage="/more"></NavComponent>
                </div>
                <div id="sloganhome">Get Connected, Get Social</div>
            </div>

            <div className="verticalline"></div>

            <div id="profileRightSide">
                <div id="profileHead">
                    <div id="profileHeadPic">
                        <img src="profile.jpg" alt="profile page dp" />
                    </div>
                    <div id="profileHeadBio">
                        <div id="profileHeadBioTop">
                            <p >__clement.m__</p>
                            <button id="editProfile">Edit Profile</button>
                            <button id="logOut" onClick={handleClick}>Logout</button>
                        </div>
                        <div id="profileFollowers">
                            <div id="postsCount">
                                <p className='CountPrefix'>20</p>
                                <p className='CountSuffix'>posts</p>
                            </div>
                            <div id="followersCount">
                                <p className='CountPrefix followPointer'>1001</p>
                                <p className='CountSuffix followPointer'>followers</p>
                            </div>
                            <div id="followingCount">
                                <p className='CountPrefix followPointer'>902</p>
                                <p className='CountSuffix followPointer'>following</p>
                            </div>
                        </div>
                        <div id="profileBio">
                            <p id='BioName'>Clement Mathew</p>
                            <p id='Bio'>Studying B.Tech at Gec Wayanad</p>
                        </div>
                    </div>
                </div>

                <div id="profilePosts">
                    <div className="profileHorizontalLine"></div>
                    <div id='profilePostsHead'>Posts</div>
                    <div id="profilePostImages">
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <img src="profile.jpg" alt="post image" />
                        <div style={{ paddingBottom: '230px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}