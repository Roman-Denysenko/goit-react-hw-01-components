import React from 'react';
import PropTypes from 'prop-types';

import s from './Profie.module.scss';

import defaultImage from '../defaultImage.jpg';
import Stats from './Stats';

const Profile = ({ name, tag, location, avatar = defaultImage, stats }) => {
  return (
    <div className={s.container}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;
