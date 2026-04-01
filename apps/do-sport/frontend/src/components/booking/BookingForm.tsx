'use client';

import { useState } from 'react';
import Button from '../common/Button';

interface BookingFormProps {
  venueId?: string;
  onSubmit?: (data: any) => void;
}

export default function BookingForm({
  venueId: _venueId,
  onSubmit,
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    participants: '1',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Complete Your Booking
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Date */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Participants */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Number of Participants
          </label>
          <select
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          >
            {[...Array(20)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} person{i > 0 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Start Time */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Start Time
          </label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>

        {/* End Time */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            End Time
          </label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-2">
          Special Requests
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any special requirements or notes for the venue..."
          rows={4}
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
        ></textarea>
      </div>

      {/* Price Summary */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Hourly Rate:</span>
          <span className="font-bold">$50/hour</span>
        </div>
        <div className="flex justify-between border-t pt-2">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-2xl font-bold text-primary">$100</span>
        </div>
      </div>

      {/* Terms */}
      <div className="mb-6 flex items-start gap-2">
        <input type="checkbox" id="terms" required className="mt-1" />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the terms and conditions
        </label>
      </div>

      <Button type="submit" className="w-full" size="lg">
        Confirm Booking
      </Button>
    </form>
  );
}
