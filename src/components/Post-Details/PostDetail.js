import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Post from '../Post/Post';
import { Box } from '@material-ui/core';

const PostDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <Box width="75%" m="50px auto">
      <Post showBtn={false} post={post} key={id}></Post>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id}></Comment>
      ))}
    </Box>
  );
};

export default PostDetail;
