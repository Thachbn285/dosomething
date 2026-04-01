// Do Social - DTOs

export class CreatePostDto {
    userId: string;
    content: string;
    images?: string[];
    mentions?: string[];
    hashtags?: string[];
}

export class PostResponseDto {
    id: string;
    userId: string;
    content: string;
    images?: string[];
    likes: number;
    comments: number;
    shares: number;
    liked?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export class CreateCommentDto {
    postId: string;
    userId: string;
    content: string;
}

export class CommentResponseDto {
    id: string;
    postId: string;
    userId: string;
    content: string;
    likes: number;
    createdAt: Date;
}

export class FollowDto {
    followerId: string;
    followingId: string;
}

export class NotificationDto {
    id: string;
    userId: string;
    type: 'like' | 'comment' | 'follow' | 'message';
    content: string;
    relatedId: string;
    read: boolean;
    createdAt: Date;
}

export class CreateMessageDto {
    senderId: string;
    receiverId: string;
    content: string;
}

export class MessageResponseDto {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    read: boolean;
    createdAt: Date;
}

export class FeedResponseDto {
    posts: PostResponseDto[];
    pagination: {
        page: number;
        limit: number;
        total: number;
    };
}
