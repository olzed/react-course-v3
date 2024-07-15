import avatar from '../../../assets/default-avatar.svg'
import React from "react";

export function Person({name, nickName, images}) {
    const img = images?.[0]?.small?.url || avatar;
    return (<div>
        <img src={img} alt={name.toUpperCase()} style={{width:'50px'}} />
        <h4>{name}</h4>
        <p>Nickname: {nickName || 'shakeAndBake'}</p>
        </div>);
}