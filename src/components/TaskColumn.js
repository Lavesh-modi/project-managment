import React from 'react';
import { useDrop } from 'react-dnd';
import './TaskColumn.css';

const TaskColumn = ({ title, children, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      console.log('Dropping into:', title, 'Item:', item);
      onDrop(item.id, title.toLowerCase().replace(' ', '-'));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`task-column ${isOver ? 'task-column-over' : ''}`}
    >
      <h2>{title}</h2>
      <div className="task-list">
        {children}
      </div>
    </div>
  );
};

export default TaskColumn; 