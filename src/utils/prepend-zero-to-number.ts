export function prependZeroToNumber(value: string) {
  if (value.length === 1) return '0' + value;
  return value;
}
