import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getAllProfiles } from '../../actions/profile';
import { ProfileItem } from './ProfileItem';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

const Fade = styled.div`
  animation: 2s ${fadeAnimation};
`;
const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i> Browse and connect with
            developers
          </p>
          <Fade>
            <div className='profiles'>
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>No profiles found...</h4>
              )}
            </div>
          </Fade>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
export default connect(mapStateToProps, { getAllProfiles })(Profiles);
