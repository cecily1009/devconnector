import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const Bounce = styled.div`
  animation: 1s ${bounceAnimation};
`;
const Landing = ({ isAuthenticated }) => {
  const guestLinks = (
    <div className='buttons'>
      <Link to='/register' className='btn btn-primary'>
        Sign Up
      </Link>
      <Link to='/login' className='btn btn-light'>
        Login
      </Link>
    </div>
  );
  const authLinks = (
    <div className='buttons'>
      <Link to='/dashboard' className='btn btn-primary'>
        My Dashboard
      </Link>
      <Link to='/posts' className='btn btn-primary'>
        Posts
      </Link>
    </div>
  );
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <Bounce>
            <h1 className='x-large'> Developer Connector </h1>

            <p className='lead'>
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>

            {<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
          </Bounce>
        </div>
      </div>
    </section>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
