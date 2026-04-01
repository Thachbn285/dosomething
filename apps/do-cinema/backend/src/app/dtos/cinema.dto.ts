// Do Cinema - DTOs

export class CreateMovieDto {
    title: string;
    description: string;
    releaseDate: Date;
    director: string;
    genres: string[];
    poster: string;
    rating: number;
    duration: number;
}

export class MovieResponseDto {
    id: string;
    title: string;
    description: string;
    releaseDate: Date;
    director: string;
    genres: string[];
    poster: string;
    rating: number;
    duration: number;
    createdAt: Date;
    updatedAt: Date;
}

export class CreateShowtimeDto {
    movieId: string;
    cinemaId: string;
    startTime: Date;
    endTime: Date;
    totalSeats: number;
    price: number;
}

export class ShowtimeResponseDto {
    id: string;
    movieId: string;
    cinemaId: string;
    startTime: Date;
    endTime: Date;
    totalSeats: number;
    availableSeats: number;
    price: number;
    createdAt: Date;
}

export class CreateBookingDto {
    userId: string;
    showtimeId: string;
    seats: string[];
}

export class BookingResponseDto {
    id: string;
    userId: string;
    showtimeId: string;
    seats: string[];
    totalPrice: number;
    status: 'confirmed' | 'cancelled' | 'used';
    qrCode?: string;
    bookedAt: Date;
}

export class SeatStatusDto {
    seatId: string;
    showtimeId: string;
    status: 'available' | 'booked' | 'blocked';
}
