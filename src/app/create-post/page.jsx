'use client';
import CreatePostForm from '../components/postfoam/CreatePostFoam';
import { useDispatch } from 'react-redux';
import { addPost } from '../../Redux/Slices/postsSlice';
import { useRouter } from 'next/navigation';

export default function CreatePostPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (formData) => {
    const newPost = {
      id: Date.now(),
      userImage: '/user1.jpg',
      userName: 'Adam Broke',
      postTime: 'Just now',
      category: formData.category,
      title: formData.title,
      description: formData.description,
      images: [],
      tags: formData.hashtags || [],
      likes: 0,
      dislikes: 0,
      comments: 0,
      heart: 0
    };

    dispatch(addPost(newPost));
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6">
      <CreatePostForm
        userImage="/user1.jpg"
        userName="Adam Broke"
        onSubmit={handleSubmit}
      />
    </div>
  );
}
