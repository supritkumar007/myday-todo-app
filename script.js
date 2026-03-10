document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const dateDisplay = document.getElementById('date-display');

    // --- State ---
    let tasks = [];
    let currentFilter = 'all';

    // --- Initialization ---
    init();

    function init() {
        loadTasks();
        renderDate();
        renderTasks();
        setupEventListeners();
    }

    // --- Event Listeners ---
    function setupEventListeners() {
        // Add Task
        addBtn.addEventListener('click', () => addTask());
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTask();
        });

        // Filter Tasks
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // UI Update
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                // Logic Update
                currentFilter = e.target.dataset.filter;
                renderTasks();
            });
        });
    }

    // --- Core Functions ---

    function addTask() {
        const text = taskInput.value.trim();
        if (text === '') return;

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };

        tasks.unshift(newTask); // Add to top
        saveTasks();
        renderTasks();
        
        taskInput.value = '';
        taskInput.focus();
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }

    function toggleComplete(id) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        saveTasks();
        renderTasks();
    }

    function updateTaskText(id, newText) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: newText };
            }
            return task;
        });
        saveTasks();
    }

    // --- Rendering ---

    function renderTasks() {
        taskList.innerHTML = '';
        
        let filteredTasks = tasks;
        if (currentFilter === 'pending') {
            filteredTasks = tasks.filter(t => !t.completed);
        } else if (currentFilter === 'completed') {
            filteredTasks = tasks.filter(t => t.completed);
        }

        if (filteredTasks.length === 0) {
            emptyState.style.display = 'flex';
            taskList.style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            taskList.style.display = 'flex'; // or block/flex depending on css
        }

        filteredTasks.forEach(task => {
            const li = createTaskElement(task);
            taskList.appendChild(li);
        });
    }

    function createTaskElement(task) {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        // Checkbox
        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.className = 'task-checkbox-wrapper';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleComplete(task.id));
        
        checkboxWrapper.appendChild(checkbox);

        // Text (Editable)
        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = task.text;
        textSpan.contentEditable = true;
        
        // Handle Edit Save on Blur or Enter
        textSpan.addEventListener('blur', () => {
            const newText = textSpan.textContent.trim();
            if (newText) {
                updateTaskText(task.id, newText);
            } else {
                // Revert if empty
                textSpan.textContent = task.text;
            }
        });

        textSpan.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                textSpan.blur();
            }
        });

        // Actions
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        // Edit Button (Focuses text)
        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn edit';
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
        editBtn.addEventListener('click', () => {
             textSpan.focus();
             // cursor at end
             document.execCommand('selectAll', false, null);
             document.getSelection().collapseToEnd();
        });

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn delete';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.addEventListener('click', () => {
            // Add fade out animation class if you wanted to here, but for now direct delete
            deleteTask(task.id);
        });

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(checkboxWrapper);
        li.appendChild(textSpan);
        li.appendChild(actionsDiv);

        return li;
    }

    function renderDate() {
        const date = new Date();
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        dateDisplay.textContent = date.toLocaleDateString('en-US', options);
    }

    // --- Local Storage ---
    function saveTasks() {
        localStorage.setItem('my_tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const stored = localStorage.getItem('my_tasks');
        if (stored) {
            tasks = JSON.parse(stored);
        }
    }
});
