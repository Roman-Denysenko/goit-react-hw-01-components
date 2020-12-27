import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats'

const Profile = ({name, tag, location, avatar, stats }) => {
    return ( 
        <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>
    
    < Stats followers={stats.followers} views={stats.views} likes={stats.likes} />
  
</div>
    )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;