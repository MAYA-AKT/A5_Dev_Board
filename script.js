
    const completeButtons = document.querySelectorAll('.complete_btn');
    let taskCount = document.getElementById('task_count');
   
    console.log(taskCount.innerText);
    
    completeButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('click');

            alert('board update successfully');
            button.disabled = true;
            button.style.backgroundColor = 'gray';
            button.style.cursor = 'not-allowed';
          
            let count = taskCount.innerText - 1;
            taskCount.innerText = count;
        });
    });
