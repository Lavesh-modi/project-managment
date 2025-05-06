import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Redesign the company website with modern UI/UX',
      status: 'active',
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Develop a new mobile app for iOS and Android',
      status: 'active',
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Plan and execute the Q3 digital marketing campaign',
      status: 'active',
      createdAt: new Date().toISOString(),
    },
    {
      id: 4,
      name: 'Internal Tool Upgrade',
      description: 'Upgrade internal tools for better productivity',
      status: 'active',
      createdAt: new Date().toISOString(),
    },
    {
      id: 5,
      name: 'Customer Feedback Analysis',
      description: 'Analyze customer feedback and generate insights',
      status: 'active',
      createdAt: new Date().toISOString(),
    },
  ],
  loading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push({
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      });
    },
    updateProject: (state, action) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...action.payload };
      }
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },
  },
});

export const { addProject, updateProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer; 