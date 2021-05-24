import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {createPost} from '../Actions';
import { useHistory } from 'react-router-dom';


const CreatePost = () => {

    let history = useHistory();

    const [dtitle,setDtitle]= useState("");
    const [dbody,setDbody]= useState("");

    const dispatch = useDispatch();


    const myform = (e)=>{

        e.preventDefault();

        console.log(dtitle,dbody);

        const newData = {

            title:dtitle,
            body:dbody
        }

        dispatch(createPost(newData));

        history.push("/");

    }
    return (
        <div>
            <div className="jumbotron text-center">
                <h1>welcome to Arif Blog </h1>
                <p>Create Form</p>
            </div>


            <div className="container">

                <div className="col-md-4 offset-md-4">

                    <form onSubmit={myform}>

                        <div className="form-group">
                            <input type="text" placeholder="enter title"
                            className="form-control"
                            value={dtitle}
                            onChange={(e)=>setDtitle(e.target.value)}
                            />
                            </div>
                            <div className="form-group">
                            <input type="text" placeholder="enter Body"
                            className="form-control"
                            value={dbody}
                            onChange={(e)=>setDbody(e.target.value)}
                            />
                            </div>

                            <div className="form-group">
                            <button type="submit"> Save </button>
                            </div>

                        </form>

                    </div>

                </div>

        </div>
    )
}

export default CreatePost
