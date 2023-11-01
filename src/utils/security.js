// src/utils/security.js
import crypto from 'crypto';

/**
 * hashData function 
 * This function takes in data as input, generates a 'sha256' hash from that data, and returns the hash digest in hexadecimal format.
 * 
 * @param {string} data - data to be hashed.
 * @returns {string} - returns hashed data in 'hex' format
 */
export const hashData = (data) => {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
};

/**
 * encryptData function
 * This function takes in data and an encryption key as inputs, generates an 'aes-256-cbc' cipher using the key,
 * updates the cipher with the input data, finalizes the cipher, and returns the encrypted data in hexadecimal format.
 *
 * @param {string} data - the data to be encrypted
 * @param {string} key - the key to use for encryption
 * @returns {string} - returns encrypted data in 'hex' format
 */
export const encryptData = (data, key) => {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

/**
 * decryptData function
 * This function takes in encrypted data and a decryption key as inputs, generates an 'aes-256-cbc' decipher using the key,
 * updates the decipher with the input data, finalizes the decipher, and returns the decrypted data in utf8 format.
 *
 * @param {string} encryptedData - the encrypted data to be decrypted
 * @param {string} key - the key to use for decryption
 * @returns {string} - returns decrypted data in 'utf8' format
 */
export const decryptData = (encryptedData, key) => {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};