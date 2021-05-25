import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { delPost } from '../Actions'


const Card = ({ pdata }) => {
    const dispatch = useDispatch();
    const { title, body, id } = pdata;
    return (
        <>

            <div className="col-md-4 mt-5">
                <div className="card" >
                    <img className="card-img-top" src={`https://source.unsplash.com/collection/${id}/1600x900`}
                        alt="Card image" style={{ width: "100%" }} />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{body}</p>
                        <Link className="btn btm-sm btn-primary" to={`/blog-post/${id}`} >View </Link>
                        <button type="button" className="btn btn-sm btn-danger ml-2" onClick={() => dispatch(delPost(pdata.id))}> Delte</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
