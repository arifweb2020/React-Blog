import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getAllPosts } from './../Actions/index';
import PostCrad from './PostCard';

const Home = () => {
    const dispatch = useDispatch();
    const mypost = useSelector(state=>state.BlogPost.posts);

useEffect(()=>{
    dispatch(getAllPosts());
},[]);


    return (
        <>

            <div className="jumbotron text-center">
                <h1>welcome to Arif Blog </h1>
                <p>we are giving latest news about IT Technology</p>
            </div>


            <div className="container">

 
                <div className="row">
                   
                        {
                            mypost.map((item)=>{
                                return <PostCrad data={item} key={item.id}/>
                            })
                        }
                    
                </div>
            </div>
        </>
    );
}

export default Home;