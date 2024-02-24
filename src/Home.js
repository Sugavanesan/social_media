import React from 'react'
import Feed1 from './Feed1'

const Home = ({posts}) => {
  return (
    <main className='Home'>
        {posts.length?(
            <Feed1 posts={posts}/>
        ):(
            <p style={{marginTop:"2rem"}}>
                No Posts to display
            </p>
        )}
    </main>
  )
}

export default Home