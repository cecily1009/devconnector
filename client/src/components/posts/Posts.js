import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../../actions/post';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import Spinner from '../layout/Spinner';
import PostForm from './PostForm';
import styled, { keyframes } from 'styled-components';
import { shake } from 'react-animations';

const shakeAnimation = keyframes`${shake}`;

const Shake = styled.div`
  animation: 2s ${shakeAnimation};
`;
const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Shake>
            <h1 className='large text-primary'>Posts</h1>
            <p className='lead'>
              <i className='fas fa-user'></i> Welcome to the community!
            </p>
          </Shake>
          {/* post-form */}
          <PostForm />
          <div className='posts'>
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Posts);
