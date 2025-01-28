import { prependZeroToNumber } from './prepend-zero-to-number';

/**
 * A function that takes time in minutes and returns a string of the format xh ym where x is hour and y is minutes
 * @param time
 * @returns h m
 */
export function parseMinutes(time: number): string {
  const hrs = `${Math.floor(time / 60)}`;
  const mins = `${time % 60}`;

  return `${hrs}hr ${mins}m`;
}

export function parseSeconds(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds - hrs * 3600) / 60);
  const remainingSecs = seconds - hrs * 3600 - mins * 60;

  return `${hrs ? hrs + ':' : ''}${prependZeroToNumber(mins.toString())}:${prependZeroToNumber(
    remainingSecs.toString(),
  )}`;
}
