import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { deleteAccount } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import Spinner from '../layout/Spinner';
import styled, { keyframes } from 'styled-components';
import { rollIn } from 'react-animations';

const rollAnimation = keyframes`${rollIn}`;

const Roll = styled.div`
  animation: 1s ${rollAnimation};
`;
export const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount,
}) => {
  // pass [getCurrentProfile] telling react that if currentProfile haven’t changed between re-renders.
  //This is optimization, if no-changes, this 'effect' would be skipped.
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Roll>
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'> Welcome {user && user.name}</i>
        </p>
        {profile !== null ? (
          <Fragment>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <hr />
            <Education education={profile.education} />
            <hr />
            <div className='my-2'>
              <button
                className='btn btn-danger'
                onClick={() => deleteAccount()}
              >
                <i className='fas fa-user-minus'></i> Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </Fragment>
        )}
      </Fragment>
    </Roll>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
