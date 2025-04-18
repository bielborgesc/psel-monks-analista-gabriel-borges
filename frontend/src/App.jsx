import { useEffect, useState } from 'react'
import { fetchPosts } from './services/api';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts do WordPress</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
}

export default App;
