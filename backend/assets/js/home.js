const btnCreate = document.getElementById('create-task');
const btnRemove = document.getElementById('remove-task');
const createTaskForm = document.getElementById('create-task-form');
const removeTaskForm = document.getElementById('remove-task-form');

btnCreate.addEventListener('click', function(){
    createTaskForm.requestSubmit();
});

btnRemove.addEventListener('click', function(){
    removeTaskForm.submit();
});
