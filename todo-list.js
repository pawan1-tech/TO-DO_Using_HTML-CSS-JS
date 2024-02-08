const todoList = [{
    name:'cook',
    dueDate: '2022-12-22'
}, {
    name:'shopping',
    dueDate: '2023-01-01'
}];

rendertodolist();

function rendertodolist() {
    let todolisthtml = '';

    todoList.forEach((todoObject, index ) => {
        // const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>   
                <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        todolisthtml +=html;

    });
    
    document.querySelector('.js-todo-list')
    .innerHTML = todolisthtml;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                rendertodolist();
            });
        })
}


document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });
    inputElement.value = '';
    rendertodolist();
}