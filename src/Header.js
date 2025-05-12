import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";


function Header() {
    
    const dispatch=useDispatch();

    const logoutOfApp=(e)=>{
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            <h1></h1>

            <div className="header__left">
                <img src="/Networq_icon.png" alt="Nerworq Logo" />
                
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>

            <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={GroupWorkIcon} title="My Network" />
            {/* <HeaderOption Icon={WorkspacesIcon} title="Jobs" /> */}
            <HeaderOption Icon={ForumOutlinedIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsActiveOutlinedIcon} title="Notifications" />
            <HeaderOption avatar title="Me" onClick={logoutOfApp} />
            </div>
        </div>
    );
}


export default Header;