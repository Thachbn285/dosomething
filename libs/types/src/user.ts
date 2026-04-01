export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'USER' | 'LIBRARIAN';
  avatar?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
