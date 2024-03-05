import { createSlice } from '@reduxjs/toolkit';

const initialState = { ticket: null };

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    addTicket: (state, { payload }) => {
      state.ticket = payload;
    },
  },
});

export const { addTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
