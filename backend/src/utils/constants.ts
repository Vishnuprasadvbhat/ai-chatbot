// Constants for authentication and cookie management
export const COOKIE_NAME = 'auth_token';

// set date of expiry for the token
export const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 7); // 7 days from now

// Cookie options for secure token storage
export const COOKIE_OPTIONS = {
  path : '/',
  httpOnly: true,
  domain : "localhost",
  expires : expireDate,
  signed : true,
  secure: process.env.NODE_ENV === 'production',
}