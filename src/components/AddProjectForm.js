import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProject } from '../store/slices/projectsSlice';
import './AddProjectForm.css';

const AddProjectForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Project name is required')
      .min(3, 'Project name must be at least 3 characters'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters'),
  });

  const initialValues = {
    name: '',
    description: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addProject(values));
    resetForm();
    onClose();
  };

  return (
    <div className="add-project-form">
      <h2>Add New Project</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Project Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className={errors.name && touched.name ? 'error' : ''}
              />
              {errors.name && touched.name && (
                <div className="error-message">{errors.name}</div>
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

            <div className="form-actions">
              <button type="submit" className="submit-button">
                Add Project
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

export default AddProjectForm; 