import React from 'react';
import { useDrag } from 'react-dnd';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`task-card ${isDragging ? 'task-card-dragging' : ''}`}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.assignee && (
        <div className="task-assignee">
          Assigned to: {task.assignee}
        </div>
      )}
    </div>
  );
};

export default TaskCard; 