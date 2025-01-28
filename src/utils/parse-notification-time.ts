import { DateTime } from 'luxon';

export function parseNotificationTime(date: string) {
  const value = DateTime.fromISO(date);
  const now = DateTime.fromJSDate(new Date(Date.now()));
  const yesterday = now.minus({ day: 1 });
  const time = value.toLocaleString({
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });

  if (value.hasSame(now, 'day')) {
    return `Today at ${time}`;
  } else if (value.hasSame(yesterday, 'day')) {
    return `Yesterday at ${time}`;
  } else if (value.hasSame(now, 'week')) {
    const day = value.toLocaleString({ weekday: 'long' });
    return `${day} at ${time}`;
  } else if (value.hasSame(now, 'year')) {
    const date = value.toLocaleString({
      month: 'short',
      day: 'numeric',
    });

    return `${date} at ${time}`;
  } else {
    const date = value.toLocaleString({
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    return `${date} at ${time}`;
  }
}
