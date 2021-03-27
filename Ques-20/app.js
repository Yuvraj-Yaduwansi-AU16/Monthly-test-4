const input = document.querySelector('#task-input')
const add = document.querySelector('.btn-success')
const clear = document.querySelector('.btn-danger')
const taskList = document.querySelector('.task-list')


add.addEventListener('click',(e)=>{
    const task = input.value;
    const taskdiv =document.createElement('div')
    const taskpara = document.createElement('p')
    const tasklinks = document.createElement('span')
    taskdiv.className='container d-flex justify-content-between delete-item'
    taskpara.innerText=task;
    taskpara.className= 'fs-1';
    tasklinks.innerHTML = `
    <i class="fas fa-check-circle text-success"></i>
    <i class="fas fa-edit text-primary"></i>
    <i class="far fa-times-circle text-danger"></i>`;
    taskdiv.appendChild(taskpara)
    taskdiv.appendChild(tasklinks)
    taskList.appendChild(taskdiv);


    document.querySelector('#task-input').value='';
    e.preventDefault();
})

clear.addEventListener('click',()=>{
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
})

taskList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-times-circle')){
        e.target.parentElement.parentElement.remove();
    }
    
})

taskList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-edit')){
        const editTask = e.target.parentElement.previousSibling.innerText;
        input.value= editTask;
        e.target.parentElement.parentElement.remove();
    }
    
})

taskList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-check-circle')){
        e.target.parentElement.previousSibling.style.textDecoration='line-through';
        e.target.parentElement.parentElement.style.opacity='0.4';
    }
    
})