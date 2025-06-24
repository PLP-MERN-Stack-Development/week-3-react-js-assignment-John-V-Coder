# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🎨 Week 3 Project: Task Manager + API Explorer (React + Tailwind + shadcn/ui)

## 🚀 Objective

Build a responsive and interactive React application using JSX, Tailwind CSS, and reusable components from `shadcn/ui`. This project demonstrates your ability to manage component state, use hooks, fetch API data, and create a clean, user-friendly interface.

---

## 📂 Tasks Completed

### ✅ Task 1: Project Setup
- Initialized project using **Vite**
- Installed **React**, **Tailwind CSS**, and **shadcn/ui**
- Created organized folder structure:
- Set up Tailwind and PostCSS configs
- Routing is not used in this version but is ready for future updates

---

### ✅ Task 2: Component Architecture
- Created **reusable UI components**:
- `Button` – with primary/secondary/outline styles
- `Card` – used to group task form and filters
- `TaskItem` – for displaying each task row
- Built `TaskManager` layout using these components
- Theme and props are used to customize styles

---

### ✅ Task 3: State Management and Hooks
- Built a complete **Task Manager** with:
- Add Task
- Mark as Completed
- Delete Task
- Filter by All, Active, Completed
- Used:
- `useState` for state control
- `useEffect` for initial loading
- `useContext` for theme toggling (light/dark)
- Custom hook `useLocalStorage` for saving tasks persistently

---

### ✅ Task 4: API Integration
- Created a `PostList` component using [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Displayed post title and body using Cards
- Added:
- **Search** by title
- **Loading** indicator
- **Error** message fallback
- Clean responsive list layout

---

### ✅ Task 5: Tailwind CSS Styling
- Fully responsive layout using Tailwind utility classes
- Implemented **light/dark mode toggle** using `useContext`
- Added smooth **transitions/animations** for UI elements
- Used `@shadcn/ui` components styled with Tailwind

---

## 🧪 Final Result

- ✅ Functional Task Manager with filters and persistent storage
- ✅ Functional API Explorer with search and error handling
- ✅ Light/Dark Mode toggle
- ✅ Fully responsive layout for mobile, tablet, and desktop

---

## 🛠️ Setup Instructions

### 1. ✅ Requirements
- Node.js (v18 or newer recommended)
- npm or yarn

### 2. ✅ Installation

Clone the repo:

```bash
git clone https://github.com/John-V-Coder/React-Tailwind-vite.git

screenshorts prove
![alt text](<Screenshot (166).png>) ![alt text](<Screenshot (167).png>) ![alt text](<Screenshot (168).png>)