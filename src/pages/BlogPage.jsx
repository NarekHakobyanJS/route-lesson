import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
//useLocation hooks ը վերադարձնումա Օբյեկտ
//{
//  hash: "" 
//  key : "68wp0lrm" 
//  pathname  : "/posts"
//  search : ""
//  state : null
//}
function BlogPage() {
  const [posts, setPosts] = useState([])
  console.log(useLocation())
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1 style={{textAlign : 'center'}}>BlogPage</h1>
      <Link to="/posts/new">Add new Post</Link>
      {posts.map(post => (
        // Ուշադրություն դարձրեք Link-ի  to ատրիբուտին որը կազմվածա 
        //Ստատիկ և դինամիկ մասերից դինամիկ հատվածում մենք 
        //տալիսենք id -ին Սերվերից եկած Post ի
        //Խի հենց id որովհետև Route ում մենք տվելենք դինամիկ պաևամետր որպես id
        //Նայի App.js - ը
        <Link className='post-title' key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  )
}

export default BlogPage