import { GET_ALL_POSTS, SINGLE_POST , CREATE_POST, DEL_POST, UPDATE_POST} from './../Constants/type';

const iState = {

    posts: [],
    post: "",
};

const BlogPost = (state = iState, action) => {
    switch (action.type) {

        case GET_ALL_POSTS:

            return {
                ...state,
                posts: action.payload,
            };


        case SINGLE_POST:
            return {
                ...state,
                post: action.payload,
            };

            case CREATE_POST:
      //console.log(payload);
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

      case UPDATE_POST:
        return {
          ...state,
          posts: state.posts.map((postItem) =>
            postItem.id == action.payload.id ? action.payload : postItem
          ),
        };

      case DEL_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id != action.payload),
      };

        default:

            return state;
    }
};

export default BlogPost;