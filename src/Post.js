import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOptions from "./InputOptions";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ChatoutlinedIcon from "@material-ui/icons/ChatOutlined"
import SendOutlinedIcon from "@material-ui/icons/SendOutlined"
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined"


const Post=forwardRef(({ name, description, message, photoUrl },ref)=> {
    return (
        <div ref={ref} className="post">
            <div className="post__header" s>
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div Raiv className="post__body">
                < p> {message}</p >
            </div >

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                
                <InputOptions Icon={ChatoutlinedIcon} title="Comment" color="gray" />
                
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
                
                <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>

        </div >
    );
})

export default Post;