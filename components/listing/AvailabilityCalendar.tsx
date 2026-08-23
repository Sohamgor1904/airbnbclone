'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

interface AvailabilityCalendarProps {
  location: string;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  onDatesChange: (checkIn: Date | null, checkOut: Date | null) => void;
}

export const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  location,
  checkInDate,
  checkOutDate,
  onDatesChange,
}) => {
  // Base month index (October 2026 by default)
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(9); // 0-indexed: 9 = October

  const shortLocation = location.split(',')[0] || 'Candolim';

  // Calculate number of nights
  const nightsCount =
    checkInDate && checkOutDate
      ? Math.max(
          1,
          Math.round(
            (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
          )
        )
      : 5;

  const formatDateString = (d: Date | null) => {
    if (!d) return '';
    const day = d.getDate();
    const month = d.toLocaleString('en-US', { month: 'short' });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formattedRange =
    checkInDate && checkOutDate
      ? `${formatDateString(checkInDate)} - ${formatDateString(checkOutDate)}`
      : '18 Oct 2026 - 23 Oct 2026';

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const handleDateClick = (date: Date) => {
    // If no check-in set or both set, set check-in
    if (!checkInDate || (checkInDate && checkOutDate)) {
      onDatesChange(date, null);
    } else if (checkInDate && !checkOutDate) {
      if (date < checkInDate) {
        onDatesChange(date, null);
      } else if (date.getTime() === checkInDate.getTime()) {
        onDatesChange(null, null);
      } else {
        onDatesChange(checkInDate, date);
      }
    }
  };

  const handleClearDates = () => {
    onDatesChange(new Date(2026, 9, 18), new Date(2026, 9, 23));
  };

  // Helper to generate days grid for a given year & month
  const getMonthGrid = (year: number, month: number) => {
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  };

  const month1Grid = getMonthGrid(currentYear, currentMonth);
  const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  const nextMonthIndex = currentMonth === 11 ? 0 : currentMonth + 1;
  const month2Grid = getMonthGrid(nextMonthYear, nextMonthIndex);

  const month1Name = new Date(currentYear, currentMonth, 1).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const month2Name = new Date(nextMonthYear, nextMonthIndex, 1).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  // Blocked dates rule for demo matching screenshot (dates before Oct 1, or specific dates like Nov 18-24 grayed/struck)
  const isDateBlocked = (d: Date) => {
    // Dates in November 18-24 are blocked in reference
    if (d.getFullYear() === 2026 && d.getMonth() === 10 && d.getDate() >= 18 && d.getDate() <= 24) {
      return true;
    }
    // Dates in November 29-30 are blocked in reference
    if (d.getFullYear() === 2026 && d.getMonth() === 10 && d.getDate() >= 29) {
      return true;
    }
    return false;
  };

  const isSameDay = (d1: Date | null, d2: Date | null) => {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const isDateInRange = (d: Date) => {
    if (!checkInDate || !checkOutDate) return false;
    return d > checkInDate && d < checkOutDate;
  };

  return (
    <div id="availability-calendar" className="border-b border-airbnb-border py-8 space-y-6">
      {/* Header Info */}
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-airbnb-charcoal">
          {checkInDate && checkOutDate ? `${nightsCount} nights in ${shortLocation}` : `Select dates in ${shortLocation}`}
        </h2>
        <p className="text-sm font-medium text-airbnb-muted">{formattedRange}</p>
      </div>

      {/* Two Month Calendar Grid Container */}
      <div className="space-y-4">
        {/* Navigation Bar Header */}
        <div className="flex items-center justify-between text-base font-semibold text-airbnb-charcoal px-2">
          <button
            onClick={handlePrevMonth}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-airbnb-light transition"
          >
            <ChevronLeft className="h-5 w-5 text-airbnb-charcoal" />
          </button>
          <div className="flex-1 grid grid-cols-2 text-center px-4">
            <span>{month1Name}</span>
            <span>{month2Name}</span>
          </div>
          <button
            onClick={handleNextMonth}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-airbnb-light transition"
          >
            <ChevronRight className="h-5 w-5 text-airbnb-charcoal" />
          </button>
        </div>

        {/* Calendar Dual Grid */}
        <div className="grid grid-cols-2 gap-12 pt-2">
          {/* Month 1 Grid */}
          <div>
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-airbnb-muted mb-3">
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-semibold">
              {month1Grid.map((date, idx) => {
                if (!date) return <div key={`m1-empty-${idx}`} className="h-10 w-10" />;

                const isCheckIn = isSameDay(date, checkInDate);
                const isCheckOut = isSameDay(date, checkOutDate);
                const inRange = isDateInRange(date);
                const blocked = isDateBlocked(date);

                let cellClass = 'h-10 w-10 mx-auto flex items-center justify-center rounded-full text-sm font-semibold transition cursor-pointer ';

                if (isCheckIn || isCheckOut) {
                  cellClass += 'bg-black text-white font-bold ';
                } else if (inRange) {
                  cellClass = 'h-10 w-full flex items-center justify-center bg-gray-100 text-black text-sm font-semibold cursor-pointer ';
                } else if (blocked) {
                  cellClass += 'text-gray-300 line-through cursor-not-allowed ';
                } else {
                  cellClass += 'text-airbnb-charcoal hover:border hover:border-black ';
                }

                return (
                  <div key={date.toISOString()} className="flex items-center justify-center">
                    <button
                      disabled={blocked}
                      onClick={() => handleDateClick(date)}
                      className={cellClass}
                    >
                      {date.getDate()}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Month 2 Grid */}
          <div>
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-airbnb-muted mb-3">
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-semibold">
              {month2Grid.map((date, idx) => {
                if (!date) return <div key={`m2-empty-${idx}`} className="h-10 w-10" />;

                const isCheckIn = isSameDay(date, checkInDate);
                const isCheckOut = isSameDay(date, checkOutDate);
                const inRange = isDateInRange(date);
                const blocked = isDateBlocked(date);

                let cellClass = 'h-10 w-10 mx-auto flex items-center justify-center rounded-full text-sm font-semibold transition cursor-pointer ';

                if (isCheckIn || isCheckOut) {
                  cellClass += 'bg-black text-white font-bold ';
                } else if (inRange) {
                  cellClass = 'h-10 w-full flex items-center justify-center bg-gray-100 text-black text-sm font-semibold cursor-pointer ';
                } else if (blocked) {
                  cellClass += 'text-gray-300 line-through cursor-not-allowed ';
                } else {
                  cellClass += 'text-airbnb-charcoal hover:border hover:border-black ';
                }

                return (
                  <div key={date.toISOString()} className="flex items-center justify-center">
                    <button
                      disabled={blocked}
                      onClick={() => handleDateClick(date)}
                      className={cellClass}
                    >
                      {date.getDate()}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls Row */}
      <div className="flex items-center justify-between pt-4">
        <button
          aria-label="Toggle keyboard layout"
          className="p-2 rounded-lg border border-airbnb-border hover:border-black text-airbnb-charcoal transition"
        >
          <Keyboard className="h-4 w-4" />
        </button>

        <button
          onClick={handleClearDates}
          className="text-sm font-semibold text-airbnb-charcoal underline hover:opacity-80 transition"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
};
