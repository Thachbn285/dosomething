import Card from '../common/Card';
import Badge from '../common/Badge';

interface PostCardProps {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  category: string;
  likes: number;
  comments: number;
  image?: string;
}

export default function PostCard({
  id: _id,
  author,
  avatar,
  content,
  timestamp,
  category,
  likes,
  comments,
  image,
}: PostCardProps) {
  return (
    <Card className="p-6 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-lg">
            {avatar}
          </div>
          <div>
            <p className="font-bold text-gray-800">{author}</p>
            <p className="text-sm text-gray-500">{timestamp}</p>
          </div>
        </div>
        <Badge variant="secondary">{category}</Badge>
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-4">{content}</p>

      {/* Image */}
      {image && (
        <div className="mb-4 h-64 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-4xl">
          {image}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t text-gray-600">
        <button className="hover:text-primary transition">
          ❤️ {likes} Likes
        </button>
        <button className="hover:text-primary transition">
          💬 {comments} Comments
        </button>
        <button className="hover:text-primary transition">↗️ Share</button>
      </div>
    </Card>
  );
}
