export const cleanUpPhoneNumber = (phoneNo: string) => {
  if (phoneNo.startsWith('+2340')) {
    return phoneNo.replace('+2340', '234').trim();
  }

  if (phoneNo.startsWith('2340')) {
    return phoneNo.replace('2340', '234').trim();
  }

  if (phoneNo.startsWith('+234')) {
    return phoneNo.replace('+234', '234').trim();
  }

  if (phoneNo.startsWith('0')) {
    return `234${phoneNo.slice(1)}`.trim();
  }

  return phoneNo.trim();
};
