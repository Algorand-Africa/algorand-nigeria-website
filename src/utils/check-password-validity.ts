/**
 * @description This checks if a given password passes the basic criteria for strong
 * passwords.
 * @param password The password whose validity is to be checked.
 * @returns An object containing a message field
 * that holds a description of the criteria not passed and an isValid field that holds a
 * boolean that is true for a strong password and false for a weak one.
 */
export const checkPasswordValidity = (password: string) => {
  let message = '';
  let isValid = true;

  if (!/(?=.*?[A-Z])/.test(password)) {
    message = 'Password must contain at least one uppercase alphabet.';
    isValid = false;
  } else if (!/(?=.*?[a-z])/.test(password)) {
    message = 'Password must contain at least one lowercase alphabet.';
    isValid = false;
  } else if (!/(?=.*?[0-9])/.test(password)) {
    message = 'Password must contain at least one digit.';
    isValid = false;
  } else if (!/(?=.*?[ #?!@$%^.&*-])/.test(password)) {
    message = "Password must contain at least one special character like '#?!@$%^&*-'.";
    isValid = false;
  }

  return { message, isValid };
};
