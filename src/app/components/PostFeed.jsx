'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost } from '../../Redux/Slices/postsSlice';
import CreatePost from './CreatePost';
import CreatePostForm from './CreatePostFoam';

export default function PostFeed() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.posts);
  const user = useSelector(state => state.posts); 

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handlePostSubmit = (postData) => {
    const newPost = {
      id: Date.now(), 
      userImage: '/user1.jpg',
      userName: 'Adam Broke',
      postTime: 'Just now',
      category: postData.category,
      title: postData.title,
      description: postData.description,
      images: [], 
      tags: [], 
      likes: 0,
      dislikes: 0,
      comments: 0,
      heart: 0
    };
    dispatch(addPost(newPost));
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="space-y-6">
      <CreatePostForm 
        userImage='/user1.jpg'
        userName='Adam Broke'
        onSubmit={handlePostSubmit} 
      />
      {items.length === 0 ? (
        <p>No posts found</p>
      ) : (
        items.map(post => (
          <CreatePost key={post.id} {...post} />
        ))
      )}
    </div>
  );
}