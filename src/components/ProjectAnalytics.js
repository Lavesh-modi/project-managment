import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import './ProjectAnalytics.css';

const COLORS = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f'];

const ProjectAnalytics = ({ project }) => {
  console.log(project,"project");
  // Calculate task statistics using correct status values
  const taskStats = {
    total: project.tasks.length,
    completed: project.tasks.filter(task => task.status === 'done').length,
    inProgress: project.tasks.filter(task => task.status === 'in-progress').length,
    todo: project.tasks.filter(task => task.status === 'todo').length
  };
  console.log(taskStats,"taskStats");

  // Prepare data for bar chart
  const taskData = [
    { name: 'To Do', value: taskStats.todo },
    { name: 'In Progress', value: taskStats.inProgress },
    { name: 'Done', value: taskStats.completed }
  ];

  // Prepare data for pie chart
  const pieData = [
    { name: 'To Do', value: taskStats.todo },
    { name: 'In Progress', value: taskStats.inProgress },
    { name: 'Done', value: taskStats.completed }
  ];

  return (
    <div className="project-analytics">
      <h2>Project Analytics</h2>
      
      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Task Status Distribution</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={taskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3498db" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Task Progress</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="analytics-card stats-summary">
          <h3>Quick Stats</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Total Tasks</span>
              <span className="stat-value">{taskStats.total}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Completed</span>
              <span className="stat-value">{taskStats.completed}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">In Progress</span>
              <span className="stat-value">{taskStats.inProgress}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">To Do</span>
              <span className="stat-value">{taskStats.todo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnalytics; 