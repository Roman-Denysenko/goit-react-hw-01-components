import React from 'react';
import PropTypes from 'prop-types';

import s from './FriendList.module.scss';
import defaultImage from '../defaultImage.jpg';

const FriendListItems = ({ avatar = defaultImage, name, isOnline, id }) => {
  const online = isOnline ? 'Online' : 'Offline';
  const classIsOnlane = isOnline ? [s.item, s.online].join(' ') : s.item;
  console.log(typeof isOnline);
  return (
    <li key={id} className={classIsOnlane}>
      <span className={s.status}>{online} </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendList = ({ items }) => {
  if (items.length === 0) {
    return null;
  }
  return <ul className="friend-list">{items.map(FriendListItems)}</ul>;
};

FriendListItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
