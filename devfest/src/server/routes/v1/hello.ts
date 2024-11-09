import { defineEventHandler } from 'h3';

// This is a simple event handler that returns a message to show how an
export default defineEventHandler(() => ({ message: 'Hello World' }));
