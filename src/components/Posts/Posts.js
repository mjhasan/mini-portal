import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import Post from '../Post/Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" bgcolor="azure">
      {posts.map((post) => (
        <Post showBtn={true} post={post} key={post.id}></Post>
      ))}
    </Box>
  );
};

export default Posts;
