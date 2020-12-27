import React from 'react';
import PropTypes from 'prop-types';

const FriendListItems = ({avatar, name, isOnline, id }) => {
    return (
        <li key={id} class="item">
            <span class="status">{ isOnline}</span>
  <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{ name}</p>
</li>
    )
}    

const FriendList = ({ items }) => {
    if (items.length === 0) {
        return null
    };
    return (<ul class="friend-list">{items.map(FriendListItems) }</ul>)
}

FriendListItems.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}


export default FriendList;