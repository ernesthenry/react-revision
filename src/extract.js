import React from 'react';
import { format } from 'url';



function Commment(props){
    return(
        <div className="Comment">
            <div className="UserInfo">
                <img 
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                    />
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