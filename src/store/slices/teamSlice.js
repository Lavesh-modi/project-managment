import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [
    {
      id: 1,
      name: 'John Doe',
      role: 'Project Manager',
      email: 'john@example.com',
      avatar: null,
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Developer',
      email: 'jane@example.com',
      avatar: null,
    },
  ],
  loading: false,
  error: null,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.members.push({
        ...action.payload,
        id: Date.now(),
      });
    },
    updateMember: (state, action) => {
      const index = state.members.findIndex(m => m.id === action.payload.id);
      if (index !== -1) {
        state.members[index] = { ...state.members[index], ...action.payload };
      }
    },
    deleteMember: (state, action) => {
      state.members = state.members.filter(m => m.id !== action.payload);
    },
  },
});

export const { addMember, updateMember, deleteMember } = teamSlice.actions;
export default teamSlice.reducer; 