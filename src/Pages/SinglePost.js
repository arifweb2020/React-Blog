import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch,useSelector } from 'react-redux';

import {singlePost} from '../Actions'


const SinglePost = () => {

    const {id} = useParams();

    const sdata = useSelector(state=>state.BlogPost.post);

    const dispatch = useDispatch();


    useEffect(()=>{
        getData();
    },[]);


    const getData = async ()=>{

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        const res1 = await res.json();

        dispatch(singlePost(res1))

    }

  

    return (
        <>
           <img
        src={`https://source.unsplash.com/collection/${sdata.id}/1920x700`}
        alt="blog"
        className="img-fluid"
      />
      <div className="container mt-4">
          
        <h1>{sdata.title}</h1>
        <p>{sdata.body}</p>

        </div>
       
        </>
    )
}

export default SinglePost
