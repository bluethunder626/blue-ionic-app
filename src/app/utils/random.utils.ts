/**
 * @param length length of string to generate
 */
export const randomString = (length: number) => {
  const res = [];
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charLength = char.length;

  for (let i = 0; i < length; i++) {
    res.push(char.charAt(Math.floor(Math.random() * charLength)));
  }

  return res.join('');
};

/**
 * @param range range of number to generate from 0
 */
export const randomNumber = (range: number) => Math.ceil(Math.random() * range);
