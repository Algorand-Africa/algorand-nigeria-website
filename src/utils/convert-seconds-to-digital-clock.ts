export function convertSecondsToDigitalClock(seconds: number): string {
  // Calculate hours, minutes, and remaining seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // Format the components with leading zeros
  const formattedHours = hours > 0 ? hours.toString().padStart(2, '0') + ':' : '';
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  // Combine the components into a digital clock format
  const digitalClock = `${formattedHours}${formattedMinutes}:${formattedSeconds}`;

  return digitalClock;
}
