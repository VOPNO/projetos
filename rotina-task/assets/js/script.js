const taskInput = document.querySelector('#pergunta');
const bADD = document.querySelector('#button');
taskInput.focus();
let c = 0;

bADD.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
});

function addTask() {
    if (taskInput.value === ''){
        alert('Não inseriu a tarefa.');
    }else {
        c++;
        const taskText = taskInput.value;
        const spanRef = document.querySelector('#spanRef');

        const divIndv = document.createElement('div');
        divIndv.setAttribute('id', 'divIndv');
        divIndv.classList.add('divTaskAdd');
        spanRef.appendChild(divIndv);

         
        const radius = document.createElement('input');
        radius.setAttribute('id', `checkBox${c}`);
        radius.setAttribute('type', 'checkbox');    
        radius.classList.add('taskText');
        radius.classList.add('checkBox');

        /*const taskAdd = document.createElement('p');
        taskAdd.textContent = taskText;
        taskAdd.classList.add('taskText');
        taskAdd.setAttribute('id', 'taskadd')*/

        const removeTask = document.createElement('button');
        removeTask.textContent = 'Deletar';
        removeTask.classList.add('botao');
        removeTask.setAttribute('id', 'removeTask')

        const label = document.createElement('label');
        label.setAttribute('for', `checkBox${c}`);
        label.classList.add('taskText');
        label.textContent = taskText;

        
        divIndv.appendChild(radius);
        divIndv.appendChild(label);
        divIndv.appendChild(removeTask);

        removeTask.addEventListener('click', removerTask);

        taskInput.value = '';
        taskInput.focus();
    };
};

function removerTask(event) {
    const button = event.target;
    const divIndv = button.parentNode;
    const spanRef = divIndv.parentNode;

    spanRef.removeChild(divIndv);
};