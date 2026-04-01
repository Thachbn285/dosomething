// Do Business - Product Service Example Implementation

import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto, ProductResponseDto } from '../dtos/business.dto';

@Injectable()
export class ProductService {
    constructor(
        // private dbService: DatabaseService,
        // private cacheService: CacheService,
        // private eventService: EventService
    ) { }

    /**
     * Create a new product
     * Flow: Validate → Save to PostgreSQL → Cache in Redis → Index for search
     */
    async createProduct(dto: CreateProductDto): Promise<ProductResponseDto> {
        // 1. Validate input
        this.validateProductData(dto);

        // 2. Save to database
        // const product = await this.dbService.products.create({
        //   name: dto.name,
        //   description: dto.description,
        //   price: dto.price,
        //   stock: dto.stock,
        //   category: dto.category,
        //   image: dto.image,
        //   tags: dto.tags,
        //   createdAt: new Date(),
        // });

        // 3. Cache in Redis with 1 hour TTL
        // await this.cacheService.set(`product:${product.id}`, product, 3600);

        // 4. Publish event for search indexing
        // await this.eventService.publish('product.created', { productId: product.id });

        // return this.mapToResponse(product);
        throw new Error('Not implemented');
    }

    /**
     * Get product by ID
     * Flow: Check Redis cache → If miss, query PostgreSQL → Update cache
     */
    async getProduct(id: string): Promise<ProductResponseDto> {
        // 1. Try to get from cache
        // let product = await this.cacheService.get(`product:${id}`);

        // 2. If not in cache, query database
        // if (!product) {
        //   product = await this.dbService.products.findById(id);
        //   if (!product) {
        //     throw new NotFoundException(`Product ${id} not found`);
        //   }
        //   // Update cache
        //   await this.cacheService.set(`product:${id}`, product, 3600);
        // }

        // return this.mapToResponse(product);
        throw new Error('Not implemented');
    }

    /**
     * List products with pagination and filtering
     * Flow: Query PostgreSQL → Cache result → Return paginated response
     */
    async listProducts(
        page: number = 1,
        limit: number = 20,
        category?: string
    ): Promise<{ products: ProductResponseDto[]; total: number }> {
        // 1. Build query
        // const query = {};
        // if (category) {
        //   query.category = category;
        // }

        // 2. Query database
        // const [products, total] = await Promise.all([
        //   this.dbService.products.find(query).skip((page - 1) * limit).limit(limit),
        //   this.dbService.products.countDocuments(query),
        // ]);

        // 3. Cache category list
        // if (category) {
        //   await this.cacheService.set(`products:${category}:${page}`, products, 1800);
        // }

        // return {
        //   products: products.map(p => this.mapToResponse(p)),
        //   total,
        // };
        throw new Error('Not implemented');
    }

    /**
     * Update product
     * Flow: Update PostgreSQL → Invalidate cache → Publish event
     */
    async updateProduct(
        id: string,
        dto: UpdateProductDto
    ): Promise<ProductResponseDto> {
        // 1. Get existing product
        // const product = await this.dbService.products.findById(id);
        // if (!product) {
        //   throw new NotFoundException(`Product ${id} not found`);
        // }

        // 2. Update fields
        // const updates = {};
        // if (dto.name) updates.name = dto.name;
        // if (dto.price !== undefined) updates.price = dto.price;
        // if (dto.stock !== undefined) updates.stock = dto.stock;

        // 3. Save to database
        // const updated = await this.dbService.products.findByIdAndUpdate(id, updates);

        // 4. Invalidate cache
        // await this.cacheService.delete(`product:${id}`);

        // 5. Publish event
        // await this.eventService.publish('product.updated', {
        //   productId: id,
        //   changes: updates,
        // });

        // return this.mapToResponse(updated);
        throw new Error('Not implemented');
    }

    /**
     * Delete product
     * Flow: Soft delete → Invalidate cache → Publish event
     */
    async deleteProduct(id: string): Promise<void> {
        // 1. Soft delete (mark as deleted, don't remove)
        // await this.dbService.products.findByIdAndUpdate(id, {
        //   deleted: true,
        //   deletedAt: new Date(),
        // });

        // 2. Invalidate cache
        // await this.cacheService.delete(`product:${id}`);

        // 3. Publish event
        // await this.eventService.publish('product.deleted', { productId: id });
    }

    // Helper methods
    private validateProductData(dto: CreateProductDto): void {
        if (!dto.name || dto.name.trim().length === 0) {
            throw new Error('Product name is required');
        }
        if (dto.price < 0) {
            throw new Error('Price must be >= 0');
        }
        if (dto.stock < 0) {
            throw new Error('Stock must be >= 0');
        }
    }

    private mapToResponse(product: any): ProductResponseDto {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            category: product.category,
            image: product.image,
            tags: product.tags,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
        };
    }
}
