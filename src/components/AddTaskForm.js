import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/slices/tasksSlice';
import './AddTaskForm.css';

const AddTaskForm = ({ projectId, onClose }) => {
  const dispatch = useDispatch();
  const teamMembers = useSelector(state => state.team.members);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Task title is required')
      .min(3, 'Task title must be at least 3 characters'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters'),
    assignee: Yup.string().nullable(),
  });

  const initialValues = {
    title: '',
    description: '',
    assignee: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addTask({
      ...values,
      projectId,
      status: 'todo',
    }));
    resetForm();
    onClose();
  };

  return (
    <div className="add-task-form">
      <h2>Add New Task</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Task Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                className={errors.title && touched.title ? 'error' : ''}
              />
              {errors.title && touched.title && (
                <div className="error-message">{errors.title}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className={errors.description && touched.description ? 'error' : ''}
              />
              {errors.description && touched.description && (
                <div className="error-message">{errors.description}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="assignee">Assign To</label>
              <Field
                as="select"
                id="assignee"
                name="assignee"
                className={errors.assignee && touched.assignee ? 'error' : ''}
              >
                <option value="">Select Team Member</option>
                {teamMembers.map(member => (
                  <option key={member.id} value={member.id}>
                    {member.name} ({member.role})
                  </option>
                ))}
              </Field>
              {errors.assignee && touched.assignee && (
                <div className="error-message">{errors.assignee}</div>
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">
                Add Task
              </button>
              <button type="button" className="cancel-button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTaskForm; 