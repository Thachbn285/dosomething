// Shared types for all domains

export type IServiceResponse<T = any> = {
  success: boolean;
  status: number;
  message: string;
  data?: T;
  error?: string;
};

export interface IBaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends IBaseEntity {
  email: string;
  password: string;
  username: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
  isActive: boolean;
}

export interface IProduct extends IBaseEntity {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image?: string;
  tags?: string[];
}

export interface IOrder extends IBaseEntity {
  userId: string;
  items: IOrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: IAddress;
  paymentMethod: string;
}

export interface IOrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface IMovie extends IBaseEntity {
  title: string;
  description: string;
  releaseDate: Date;
  director: string;
  genres: string[];
  poster: string;
  rating: number;
  duration: number;
}

export interface IShowtime extends IBaseEntity {
  movieId: string;
  cinemaId: string;
  startTime: Date;
  endTime: Date;
  totalSeats: number;
  availableSeats: number;
  price: number;
}

export interface IBooking extends IBaseEntity {
  userId: string;
  showtimeId: string;
  seats: string[];
  totalPrice: number;
  status: 'confirmed' | 'cancelled' | 'used';
}

export interface IEvent extends IBaseEntity {
  title: string;
  description: string;
  date: Date;
  location: string;
  capacity: number;
  ticketPrice: number;
  image: string;
}

export interface IEventTicket extends IBaseEntity {
  eventId: string;
  userId: string;
  ticketNumber: string;
  status: 'active' | 'used' | 'cancelled';
}

export interface ISportCourt extends IBaseEntity {
  name: string;
  location: string;
  capacity: number;
  facilities: string[];
  pricePerHour: number;
  images: string[];
}

export interface ISportBooking extends IBaseEntity {
  userId: string;
  courtId: string;
  startTime: Date;
  endTime: Date;
  totalPrice: number;
  status: 'confirmed' | 'cancelled' | 'completed';
}

export interface IPost extends IBaseEntity {
  userId: string;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  shares: number;
}

export interface IComment extends IBaseEntity {
  postId: string;
  userId: string;
  content: string;
  likes: number;
}

export interface IFollow extends IBaseEntity {
  followerId: string;
  followingId: string;
}

export interface INotification extends IBaseEntity {
  userId: string;
  type: 'like' | 'comment' | 'follow' | 'message';
  content: string;
  relatedId: string;
  read: boolean;
}
