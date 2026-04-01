import * as crypto from 'crypto';

// Password utilities
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, hash: string): boolean {
  const [salt, originalHash] = hash.split(':');
  const newHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  return newHash === originalHash;
}

// JWT utilities
export function generateJWT(
  payload: any,
  secret: string,
  expiresIn: string = '24h'
): string {
  // This is a placeholder - use 'jsonwebtoken' package in production
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64');
  const body = Buffer.from(JSON.stringify(payload)).toString('base64');
  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64');
  return `${header}.${body}.${signature}`;
}

// Pagination utilities
export function getPaginationParams(
  page: number = 1,
  limit: number = 20
): { skip: number; take: number } {
  return {
    skip: (page - 1) * limit,
    take: limit,
  };
}

// ID utilities
export function generateId(): string {
  return crypto.randomBytes(12).toString('hex');
}

export function generateOrderCode(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function generateTicketCode(): string {
  return `TKT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
  return phoneRegex.test(phone);
}

// Date utilities
export function getDateRange(
  months: number = 1
): { startDate: Date; endDate: Date } {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - months);
  return { startDate, endDate };
}

// Data transformation utilities
export function omitFields<T extends Record<string, any>>(
  obj: T,
  fields: string[]
): Partial<T> {
  const result = { ...obj };
  fields.forEach((field) => delete result[field]);
  return result;
}

export function pickFields<T extends Record<string, any>>(
  obj: T,
  fields: string[]
): Partial<T> {
  const result: Partial<T> = {};
  fields.forEach((field) => {
    if (field in obj) {
      result[field as keyof T] = obj[field];
    }
  });
  return result;
}
