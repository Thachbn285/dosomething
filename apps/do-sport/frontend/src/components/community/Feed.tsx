import PostCard from './PostCard';

interface FeedProps {
  posts: any[];
}

export default function Feed({ posts }: FeedProps) {
  return (
    <div className="max-w-2xl mx-auto">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
