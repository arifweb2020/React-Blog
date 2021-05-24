import React,{useEffect} from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { allPost } from './../Actions/index';
import Card from './Card';

const Home = () => {
 
    const mydata = useSelector(state=>state.BlogPost.AllPosts);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(allPost());
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
                        mydata.map((item)=>{

                          return  <Card pdata={item} key={item.id}/>

                        })
                    }
                    
                        
                </div>
             </div>   

        
        </>
    );
}

export default Home;