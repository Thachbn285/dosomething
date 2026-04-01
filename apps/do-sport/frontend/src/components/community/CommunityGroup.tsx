import Card from '../common/Card';
import Button from '../common/Button';

interface CommunityGroupProps {
  id: string;
  name: string;
  icon: string;
  members: number;
  description: string;
  isJoined?: boolean;
}

export default function CommunityGroup({
  id: _id,
  name,
  icon,
  members,
  description,
  isJoined = false,
}: CommunityGroupProps) {
  return (
    <Card className="p-6 text-center">
      <div className="text-5xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <p className="text-xs text-gray-500 mb-4">{members} members</p>
      <Button
        variant={isJoined ? 'outline' : 'primary'}
        size="sm"
        className="w-full"
      >
        {isJoined ? 'Leave Group' : 'Join Group'}
      </Button>
    </Card>
  );
}
