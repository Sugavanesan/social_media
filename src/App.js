import Header from './Header';
import Postpage from './Postpage';
import Missing from './Missing';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from "./api/posts1";
import EditPosts from './EditPosts';

function App() {
  const [posts,setPosts]=useState([])
  const [search, setSearch] = useState(" ");
  const [searchResults,setSearchResults]=useState([])
  const [postTitle, setPostTitle] = useState(" ");
  const [postBody, setPostBody] = useState(" ");
  const [editTitle, setEditTitle] = useState(" ");
  const [editBody, setEditBody] = useState(" ");
  const navigate=useNavigate()

useEffect(()=>{
  const fetchPosts=async()=>{
    try{
      const response=await api.get('/posts');
      setPosts(response.data)
    }
    catch(err){
      if(err.response){
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
      }
      else{
        console.log(`Error: ${err.message}`)
      }
    }
  }
  fetchPosts()
},[])

  useEffect(()=>{
    const filteredResults=posts.filter((i)=>((i.body).toLowerCase()).includes(search.toLowerCase())||(i.name).toLowerCase().includes(search.toLowerCase()))

    setSearchResults(filteredResults.reverse())
  },[posts,search])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const email = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, name: postTitle, email, body: postBody };
    try{
      const response=await api.post('/posts',newPost)
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate("/")
    }
    catch(err){
      console.log(err.message)
    }
  };
const handleEdit=async(id)=>{
  const email=format(new Date(),'MMMM dd,yyyy pp')
  const updatePost={id,name:editTitle,email,body:editBody}
  try{
    const response=await api.put(`/posts/${id}`,
    updatePost)
    setPosts(posts.map(i=>i.id===id?{...response.data}:i))
    setEditTitle("");
    setEditBody("");
    navigate("/");
  }
  catch(err){
    console.log(err.message)
  }
}
 const handleDelete=async(id)=>{
  try {
    await api.delete(`posts/${id}`)
    const postslists = posts.filter((i) => i.id !== id);
    setPosts(postslists);
    navigate("/");
  } catch (err) {
    console.log(err.message);
  }
 }
  return (
    <div className="App">
      <Header title="Cric media" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="post">
          <Route index element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostBody={setPostBody}
                setPostTitle={setPostTitle}
                postBody={postBody}
              /> } />
          <Route path=":id"  element={<Postpage posts={posts} handleDelete={handleDelete} />} />
        </Route>
        <Route path="/edit/:id" element={
            <EditPosts
              posts={posts}
              handleEdit={handleEdit}
              editBody={editBody}
              setEditBody={setEditBody}
              editTitle={editTitle}
              setEditTitle={setEditTitle}  />  }
         />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
  }
export default App;