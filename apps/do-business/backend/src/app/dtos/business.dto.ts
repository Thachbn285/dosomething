// Do Business - Product Module

export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    image?: string;
    tags?: string[];
}

export class ProductResponseDto {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    image?: string;
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
}

export class UpdateProductDto {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    category?: string;
    image?: string;
    tags?: string[];
}

// Order Management

export class CreateOrderDto {
    userId: string;
    items: OrderItemDto[];
    shippingAddressId: string;
    paymentMethod: string;
}

export class OrderItemDto {
    productId: string;
    quantity: number;
}

export class OrderResponseDto {
    id: string;
    userId: string;
    items: OrderItemResponseDto[];
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
}

export class OrderItemResponseDto {
    productId: string;
    quantity: number;
    price: number;
    subtotal: number;
}

// Inventory Management

export class InventoryDto {
    productId: string;
    quantity: number;
    warehouseId?: string;
    lastRestocked?: Date;
}

export class UpdateInventoryDto {
    productId: string;
    quantityChange: number;
    reason: 'sale' | 'return' | 'restock' | 'adjustment';
}

// Payment

export class ProcessPaymentDto {
    orderId: string;
    amount: number;
    paymentMethod: string;
    cardToken?: string;
}

export class PaymentResponseDto {
    id: string;
    orderId: string;
    amount: number;
    status: 'pending' | 'completed' | 'failed' | 'refunded';
    transactionId: string;
    createdAt: Date;
}
