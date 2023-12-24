document.addEventListener('DOMContentLoaded', function () {
    const showMenuButton = document.querySelector('.addTask');
    const menu = document.querySelector('.menu');
    const addTask = document.querySelector('.addTask_menu');
    const parent = document.querySelector('.wrapper');
    const taskInput = document.querySelector('.write_task');
    const validation = document.querySelector('.validation');
    let taskBlock; // Объявляем переменную здесь
;

    function showMenuAndHide() {
        menu.classList.toggle('hidden');
    }

    function validateInput() {
        if (!taskInput.value) {
            validation.textContent = 'Это поле не может быть пустым!';
            return false;
        }
        return true;
    }

    function createTask() {
        if (validateInput()) {
            taskBlock = document.createElement('div');
            taskBlock.classList.add('task');
            parent.prepend(taskBlock);
        }
    }

    function createText() {
        if (validateInput()) {
            let textBlock = document.createElement('div');
            let text = taskInput.value;
            textBlock.classList.add('text');
            textBlock.textContent = text;
            taskBlock.prepend(textBlock);
        }
    }

    function createDoneButton() {
        if (validateInput()) {
            let doneButton = document.createElement('button');
            doneButton.classList.add('done');
            doneButton.textContent = 'Готово';
            taskBlock.prepend(doneButton);

        }
    }

    function handleButtonClick(event) {
        const clickedButton = event.target;
        const taskToRemove = clickedButton.closest('.task');
        if (taskToRemove) {
            taskToRemove.remove();
        }
    }

    showMenuButton.addEventListener('click', showMenuAndHide);
    addTask.addEventListener('click', function () {
        createTask();
        createDoneButton();
        createText();
    });

    parent.addEventListener('click', handleButtonClick);
});
