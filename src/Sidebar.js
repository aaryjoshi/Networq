import React from "react";
import { useSelector } from "react-redux";
import './Sidebar.css';
import { Avatar } from '@material-ui/core'
import {selectUser} from './features/userSlice'

function Sidebar() {

    const user= useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>

    );


    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://img.freepik.com/free-photo/beautiful_1203-2633.jpg?w=2000&t=st=1693731974~exp=1693732574~hmac=9c251bb776487f89961fa32f77ea5f5c2cc1138b4ab80fd91ce96af18fa45812" alt="" />
                <Avatar src={user.photoUrl} className="avatar__classname" >{user.email[0]}</Avatar>
                <h2> {user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statnumber">3456</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statnumber">2644</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("progrmming")}
                {recentItem("softwareengineer")}
                {recentItem("design")}
                {recentItem("devloper")}
            </div>
        </div>
    );
}


export default Sidebar;