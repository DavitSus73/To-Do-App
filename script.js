const input = document.querySelector('.add-section input');
const addBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    const actionsDiv = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    
    taskSpan.innerText = text;
    taskSpan.classList.add('task-text');

    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-btn');

    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');

    actionsDiv.classList.add('actions');

    
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(actionsDiv);

    todoList.appendChild(li);

    
    input.value = "";

    taskSpan.onclick = function() {
        taskSpan.classList.toggle('completed');
    };

    deleteBtn.onclick = function() {
        li.remove();
    };

    editBtn.onclick = function() {
        if (editBtn.innerText === "Edit") {
            const currentText = taskSpan.innerText;
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = currentText;
            taskSpan.innerHTML = ""; 
            taskSpan.appendChild(editInput); 
            editBtn.innerText = "Save";
            editBtn.style.backgroundColor = "#1dd1a1"; 
        } else {
            
            const newValue = taskSpan.querySelector('input').value;
            if (newValue.trim() !== "") {
                taskSpan.innerText = newValue;
            }
            editBtn.innerText = "Edit";
            editBtn.style.backgroundColor = "#f39c12"; 
        }
    };
}
addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});