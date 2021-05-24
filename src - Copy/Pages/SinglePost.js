import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singlePost } from './../Actions/index';

const SinglePost = () => {
    const {id} = useParams();
    const spost = useSelector(state=>state.BlogPost.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = ()=>{
        dispatch(singlePost(id));
    }


    return ( 
        <>
        <img
        src={`https://source.unsplash.com/collection/${spost.id}/1920x700`}
        alt="blog"
        className="img-fluid"
      />
      <div className="container mt-4">
          
        <h1>{spost.title}</h1>
        <p>{spost.body}</p>

        </div>
        </>
     );
}
 
export default SinglePost;