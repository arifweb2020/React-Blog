import axios from 'axios';

export const allPost = ()=>{

    return async (dispatch)=>{

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

       // console.log(res);

        const res1 = await res.json();

        console.log(res1);

        dispatch({
            type:"ALL_POST",
            payload:res1
        })



    }
}


export const singlePost = (id)=>{

    return {

            type:"SINGLE_POST",
            payload:id,

    }

}


export const createPost = (post)=>{

    return async (dispatch)=>{

        const res = await axios.post('https://jsonplaceholder.typicode.com/posts',
        post);

         

         dispatch({
             type:"CR_POST",
             payload:res.data
         })
    }

} 

