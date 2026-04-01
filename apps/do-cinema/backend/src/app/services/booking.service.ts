// Do Cinema - Booking Service Example Implementation

import { Injectable } from '@nestjs/common';
import { CreateBookingDto, BookingResponseDto } from '../dtos/cinema.dto';

@Injectable()
export class BookingService {
    constructor(
        // private dbService: DatabaseService,
        // private cacheService: CacheService,
        // private qrcodeService: QRCodeService,
        // private eventService: EventService
    ) { }

    /**
     * Create booking
     * Flow: Lock seats → Validate payment → Create booking → Generate QR code
     */
    async createBooking(dto: CreateBookingDto): Promise<BookingResponseDto> {
        // 1. Lock seats in Redis (10 minute timeout)
        // const lockKey = `showtime:${dto.showtimeId}:seats:${dto.seats.join(',')}`;
        // const locked = await this.cacheService.setIfNotExists(lockKey, 'locked', 600);
        // if (!locked) {
        //   throw new Error('Seats already booked, please select different seats');
        // }

        // 2. Verify seats are still available in MongoDB
        // const showtime = await this.dbService.showtimes.findById(dto.showtimeId);
        // for (const seat of dto.seats) {
        //   const seatDoc = await this.dbService.seats.findOne({
        //     showtimeId: dto.showtimeId,
        //     seatId: seat,
        //   });
        //   if (seatDoc?.status !== 'available') {
        //     await this.cacheService.delete(lockKey);
        //     throw new Error(`Seat ${seat} is not available`);
        //   }
        // }

        // 3. Calculate total price
        // const totalPrice = showtime.price * dto.seats.length;

        // 4. Create booking
        // const booking = await this.dbService.bookings.create({
        //   userId: dto.userId,
        //   showtimeId: dto.showtimeId,
        //   seats: dto.seats,
        //   totalPrice,
        //   status: 'pending',
        //   createdAt: new Date(),
        // });

        // 5. Generate QR code
        // const qrCode = await this.qrcodeService.generate(`booking:${booking.id}`);

        // 6. Update seat status
        // for (const seat of dto.seats) {
        //   await this.dbService.seats.updateOne(
        //     { showtimeId: dto.showtimeId, seatId: seat },
        //     { status: 'booked', bookingId: booking.id }
        //   );
        // }

        // 7. Publish event for payment processing
        // await this.eventService.publish('booking.created', {
        //   bookingId: booking.id,
        //   userId: dto.userId,
        //   amount: totalPrice,
        // });

        // 8. Cache booking
        // await this.cacheService.set(`booking:${booking.id}`, booking, 3600);

        // return this.mapToResponse(booking, qrCode);
        throw new Error('Not implemented');
    }

    /**
     * Get booking details
     * Flow: Try Redis cache → Query MongoDB if miss → Return with QR code
     */
    async getBooking(id: string): Promise<BookingResponseDto> {
        // 1. Try cache first
        // let booking = await this.cacheService.get(`booking:${id}`);

        // 2. If not cached, query MongoDB
        // if (!booking) {
        //   booking = await this.dbService.bookings.findById(id);
        //   if (!booking) {
        //     throw new NotFoundException(`Booking ${id} not found`);
        //   }
        //   // Cache it
        //   await this.cacheService.set(`booking:${id}`, booking, 3600);
        // }

        // 3. Generate QR code if needed
        // const qrCode = await this.qrcodeService.generate(`booking:${id}`);

        // return this.mapToResponse(booking, qrCode);
        throw new Error('Not implemented');
    }

    /**
     * Validate ticket at cinema
     * Flow: Verify QR code → Check if used → Mark as used → Grant entry
     */
    async validateTicket(
        bookingId: string,
        qrCode: string
    ): Promise<{ valid: boolean; message: string }> {
        // 1. Get booking
        // const booking = await this.dbService.bookings.findById(bookingId);
        // if (!booking) {
        //   return { valid: false, message: 'Invalid booking' };
        // }

        // 2. Verify QR code
        // const verified = await this.qrcodeService.verify(qrCode, `booking:${bookingId}`);
        // if (!verified) {
        //   return { valid: false, message: 'Invalid QR code' };
        // }

        // 3. Check if already used
        // if (booking.status === 'used') {
        //   return { valid: false, message: 'Ticket already used' };
        // }

        // 4. Check if expired
        // const showtime = await this.dbService.showtimes.findById(booking.showtimeId);
        // if (new Date() > showtime.endTime) {
        //   return { valid: false, message: 'Showtime has ended' };
        // }

        // 5. Mark as used
        // await this.dbService.bookings.findByIdAndUpdate(bookingId, {
        //   status: 'used',
        //   usedAt: new Date(),
        // });

        // 6. Invalidate cache
        // await this.cacheService.delete(`booking:${bookingId}`);

        // 7. Publish event
        // await this.eventService.publish('ticket.validated', {
        //   bookingId,
        //   userId: booking.userId,
        // });

        // return { valid: true, message: 'Ticket validated successfully' };
        throw new Error('Not implemented');
    }

    /**
     * Cancel booking
     * Flow: Check cancellation policy → Refund → Release seats → Mark as cancelled
     */
    async cancelBooking(id: string): Promise<BookingResponseDto> {
        // 1. Get booking
        // const booking = await this.dbService.bookings.findById(id);
        // if (!booking) {
        //   throw new NotFoundException(`Booking ${id} not found`);
        // }

        // 2. Check cancellation policy
        // const showtime = await this.dbService.showtimes.findById(booking.showtimeId);
        // const hoursUntilShowtime = (showtime.startTime.getTime() - Date.now()) / (1000 * 60 * 60);
        // const refundPercentage = hoursUntilShowtime < 2 ? 0 : hoursUntilShowtime < 24 ? 50 : 100;

        // 3. Process refund
        // if (refundPercentage > 0) {
        //   await this.eventService.publish('payment.refund', {
        //     bookingId: id,
        //     amount: (booking.totalPrice * refundPercentage) / 100,
        //   });
        // }

        // 4. Release seats
        // for (const seat of booking.seats) {
        //   await this.dbService.seats.updateOne(
        //     { showtimeId: booking.showtimeId, seatId: seat },
        //     { status: 'available', bookingId: null }
        //   );
        // }

        // 5. Update booking status
        // const updated = await this.dbService.bookings.findByIdAndUpdate(id, {
        //   status: 'cancelled',
        //   cancelledAt: new Date(),
        // });

        // 6. Invalidate cache
        // await this.cacheService.delete(`booking:${id}`);

        // return this.mapToResponse(updated);
        throw new Error('Not implemented');
    }

    // Helper methods
    private mapToResponse(
        booking: any,
        qrCode?: string
    ): BookingResponseDto {
        return {
            id: booking.id,
            userId: booking.userId,
            showtimeId: booking.showtimeId,
            seats: booking.seats,
            totalPrice: booking.totalPrice,
            status: booking.status,
            qrCode,
            bookedAt: booking.createdAt,
        };
    }
}
