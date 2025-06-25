import PostFeed from '@/components/PostFeed';

export default function PostsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <PostFeed />
    </div>
  );
}
