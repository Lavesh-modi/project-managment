import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import AddProjectForm from '../components/AddProjectForm';
import './Dashboard.css';

const Dashboard = () => {
  const [showAddProject, setShowAddProject] = useState(false);
  const projects = useSelector(state => state.projects.projects);
  const tasks = useSelector(state => state.tasks.tasks);

  const taskStats = {
    todo: tasks.filter(task => task.status === 'todo').length,
    'in-progress': tasks.filter(task => task.status === 'in-progress').length,
    done: tasks.filter(task => task.status === 'done').length,
  };
  console.log(taskStats.todo,"taskStats--------------");

  const chartData = [
    { name: 'To Do', value: taskStats.todo },
    { name: 'In Progress', value: taskStats['in-progress'] },
    { name: 'Done', value: taskStats.done },
  ];

  const COLORS = ['#FF8042', '#0088FE', '#00C49F'];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button 
          className="add-project-button"
          onClick={() => setShowAddProject(true)}
        >
          Add New Project
        </button>
      </div>
      
      <div className="dashboard-grid">
        <div className="projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <Link to={`/project/${project.id}`} key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stats">
                  <span>Tasks: {tasks.filter(task => task.projectId === project.id).length}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h2>Task Distribution</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {showAddProject && (
        <div className="modal-overlay">
          <AddProjectForm onClose={() => setShowAddProject(false)} />
        </div>
      )}
    </div>
  );
};

export default Dashboard; 