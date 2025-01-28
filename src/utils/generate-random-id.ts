export const generateRandomId = (numOfChars = 16) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV0123456789';
  let id = '';

  for (let i = 0; i < +numOfChars; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length - 1);
    id += chars[randomIndex];
  }

  return id;
};
