import React from 'react'
import { Link } from 'react-router-dom'
const Blog = (props) => {
  return (

    <Link to={`/articles/${props.item.id}`}>
      <div className="blog-card" >
        <img className="blog-img" src={props.item.img} />
        <h3 className="blog-title" >{props.item.title}</h3>
        <h4 className="blog-summary" >{props.item.summary}</h4>
        <h5 className="upload-date" >{props.item.date}</h5>
      </div>
    </Link>

  )

}

export default Blog