import React from 'react'
import '../HomePage/SuggestComponent.css'

export default function Followers(props) {

    const popDown = () => {
        props.setFollowersList(!props.followersList)
    }

    return (
        <>
            <div id='createBackContainer' onClick={popDown} style={{ display: props.show }}></div>

            <div id="createTopContainer" style={{ display: props.show }} >

                <p id='createTopContainer-p'>Followers</p>

                <div className="horizontalline" style={{ paddingBottom: '30px' }}></div>
                {
                    Object.keys(props.data).map((key) => (

                        <div id='suggestions' key={key}>

                            <div id='profilepic'>
                                <img id='profilepic-img' src={props.data[key].profilepicurl == '' ? 'profile.png' : props.data[key].profilepicurl} alt="profile picture" />
                            </div>

                            <div id="nametag">
                                <div id="username" style={{ paddingBottom: '25px' }}>
                                    {props.data[key].username}
                                </div>
                                <div id="mainname">
                                    {props.data[key].name}
                                </div>
                            </div>

                            <button id="followbutton" style={{ marginLeft: '100px', marginTop: '0px' }}>Connect</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
