let totalTasks = [];
const taskList = document.getElementById('taskList');
const addInput = document.getElementById('addInput');
// const taskCounter = document.getElementById('taskCounter');
const btnAdd = document.getElementById('btn1');

console.log("hey");

function addTaskToDom(task){
    const li = document.createElement('li');

    li.innerHTML = `
        <input type ="checkbox" id="${task.id}" class="custom-checkbox checkbox">
        <label for="${task.id}">${task.text}</label>
    `;
    taskList.append(li);
}

function renderList(){
    taskList.innerHTML = '';

    for(let i=0; i<totalTasks.length; i++){
        addTaskToDom(totalTasks[i]);
    }
};

function markTaskAsComplete(taskId){
    const task = totalTasks.filter(function(task){
        return task.id === taskId;
    });
    if(task.length > 0){
        const currentTask = task[0];

        currentTask.done = !currentTask.done;
        renderList();
        showNotification('Task selected');
        return;
    }
};

function deleteTask(taskId){
    const newTasks = totalTasks.filter(function(task){
        return task.id !== taskId;
    })

    totalTasks = newTasks;
    renderList();
    showNotification('Task deleted successfully');
};

function addTask(task){
    if(task){
        totalTasks.push(task);
        renderList();
        showNotification('Task added successfully');
    }
    showNotification('Task cannot be added');
};

function showNotification(text){
    alert(text);
};

btnAdd.addEventListener('click', function(){
    const text = addInput.value;
    console.log('bye');
    console.log(text);
    if(!text){
        showNotification('Task text can not be empty');
        return;
    }

    const task = {
        text: text,
        id: Date.now().toString(),
        done: false
    }

    addInput.value = '';
    addTask(task);
});

// function handleClickListener(e){
//     const target = e.target;
//     console.log(target);

//     if(target.className === 'custom-checkbox'){
//         const taskId = target.id;
//         markTaskAsComplete(taskId);
//         return;
//     }
//     if(target.className === 'btn2'){
//         const taskId = target.id;
//         if(taskId.done === true){
//             deleteTask(taskId);
//         }
//     }
// }

const complete = document.getElementsByClassName('custom-checkbox');

complete.addEventListener('click', function(){
    const taskId = complete.Id;
    console.log(taskId + "lol");
    markTaskAsComplete(taskId);
    return;
});



