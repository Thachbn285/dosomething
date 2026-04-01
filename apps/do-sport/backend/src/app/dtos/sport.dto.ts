// Do Sport - DTOs

export class CreateCourtDto {
    name: string;
    location: string;
    capacity: number;
    facilities: string[];
    pricePerHour: number;
    images: string[];
}

export class CourtResponseDto {
    id: string;
    name: string;
    location: string;
    capacity: number;
    facilities: string[];
    pricePerHour: number;
    images: string[];
    averageRating: number;
    createdAt: Date;
}

export class CreateBookingDto {
    userId: string;
    courtId: string;
    startTime: Date;
    endTime: Date;
}

export class BookingResponseDto {
    id: string;
    userId: string;
    courtId: string;
    startTime: Date;
    endTime: Date;
    totalPrice: number;
    status: 'confirmed' | 'cancelled' | 'completed';
    confirmationCode: string;
    createdAt: Date;
}

export class CheckAvailabilityDto {
    courtId: string;
    startTime: Date;
    endTime: Date;
}

export class AvailabilityResponseDto {
    courtId: string;
    available: boolean;
    pricePerHour: number;
    estimatedTotal: number;
}
