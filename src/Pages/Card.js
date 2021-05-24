import React from 'react'
import {Link} from 'react-router-dom';


const Card = ({pdata}) => {

    const {title,body,id}= pdata;
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
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Card
