import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProfileAbout = ({
  profile: {
    user: { name },
    skills,
    bio,
  },
}) => {
  return (
    <div className='profile-about bg-light p-2'>
      <h2 className='text-primary'>{name}'s Bio</h2>
      <p>{bio}</p>
      <div className='line'></div>
      <h2 className='text-primary'>Skill Set</h2>
      <div className='skills'>
        {skills.map((skill, index) => (
          <div key={index} className='p-1'>
            <i className='fas fa-check' /> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default connect()(ProfileAbout);
