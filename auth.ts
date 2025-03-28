import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// For NextAuth.js v5 beta, we need to use the direct export
// This creates the auth, signIn, and signOut functions
export const { auth, signIn, signOut, handlers } = NextAuth(authConfig);

// Export the handlers for the API route
export const { GET, POST } = handlers;
