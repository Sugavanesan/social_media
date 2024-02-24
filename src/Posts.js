import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({post}) => {
  return (
    <article className="post">
        <Link to={`post/${post.id}`}>
            <h2>{post.name}</h2>
            <p className="postDate">{post.email}</p>
        </Link>
      <p className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
}

export default Posts