# Project Dashboard

A modern, responsive project management dashboard built with React, Redux, and Recharts. Easily manage projects, tasks, and team members with beautiful analytics, dark mode, and drag-and-drop features.

## Features

- 🗂️ Project and Task Management
- 📊 Interactive Analytics (Bar & Pie Charts)
- 🌙 Dark/Light Theme Toggle
- 📝 Rich Text Editing (React Quill)
- 📦 Redux State Management
- 🖱️ Drag-and-Drop Task Movement
- 🔍 Responsive Design
- 👥 Team Member Assignment

## Tech Stack

- React 18
- Redux Toolkit
- React Router
- Recharts
- React DnD
- Formik & Yup
- React Quill
- CSS Modules & Custom Theming

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd project-dashboard
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
project-dashboard/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components (Dashboard, Projects, Settings)
│   ├── store/           # Redux store & slices
│   ├── context/         # Theme context
│   ├── styles/          # Global and modular styles
│   ├── utils/           # Utility functions
│   ├── data/            # Static data/constants
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
├── public/              # Static assets
├── package.json         # Project config
└── README.md            # Project info
```

## Customization

- **Theme:** Toggle dark/light mode using the sun/moon button in the header. Theme is persisted across sessions.
- **Analytics:** Visualize project progress and task distribution with interactive charts.
- **Forms:** Add/edit projects and tasks with validation and rich text descriptions.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
