export const fetchPostsRequest = () => ({
  type: 'FETCH_POSTS_REQUEST',
});

export const fetchPostsSuccess = (posts) => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: 'FETCH_POSTS_FAILURE',
  error: error,
});

export const toggleComments = (postId) => ({
  type: 'TOGGLE_COMMENTS',
  payload: postId,
});

export const fetchCommentsRequest = () => ({
  type: 'FETCH_COMMENTS_REQUEST',
});

export const fetchCommentsSuccess = (comments, postId) => ({
  type: 'FETCH_COMMENTS_SUCCESS',
  payload: {
    comments,
    postId,
  },
});

export const fetchCommentsFailure = (error) => ({
  type: 'FETCH_COMMENTS_FAILURE',
  error: error,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await fetch('https://dummyjson.com/posts?limit=10');
      const data = await response.json();
      dispatch(fetchPostsSuccess(data.posts));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

export const fetchComments = (postId) => {
  return async (dispatch) => {
    dispatch(fetchCommentsRequest());
    try {
      const response = await fetch(`https://dummyjson.com/comments/post/${postId}`);
      const data = await response.json();
      dispatch(fetchCommentsSuccess(data.comments, postId));
    } catch (error) {
      dispatch(fetchCommentsFailure(error.message));
    }
  };
};
