import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from './../Actions/index';

const PostCrad = ({ data }) => {
    //const {id}=useParams();

    const dispatch = useDispatch();
    const { title, body } = data;
    return (
        <>

            <div className="col-md-4 mb-4">
                <div className="card" >
                    <img className="card-img-top" src={`https://source.unsplash.com/collection/${data.id}/1600x900`}
                        alt="Card image" style={{ width: "100%" }} />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{body}</p>
                        <Link to={`/blog-post/${data.id}`} className="btn btn-primary">view</Link>
                        <Link to={`/update-post/${data.id}`} className="btn btn-primary">Edit</Link>
                        <button
          className="btn btn-danger btn-delete"
          onClick={() => dispatch(deletePost(data.id))}
        >delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCrad;