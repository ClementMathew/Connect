import React from 'react'
import { useState } from 'react'
import CreateComponent from '../CreatePage/CreateComponent'
import './messages.css'
import '../HomePage/home.css'
import MessageNavComponent from './MessageNavComponent'
import ChatComponent from './ChatComponent'
import '../NotificationsPage/notifications.css'
import UserChats from './UserChats'
import { useLocation } from 'react-router-dom'

export default function Messages() {

    const [createToggle, setCreateToggle] = useState(false)
    const location = useLocation()
    const dataToMessages = location.state.data

    const popUp = () => {
        setCreateToggle(!createToggle)
    }

    return (
        <div id="containerhome">

            <div id="messageSidebar">

                <div id="messageLogo">
                    <img id='messageLogo-img' src="logo.png" alt="connectlogo" />
                </div>

                <div id="stripes">
                    <div id="blackstripe"></div>
                    <div id="orangestripe"></div>
                </div>

                <div id="navhome">
                    <MessageNavComponent iconSource='home.png' navPage='/home' data={dataToMessages}></MessageNavComponent>
                    <MessageNavComponent iconSource='search.png' navPage='/search' data={dataToMessages}></MessageNavComponent>
                    <MessageNavComponent selected='#F3F3F3' iconSource='messages.png' navPage='/messages' data={dataToMessages}></MessageNavComponent>
                    <MessageNavComponent iconSource='notifications.png' navPage='/notifications' data={dataToMessages}></MessageNavComponent>

                    <div id='nav' onClick={popUp} style={{ justifyContent: 'center' }}>
                        <img id='nav-img' style={{ margin: '0px' }} src='create.png' alt="navIcon" />
                    </div>

                    <MessageNavComponent iconSource='profile_icon.png' navPage='/profile' data={dataToMessages}></MessageNavComponent>
                    <MessageNavComponent iconSource='more.png' navPage='/more' data={dataToMessages}></MessageNavComponent>
                </div>
            </div>

            <div className="verticalline"></div>

            <div id="messageCenter">

                <div id="notificationhead">Messages</div>

                <div id="ChatsList">

                    <ChatComponent selected={true} picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>
                    <ChatComponent picSource='profile.jpg' messageCount='3' userName='__clement.m__' mainName='Clement Mathew'></ChatComponent>

                    <div style={{ padding: '60px' }}></div>
                </div>

            </div>

            <div className="verticalline"></div>

            <div id="messageRightside">

                <div id="chattingTop">

                    <div id='profilepic' style={{ height: '60px', width: '60px' }}>
                        <img id='profilepic-img' src='profile.jpg' alt="profile picture" />
                    </div >
                    <div id="nametag" style={{ marginLeft: '24px', marginRight: '38vw' }}>
                        <p id="username">
                            __clement.m__
                        </p>
                        <p id="mainname">
                            Clement Mathew
                        </p>
                    </div>

                    <img className='callSize' src="phone.png" alt="phone call" />
                    <img className='callSize' style={{ height: '36px' }} src="video.png" alt="video call" />
                    <img className='callSize' style={{ height: '29px' }} src="options.png" alt="options" />
                </div>

                <div className="horizontalOrange"></div>

                <div id="userChats">

                    <div style={{ padding: '10px' }}></div>
                    <UserChats chatType="Sent"></UserChats>
                    <UserChats chatType="Recieve"></UserChats>
                    <UserChats chatType="Recieve"></UserChats>
                    <UserChats chatType="Sent"></UserChats>
                    <UserChats chatType="Sent"></UserChats>
                    <UserChats chatType="Sent"></UserChats>
                    <UserChats chatType="Sent"></UserChats>
                    <UserChats chatType="Sent"></UserChats>
                </div>

                <div id="chattingBottom">

                    <div id="chatTyping">
                        <img id='chatTyping-img' src="smiley.png" alt="smiley" />
                        <input id='chatTyping-input' type="text" placeholder='Enter Something ...' />
                    </div>

                    <div id="chatSend">
                        <img id='chatSend-img' src="voice.png" alt="voice" />
                        <img id='chatSend-img' src="gallery.png" alt="gallery" />
                        <button id="chatSendButton">Send</button>
                    </div>
                </div>
            </div>

            <CreateComponent data={dataToMessages} show={createToggle ? 'flex' : 'none'} createToggle={createToggle} setCreateToggle={setCreateToggle}></CreateComponent>

        </div>
    );
}
