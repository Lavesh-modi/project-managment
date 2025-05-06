import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import { deleteTask } from '../redux/slices/taskSlice';
import EditTaskForm from './EditTaskForm';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task.id));
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return <EditTaskForm task={task} onClose={handleCloseEdit} />;
  }

  return (
    <div
      ref={drag}
      className={`task-card ${isDragging ? 'task-card-dragging' : ''}`}
    >
      <div className="task-header">
        <h3>{task.title}</h3>
        <div className="task-actions">
          <button onClick={handleEdit} className="edit-button">
            Edit
          </button>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
      <div 
        className="task-description"
        dangerouslySetInnerHTML={{ __html: task.description }}
      />
      <div className="task-footer">
        <span className={`task-status ${task.status.toLowerCase()}`}>
          {task.status}
        </span>
        {task.assignee && (
          <span className="task-assignee">Assigned to: {task.assignee}</span>
        )}
      </div>
    </div>
  );
};

export default TaskCard; 