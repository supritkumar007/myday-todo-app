# My Day - Dynamic To-Do List Application

A sophisticated, responsive task management application built with vanilla JavaScript to help you organize and manage your daily routines seamlessly. Features a modern glassmorphism design and works beautifully across all devices.

![My Day Todo App]
![HTML5]
![CSS3]
![JavaScript]

## Features

- ** Modern UI/UX** - Premium glassmorphism design with gradients and micro-animations
- ** Dynamic Task Creation** - Add tasks instantly with Enter key or intuitive buttons
- ** Full CRUD Operations** - Create, Read, Update (inline editing), and Delete tasks
- ** Visual Feedback** - Real-time completion status with strikethrough styling and animated checkboxes
- ** Smart Filtering** - Filter tasks by 'All', 'Pending', or 'Completed'
- ** Persistent Storage** - LocalStorage API ensures data remains preserved after browser refresh/close
- ** Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ** Accessible** - Semantic HTML and keyboard-friendly interactions

##  Technologies Used

- **Core:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Vanilla CSS with Glassmorphism and Backdrop Filters
- **Icons:** FontAwesome 6+
- **Typography:** Inter (Google Fonts)
- **Storage:** Browser LocalStorage API

## Key Features Explained

### State Management
The application uses a centralized state-management pattern where the UI accurately reflects the current state of tasks after any operation (creation, deletion, editing).

### Inline Editing
Edit tasks directly on the list item using the `contenteditable` attribute combined with event listeners - no complex modals needed!

### Responsive Design
CSS media queries and flexible units (rem/flexbox) ensure the premium design looks great on all screen sizes.

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/myday-todo-app.git
   cd myday-todo-app
   ```

2. **Open in browser:**
   Simply open `index.html` in your favorite web browser. No build process required!

3. **Optional - Use Live Server:**
   For development, use VS Code's Live Server extension for hot-reload functionality.

## Usage

1. **Add a Task:** Type in the input field and press Enter or click the send button
2. **Complete a Task:** Click the checkbox to mark a task as complete
3. **Edit a Task:** Click directly on the task text to edit inline
4. **Delete a Task:** Click the trash icon to remove a task
5. **Filter Tasks:** Use the filter buttons to view All, Pending, or Completed tasks

## Project Structure

```
myday-todo-app/
├── index.html          # Main HTML structure
├── style.css           # Styling with glassmorphism effects
├── script.js           # JavaScript logic and DOM manipulation
├── project_details.txt # Project documentation
└── README.md           # This file
```

## Design Highlights

- **Glassmorphism Container** - Frosted glass effect with backdrop filters
- **Gradient Background** - Modern color gradients for visual appeal
- **Micro-animations** - Smooth transitions and hover effects
- **Inter Font Family** - Clean, professional typography
- **FontAwesome Icons** - Intuitive icon-based actions

## Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| State Synchronization | Centralized render function with single source of truth |
| Inline Editing | ContentEditable attribute with blur event listeners |
| Responsive Consistency | CSS media queries with flexible units (rem/flexbox) |

## License

This project is created as part of a Software Engineering assignment. Feel free to use it for learning and personal projects.

