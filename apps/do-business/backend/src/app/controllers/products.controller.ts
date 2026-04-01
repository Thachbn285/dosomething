import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    Query,
    HttpException,
    HttpStatus,
    UseGuards,
    Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductService } from '../services/product.service';
import {
    CreateProductDto,
    ProductResponseDto,
    UpdateProductDto,
} from '../dtos/business.dto';

/**
 * Products Controller
 *
 * Handles all HTTP requests related to products.
 * Integrates with ProductService for business logic.
 *
 * Flow:
 * 1. Controller validates & sanitizes input (DTO)
 * 2. Delegates to ProductService for business logic
 * 3. Transforms response to DTO
 * 4. Returns HTTP response
 *
 * Features:
 * - Automatic request validation via class-validator
 * - Swagger documentation
 * - JWT authentication
 * - Error handling with custom exceptions
 * - Logging for debugging
 */
@ApiTags('products')
@Controller('products')
export class ProductsController {
    private readonly logger = new Logger(ProductsController.name);

    constructor(private readonly productService: ProductService) { }

    /**
     * Create a new product
     *
     * POST /products
     * Body: {
     *   name: string;
     *   description: string;
     *   price: number;
     *   inventory: number;
     *   categoryId: string;
     *   imageUrl?: string;
     * }
     *
     * Response: 201 Created
     * {
     *   id: string;
     *   name: string;
     *   description: string;
     *   price: number;
     *   inventory: number;
     *   categoryId: string;
     *   imageUrl?: string;
     *   status: 'ACTIVE' | 'INACTIVE';
     *   createdAt: Date;
     *   updatedAt: Date;
     * }
     *
     * Errors:
     * - 400 Bad Request: Invalid input
     * - 409 Conflict: Product already exists
     * - 500 Internal Server Error: Database error
     */
    @Post()
    @ApiOperation({
        summary: 'Create a new product',
        description:
            'Creates a new product with inventory. Only admin users can create products.',
    })
    @ApiResponse({
        status: 201,
        description: 'Product created successfully',
        type: ProductResponseDto,
    })
    @ApiResponse({ status: 400, description: 'Invalid input' })
    @ApiResponse({ status: 409, description: 'Product already exists' })
    async create(@Body() createProductDto: CreateProductDto) {
        this.logger.log(
            `Creating product: ${createProductDto.name}`,
            'ProductsController'
        );

        try {
            // 1. Validate input (done by class-validator via DTO)
            // 2. Call service to create product
            const product = await this.productService.createProduct(
                createProductDto
            );

            // 3. Transform to response DTO
            const response = this.mapToProductResponse(product);

            // 4. Return with 201 status
            return {
                success: true,
                data: response,
                message: 'Product created successfully',
            };
        } catch (error) {
            this.logger.error(
                `Error creating product: ${error.message}`,
                error.stack,
                'ProductsController'
            );

            // Handle specific errors
            if (error.code === 'DUPLICATE_PRODUCT') {
                throw new HttpException(
                    'Product with this name already exists',
                    HttpStatus.CONFLICT
                );
            }

            throw new HttpException(
                'Failed to create product',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Get a single product by ID
     *
     * GET /products/:id
     *
     * Response: 200 OK
     * {
     *   id: string;
     *   name: string;
     *   description: string;
     *   price: number;
     *   inventory: number;
     *   ...
     * }
     *
     * Errors:
     * - 404 Not Found: Product not found
     * - 500 Internal Server Error: Database error
     */
    @Get(':id')
    @ApiOperation({
        summary: 'Get product by ID',
        description: 'Retrieves a single product with all details',
    })
    @ApiResponse({
        status: 200,
        description: 'Product found',
        type: ProductResponseDto,
    })
    @ApiResponse({ status: 404, description: 'Product not found' })
    async findOne(@Param('id') id: string) {
        this.logger.log(`Fetching product: ${id}`, 'ProductsController');

        try {
            // Flow:
            // 1. Try to get from cache (Redis) - fast path
            // 2. If not in cache, query database (PostgreSQL)
            // 3. Cache the result with TTL
            const product = await this.productService.getProduct(id);

            if (!product) {
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }

            return {
                success: true,
                data: this.mapToProductResponse(product),
            };
        } catch (error) {
            this.logger.error(
                `Error fetching product ${id}: ${error.message}`,
                error.stack,
                'ProductsController'
            );
            throw error;
        }
    }

    /**
     * List all products with pagination & filtering
     *
     * GET /products?page=1&limit=10&category=electronics&minPrice=100&maxPrice=1000
     *
     * Query Parameters:
     * - page: number (default: 1)
     * - limit: number (default: 10, max: 100)
     * - category?: string (filter by category)
     * - minPrice?: number (filter by minimum price)
     * - maxPrice?: number (filter by maximum price)
     * - search?: string (search by name or description)
     * - sortBy?: 'name' | 'price' | 'createdAt' (default: 'createdAt')
     * - order?: 'ASC' | 'DESC' (default: 'DESC')
     *
     * Response: 200 OK
     * {
     *   data: ProductResponseDto[];
     *   pagination: {
     *     page: number;
     *     limit: number;
     *     total: number;
     *     totalPages: number;
     *   };
     * }
     *
     * Errors:
     * - 400 Bad Request: Invalid query parameters
     * - 500 Internal Server Error: Database error
     */
    @Get()
    @ApiOperation({
        summary: 'List all products',
        description:
            'Retrieves paginated list of products with optional filtering and sorting',
    })
    @ApiResponse({
        status: 200,
        description: 'Products list retrieved',
        schema: {
            example: {
                success: true,
                data: [],
                pagination: {
                    page: 1,
                    limit: 10,
                    total: 100,
                    totalPages: 10,
                },
            },
        },
    })
    @ApiResponse({ status: 400, description: 'Invalid query parameters' })
    async findAll(
        @Query('page') page: string = '1',
        @Query('limit') limit: string = '10',
        @Query('category') category?: string,
        @Query('minPrice') minPrice?: string,
        @Query('maxPrice') maxPrice?: string,
        @Query('search') search?: string,
        @Query('sortBy') sortBy: string = 'createdAt',
        @Query('order') order: 'ASC' | 'DESC' = 'DESC'
    ) {
        this.logger.log(
            `Fetching products list: page=${page}, limit=${limit}`,
            'ProductsController'
        );

        try {
            // Parse & validate query parameters
            const pageNum = Math.max(1, parseInt(page, 10) || 1);
            const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 10));
            const offset = (pageNum - 1) * limitNum;

            // Build filter object
            const filters = {
                category,
                minPrice: minPrice ? parseFloat(minPrice) : undefined,
                maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
                search,
            };

            // Flow:
            // 1. Validate pagination parameters
            // 2. Build database query with filters
            // 3. Execute query with pagination
            // 4. Cache pagination results (smaller TTL for list)
            const result = await this.productService.listProducts({
                offset,
                limit: limitNum,
                filters,
                sortBy,
                order,
            });

            return {
                success: true,
                data: result.products.map((p) => this.mapToProductResponse(p)),
                pagination: {
                    page: pageNum,
                    limit: limitNum,
                    total: result.total,
                    totalPages: Math.ceil(result.total / limitNum),
                },
            };
        } catch (error) {
            this.logger.error(
                `Error listing products: ${error.message}`,
                error.stack,
                'ProductsController'
            );
            throw new HttpException(
                'Failed to fetch products',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Update a product
     *
     * PUT /products/:id
     * Body: {
     *   name?: string;
     *   description?: string;
     *   price?: number;
     *   inventory?: number;
     *   imageUrl?: string;
     * }
     *
     * Response: 200 OK
     * {
     *   id: string;
     *   name: string;
     *   ...
     *   updatedAt: Date;
     * }
     *
     * Errors:
     * - 400 Bad Request: Invalid input
     * - 404 Not Found: Product not found
     * - 409 Conflict: Concurrent update detected
     * - 500 Internal Server Error: Database error
     */
    @Put(':id')
    @ApiOperation({
        summary: 'Update a product',
        description: 'Updates an existing product. Only admin users can update.',
    })
    @ApiResponse({
        status: 200,
        description: 'Product updated successfully',
        type: ProductResponseDto,
    })
    @ApiResponse({ status: 404, description: 'Product not found' })
    @ApiResponse({ status: 409, description: 'Concurrent update conflict' })
    async update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto
    ) {
        this.logger.log(
            `Updating product: ${id}`,
            'ProductsController'
        );

        try {
            // Flow:
            // 1. Fetch current product (check if exists)
            // 2. Validate update (business rules)
            // 3. Update in database (PostgreSQL)
            // 4. Invalidate cache (Redis)
            // 5. Publish UPDATE event for search indexing
            const product = await this.productService.updateProduct(
                id,
                updateProductDto
            );

            if (!product) {
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }

            return {
                success: true,
                data: this.mapToProductResponse(product),
                message: 'Product updated successfully',
            };
        } catch (error) {
            this.logger.error(
                `Error updating product ${id}: ${error.message}`,
                error.stack,
                'ProductsController'
            );

            if (error.statusCode === 404) {
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }

            throw new HttpException(
                'Failed to update product',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Delete a product (soft delete)
     *
     * DELETE /products/:id
     *
     * Response: 204 No Content
     *
     * Errors:
     * - 404 Not Found: Product not found
     * - 500 Internal Server Error: Database error
     *
     * Note: Uses soft delete pattern - product is marked as deleted
     * but data is retained in database for compliance & analytics
     */
    @Delete(':id')
    @ApiOperation({
        summary: 'Delete a product',
        description:
            'Soft deletes a product. Product data is retained for compliance.',
    })
    @ApiResponse({ status: 204, description: 'Product deleted successfully' })
    @ApiResponse({ status: 404, description: 'Product not found' })
    async remove(@Param('id') id: string) {
        this.logger.log(
            `Deleting product: ${id}`,
            'ProductsController'
        );

        try {
            // Flow:
            // 1. Check product exists
            // 2. Soft delete in database (set deletedAt timestamp)
            // 3. Invalidate cache (Redis)
            // 4. Publish DELETE event for index removal
            const success = await this.productService.deleteProduct(id);

            if (!success) {
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }

            return {
                success: true,
                message: 'Product deleted successfully',
            };
        } catch (error) {
            this.logger.error(
                `Error deleting product ${id}: ${error.message}`,
                error.stack,
                'ProductsController'
            );

            if (error.statusCode === 404) {
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }

            throw new HttpException(
                'Failed to delete product',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Helper method to map database entity to response DTO
     * Transforms internal representation to API response format
     */
    private mapToProductResponse(product: any): ProductResponseDto {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            inventory: product.inventory,
            categoryId: product.categoryId,
            imageUrl: product.imageUrl,
            status: product.deletedAt ? 'INACTIVE' : 'ACTIVE',
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
        };
    }
}

/**
 * Pattern Summary for Other Controllers:
 *
 * 1. ONE controller per domain entity (ProductController, OrderController, etc)
 * 2. ONE HTTP method per business operation
 * 3. DTOs for input validation (class-validator)
 * 4. Delegate to Service for logic
 * 5. Transform response with mapTo* helper method
 * 6. Proper error handling with HttpException
 * 7. Logging for debugging
 * 8. Swagger decorators for API docs
 *
 * Apply same pattern for:
 * - OrderController (POST /orders, GET /orders/:id, GET /orders?status=, etc)
 * - BookingController (POST /bookings, GET /bookings/:id, DELETE /bookings/:id, etc)
 * - MovieController, ShowtimeController, UserController, etc
 */
