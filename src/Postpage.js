import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Postpage = ({posts,handleDelete}) => {

const{id}=useParams();
const post=posts.find(post=>(post.id).toString()===id)

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.name}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">EditPost</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Page Not Found</h2>
            <p>Well Thats Disappointing</p>
            <p>
              <Link to="/"> Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}

export default Postpage