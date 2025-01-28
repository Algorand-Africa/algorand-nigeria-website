/**
 * @description This function accepts a string input and inserts
 * one white space after every four characters.
 * @param value String input to be formatted.
 * @returns A string value.
 */
const addSpacingToCardNumber = (value: string) => {
  const cleanedUpString = value.replaceAll(' ', '');
  let finalValue = '';

  for (let i = 0; i < cleanedUpString.length; i++) {
    const shouldAddSpacing = i % 4 === 0 && i !== 0;
    finalValue += `${shouldAddSpacing ? ' ' : ''}${cleanedUpString[i]}`;
  }

  return finalValue;
};

/**
 * @description This function removes all white spaces from a string.
 * @param value String to be formatted.
 * @returns A string value.
 */
const removeSpacingFromCardNumber = (value: string) => {
  return value.replaceAll(' ', '');
};

export const beautifyCardNumber = {
  addSpacingToCardNumber,
  removeSpacingFromCardNumber,
};
