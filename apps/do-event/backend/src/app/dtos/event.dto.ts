// Do Event - DTOs

export class CreateEventDto {
    title: string;
    description: string;
    date: Date;
    location: string;
    capacity: number;
    ticketPrice: number;
    image: string;
}

export class EventResponseDto {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    capacity: number;
    availableTickets: number;
    ticketPrice: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

export class CreateEventTicketDto {
    eventId: string;
    userId: string;
    quantity: number;
}

export class EventTicketResponseDto {
    id: string;
    eventId: string;
    userId: string;
    ticketNumber: string;
    qrCode: string;
    status: 'active' | 'used' | 'cancelled';
    purchaseDate: Date;
}

export class ValidateTicketDto {
    ticketNumber: string;
    eventId: string;
}

export class TicketValidationDto {
    valid: boolean;
    ticketNumber: string;
    eventTitle: string;
    eventDate: Date;
    message: string;
}
