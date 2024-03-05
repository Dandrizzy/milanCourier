import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from '../Features/ticketSlice';

export const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});
