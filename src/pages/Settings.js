import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Settings.css';

const Settings = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    theme: Yup.string().oneOf(['light', 'dark'], 'Invalid theme'),
  });

  const initialValues = {
    name: 'John Doe',
    email: 'john@example.com',
    theme: 'light',
  };

  const handleSubmit = (values) => {
    console.log('Settings updated:', values);
    // Here you would typically dispatch an action to update the settings
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      
      <div className="settings-section">
        <h2>User Preferences</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="settings-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={errors.email && touched.email ? 'error' : ''}
                />
                {errors.email && touched.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="theme">Theme</label>
                <Field as="select" id="theme" name="theme">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </Field>
              </div>

              <button type="submit" className="save-button">
                Save Changes
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Settings; 