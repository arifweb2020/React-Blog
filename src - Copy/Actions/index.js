import { GET_ALL_POSTS, SINGLE_POST, CREATE_POST, DEL_POST ,UPDATE_POST} from './../Constants/type';
import axios from "axios";

export const getAllPosts = ()=>{

    return async(dispatch)=>{

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const res1 = await res.json();
        console.log(res1);
        dispatch({
            type:GET_ALL_POSTS,
            payload:res1
        })


    }
}

export const singlePost = (id)=>{

    return async (dispatch)=>{

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        const res1 = await res.json();

        dispatch({
            type:SINGLE_POST,
            payload:res1
        })

    }
}

// export const createPost = (post)=>{

//     return async (dispatch)=>{

//         const res = await post('https://jsonplaceholder.typicode.com/posts');

//         const res1 = await res.json();

//         dispatch({
//             type:CREATE_POST,
//             payload:res1
//         });


//     }
// }

export const createPost = (post) => async (dispatch) => {
    const result = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
  
    dispatch({
      type: CREATE_POST,
      payload: result.data,
    });
  };


  export const updatePost = (post) => async (dispatch) => {
    const result = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
    dispatch({
      type: UPDATE_POST,
      payload: result.data,
    });
  };


  export const deletePost = (id) => async (dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({
      type: DEL_POST,
      payload: id,
    });
  };