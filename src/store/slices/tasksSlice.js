import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: 1,
      projectId: 1,
      title: 'Design Homepage',
      description: 'Create new homepage design with modern UI elements',
      status: 'todo',
      assignee: null,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      projectId: 1,
      title: 'Implement Navigation',
      description: 'Build responsive navigation menu',
      status: 'in-progress',
      assignee: null,
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      projectId: 2,
      title: 'Setup Development Environment',
      description: 'Configure React Native development environment',
      status: 'done',
      assignee: null,
      createdAt: new Date().toISOString(),
    },
    {
      id: 4,
      projectId: 3,
      title: 'Design Campaign Assets',
      description: 'Create banners, social media posts, and email templates for the campaign',
      status: 'todo',
      assignee: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: 5,
      projectId: 3,
      title: 'Launch Campaign',
      description: 'Schedule and launch the campaign across all channels',
      status: 'in-progress',
      assignee: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: 6,
      projectId: 4,
      title: 'Requirements Gathering',
      description: 'Meet with teams to gather requirements for tool upgrades',
      status: 'done',
      assignee: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: 7,
      projectId: 4,
      title: 'Implement New Features',
      description: 'Develop and test new features for the internal tool',
      status: 'todo',
      assignee: null,
      createdAt: new Date().toISOString(),
    },
    {
      id: 8,
      projectId: 5,
      title: 'Collect Feedback',
      description: 'Gather feedback from customers via surveys and support tickets',
      status: 'in-progress',
      assignee: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: 9,
      projectId: 5,
      title: 'Analyze Data',
      description: 'Analyze feedback data and prepare a report',
      status: 'todo',
      assignee: 2,
      createdAt: new Date().toISOString(),
    },
  ],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      });
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    moveTask: (state, action) => {
      const { taskId, newStatus } = action.payload;
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = newStatus;
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer; 