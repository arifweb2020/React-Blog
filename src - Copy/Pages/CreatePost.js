import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { createPost } from './../Actions/index';
//import shortid from "shortid";


const CreatePost = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
    //  id: shortid.generate(),
      title: title,
      body: body,
    };

    dispatch(createPost(new_post));
    history.push("/");
  };
    return ( 
      <>
        <div className="jumbotron text-center">
  <h1>Create your Post</h1>
  <p>we are giving latest news about IT Technology</p> 
</div>

<div className="container">
<form onSubmit={submitForm}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Body Text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <button className="btn btn-primary btn-lg">Add New Post</button>
            </form>
  </div>

  </>
     );
}
 
export default CreatePost;