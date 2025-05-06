import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskColumn from '../components/TaskColumn';
import TaskCard from '../components/TaskCard';
import AddTaskForm from '../components/AddTaskForm';
import { moveTask } from '../store/slices/tasksSlice';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showAddTask, setShowAddTask] = useState(false);
  
  const project = useSelector(state => 
    state.projects.projects.find(p => p.id === parseInt(id))
  );
  const tasks = useSelector(state => 
    state.tasks.tasks.filter(task => task.projectId === parseInt(id))
  );

  const handleDrop = (taskId, newStatus) => {
    dispatch(moveTask({ taskId, newStatus }));
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  const columns = [
    { id: 'todo', title: 'To Do' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'done', title: 'Done' },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="project-details">
        <div className="project-header">
          <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
          <button 
            className="add-task-button"
            onClick={() => setShowAddTask(true)}
          >
            Add New Task
          </button>
        </div>

        <div className="task-board">
          {columns.map(column => (
            <TaskColumn
              key={column.id}
              title={column.title}
              tasks={tasks.filter(task => task.status === column.id)}
              onDrop={handleDrop}
            >
              {tasks
                .filter(task => task.status === column.id)
                .map(task => (
                  <TaskCard key={task.id} task={task} />
                ))}
            </TaskColumn>
          ))}
        </div>

        {showAddTask && (
          <div className="modal-overlay">
            <AddTaskForm 
              projectId={parseInt(id)} 
              onClose={() => setShowAddTask(false)} 
            />
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default ProjectDetails; 