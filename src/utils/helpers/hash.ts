import CryptoJS from 'crypto-js';

export function hashPassword(plain: string): string {
  return CryptoJS.SHA256(plain).toString(CryptoJS.enc.Hex);
}
