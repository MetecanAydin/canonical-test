import { useEffect, useState } from 'react';

import { Card } from '../Card/Card';
import { Error } from '../Error/Error';
import { Loading } from '../Loading/Loading';
import { fetchPosts } from '../../utils/api';
import './App.scss';

const App = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function getPosts() {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts)
    }
    getPosts()
  }, [])

  const isError = posts === "ERROR";

  return (
    <div className="App">
      <div className="p-strip">
        <div className="row">
          {posts && !isError ?
            posts.map(post => <Card key={post.id} data={post} />)
            : isError
              ? <Error />
              : <Loading />}
        </div>
      </div>
    </div>
  );
}

export default App;
