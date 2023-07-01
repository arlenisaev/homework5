const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'TOGGLE_COMMENTS':
      const updatedPosts = state.posts.map((post) => {
        if (post.id === action.payload) {
          return {
            ...post,
            showComments: !post.showComments,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    case 'FETCH_COMMENTS_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_COMMENTS_SUCCESS':
      const { comments, postId } = action.payload;
      const updatedPostsWithComments = state.posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            showComments: true,
            comments: comments,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPostsWithComments,
        isLoading: false,
        error: null,
      };
    case 'FETCH_COMMENTS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
