import React from 'react'
import NavComponent from '../Components/NavComponent'
import '../HomePage/home.css'
import { useState } from 'react'
import './search.css'
import ProfileDetails from '../Components/ProfileDetails'
import RecentSearch from './RecentSearch'
import '../Components/NavComponent.css'
import CreateComponent from '../CreatePage/CreateComponent';
import { useLocation } from 'react-router-dom'

export default function Search() {

    const [createToggle, setCreateToggle] = useState(false)
    const [searchedUser, setSearchedUser] = useState({})
    const [searchedUserToggle, setSearchedUserToggle] = useState(false)

    const popUp = () => {
        setCreateToggle(!createToggle)
    }

    const location = useLocation()
    const dataToSearch = location.state.data

    const handleClick = (e) => {

        const searchTemp = {}
        setSearchedUserToggle(true)

        Object.keys(dataToSearch.allusers).map((key) => {

            const username = dataToSearch.allusers[key].username

            if (username.includes(e.target.value) && (e.target.value) !== '') {

                searchTemp[key] = dataToSearch.allusers[key]
                setSearchedUser(searchTemp)
            }
        })
    }

    return (
        <div id='containerhome'>

            <div id="sidebar">

                <div id="connectwithlogo">
                    <img id='connectwithlogo-img' src="connectwithlogo.png" alt="connectlogo" />
                </div>

                <div id="stripes">
                    <div id="blackstripe"></div>
                    <div id="orangestripe"></div>
                </div>

                <div id="navhome">
                    <NavComponent iconSource='home.png' navName="Home" navPage='/home' data={dataToSearch}></NavComponent>
                    <NavComponent selected='#F3F3F3' iconSource='search.png' navName="Search" navPage="/search" data={dataToSearch}></NavComponent>
                    <NavComponent iconSource='messages.png' navName="Messages" navPage="/messages" data={dataToSearch}></NavComponent>
                    <NavComponent iconSource='notifications.png' navName="Notifications" navPage="/notifications" data={dataToSearch}></NavComponent>

                    <div id='nav' onClick={popUp}>
                        <img id='nav-img' src='create.png' alt="navIcon" />
                        <p id='nav-p'>Create</p>
                    </div>

                    <NavComponent iconSource='profile_icon.png' navName="Profile" navPage="/profile" data={dataToSearch}></NavComponent>
                    <NavComponent iconSource='more.png' navName="More" navPage="/more" data={dataToSearch}></NavComponent>
                </div>

                <div id="sloganhome">Get Connected, Get Social</div>
            </div>

            <div className="verticalline"></div>

            <div id="center">

                <div id="searchbar">

                    <input id="searchbox" placeholder='Enter something ...' onChange={(e) => {
                        handleClick(e)
                    }} >
                    </input>
                    <button id="searchbutton" onClick={handleClick} >Search</button>
                </div>

                {
                    searchedUserToggle ?

                        <div id="recentHistory" style={{ marginTop: '30px' }}>
                            {
                                Object.keys(searchedUser).map((key) => (
                                    <RecentSearch mainData={dataToSearch} data={searchedUser[key]} key={key} picSource={searchedUser[key].profilepicurl} userName={searchedUser[key].username} mainName={searchedUser[key].name}></RecentSearch>
                                ))
                            }
                            <div style={{ paddingBottom: '160px' }}></div>
                        </div>

                        : <>
                            <div id="recent">

                                <p id='recent-text'>Recent</p>
                                <button id='recent-clear'>Clear All</button>
                            </div>

                            <div id="recentHistory">
                                {
                                    Object.keys(dataToSearch.recenthistory).map((key) => (
                                        <RecentSearch mainData={dataToSearch} data={dataToSearch.recenthistory[key]} key={key} picSource={dataToSearch.recenthistory[key].profilepicurl} userName={dataToSearch.recenthistory[key].username} mainName={dataToSearch.recenthistory[key].name}></RecentSearch>
                                    ))
                                }
                                <div style={{ paddingBottom: '160px' }}></div>
                            </div>
                        </>
                }

            </div>

            <div className="verticalline"></div>

            <div id="rightside">

                <div id="profileDetails">

                    <div id="profileDetailsCenter">

                        <div id='profileDetailsPicShape'>

                            <img id='profileDetailsPic' src={dataToSearch.profilepicurl === '' ? 'profile.png' : dataToSearch.profilepicurl} alt="profilepic" />
                        </div>
                    </div>

                    <ProfileDetails detailType='Username' detailName={dataToSearch.username}></ProfileDetails>
                    <ProfileDetails detailType='Name' detailName={dataToSearch.name}></ProfileDetails>
                    <ProfileDetails detailType='Email' detailName={dataToSearch.email}></ProfileDetails>
                    <ProfileDetails detailType='Phone' detailName={dataToSearch.phone}></ProfileDetails>
                </div>

                <div id="copyright" style={{ paddingTop: '144px' }}>
                    @ 2024 Copyright from Connect
                </div>
            </div>

            <CreateComponent data={dataToSearch} show={createToggle ? 'flex' : 'none'} createToggle={createToggle} setCreateToggle={setCreateToggle}></CreateComponent>

        </div>
    )
}
