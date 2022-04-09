const btnCreate = document.getElementById('create-task');
const btnRemove = document.getElementById('remove-task');
const createTaskForm = document.getElementById('create-task-form');
const removeTaskForm = document.getElementById('remove-task-form');

btnCreate.addEventListener('click', function(){
    //request submit to trigger html5 validation
    createTaskForm.requestSubmit();
});

btnRemove.addEventListener('click', function(){
    //normal submit without validation
    removeTaskForm.submit();
});

//to change background color on focus
createTaskForm.addEventListener('focus', function(e) {
    e.target.classList.add('blue-bg');
    e.target.parentElement.classList.add('blue-bg');
}, true);

//to revert background color on focus out
createTaskForm.addEventListener('blur', function(e) {
    e.target.classList.remove('blue-bg');
    e.target.parentElement.classList.remove('blue-bg');
}, true);
