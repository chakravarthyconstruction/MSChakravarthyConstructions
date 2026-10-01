import { useState, useEffect } from 'react';

export interface ISTStatus {
  isOpen: boolean;
  statusText: string;
  nextChangeText: string;
  formattedCurrentTime: string;
}

export function useISTStatus(): ISTStatus {
  const [status, setStatus] = useState<ISTStatus>({
    isOpen: false,
    statusText: 'Closed',
    nextChangeText: 'Opens Mon at 9:00 AM IST',
    formattedCurrentTime: '',
  });

  useEffect(() => {
    function computeStatus() {
      // Get current time in UTC
      const now = new Date();
      // IST is UTC + 5 hours 30 minutes
      const istOffsetMs = 5.5 * 60 * 60 * 1000;
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utcMs + istOffsetMs);

      const day = istDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentMinuteOfDay = hours * 60 + minutes;

      const openMinute = 9 * 60; // 9:00 AM
      const closeMinute = 18 * 60; // 6:00 PM

      const isWeekdayOrSaturday = day >= 1 && day <= 6;
      const isOpen = isWeekdayOrSaturday && currentMinuteOfDay >= openMinute && currentMinuteOfDay < closeMinute;

      const formattedCurrentTime = istDate.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }) + ' IST';

      let statusText = 'Closed';
      let nextChangeText = '';

      if (isOpen) {
        statusText = 'Open Now';
        const remainingMinutes = closeMinute - currentMinuteOfDay;
        const remH = Math.floor(remainingMinutes / 60);
        const remM = remainingMinutes % 60;
        nextChangeText = `Closes in ${remH > 0 ? `${remH}h ` : ''}${remM}m (at 6:00 PM IST)`;
      } else {
        statusText = 'Closed';
        if (day === 0) {
          nextChangeText = 'Opens Monday at 9:00 AM IST';
        } else if (currentMinuteOfDay < openMinute) {
          nextChangeText = 'Opens today at 9:00 AM IST';
        } else {
          // After 6 PM
          if (day === 6) {
            nextChangeText = 'Opens Monday at 9:00 AM IST';
          } else {
            nextChangeText = 'Opens tomorrow at 9:00 AM IST';
          }
        }
      }

      setStatus({
        isOpen,
        statusText,
        nextChangeText,
        formattedCurrentTime,
      });
    }

    computeStatus();
    const interval = setInterval(computeStatus, 30000); // recheck every 30s
    return () => clearInterval(interval);
  }, []);

  return status;
}
