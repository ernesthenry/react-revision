import React from 'react';
import { format } from 'url';



function Commment(props){
    return(
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user = {props.user} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {format(props.date)}

            </div>
        </div>
    );
}

function Avatar(props){
    return(
        <div className="Avatar">
            <img 
            src={props.user.avatarUrl}
            alt={props.user.name}
            />
        </div>
    )
}