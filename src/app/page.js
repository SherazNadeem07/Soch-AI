import PostFeed from './components/PostFeed';

export default function HomePage() {
  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page with Posts</h1>
      <PostFeed />
    </div>
    </>
  );
}
