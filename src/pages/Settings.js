import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import './Settings.css';

const Settings = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const initialValues = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  const handleSubmit = (values) => {
    console.log('Settings updated:', values);
    // Here you would typically dispatch an action to update the settings
  };

  // Get team members from Redux
  const teamMembers = useSelector(state => state.team.members);

  // Get theme context
  const { isDarkMode } = useTheme();

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

              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <label style={{ marginBottom: 0 }}>Theme</label>
                <span style={{ fontWeight: 500, color: 'var(--text-secondary, #888)' }}>{isDarkMode ? 'Dark' : 'Light'}</span>
                <ThemeToggle />
              </div>

              <button type="submit" className="save-button">
                Save Changes
              </button>
            </Form>
          )}
        </Formik>

        <div className="team-section">
          <h2>Team Members</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="avatar">
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} />
                  ) : (
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  )}
                </div>
                <div className="member-info">
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
                  <div className="member-email">{member.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 