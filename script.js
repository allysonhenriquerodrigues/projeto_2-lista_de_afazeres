const taskvalue = document.getElementById('task.value')
const taskadd = document.getElementById('new.task')
const list = document.getElementById('task.list')

function addtask() {
  if (taskvalue.value === ''){
    alert('adicione um valor')
  }else{
    const li = document.createElement('li')
    li.textContent = taskvalue.value


   li.onclick = () => li.classList.toggle('deletar');

   li.ondblclick = () => li.remove();

    list.appendChild(li);
    taskvalue.value = '';
  }
  }
