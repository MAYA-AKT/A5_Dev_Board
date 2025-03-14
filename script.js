    let date =  document.getElementById('date');
    const completeButtons = document.querySelectorAll('.complete_btn');
    let taskCount = document.getElementById('task_count');
    let number =document.getElementById('number');
    let parentDiv = document.getElementById('parent_div');

  

    // set date
    function formatDate(date) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
        const dayName = days[date.getDay()];
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear(); 
    
        return `${dayName}, ${monthName} ${day} ${year}`;
    }
    const today = new Date();
    const formattedDate = formatDate(today);
    date.innerText = formattedDate;







    // 6 btn click
    completeButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('click');

            alert('board update successfully');
            button.disabled = true;
            button.style.backgroundColor = 'gray';
            button.style.cursor = 'not-allowed';
          
            let dicrease = taskCount.innerText - 1;
            taskCount.innerText = dicrease;

            let currentNumber = parseInt(number.textContent, 10);
            currentNumber += 1;
            number.innerText = currentNumber;

            

            let currTime = new Date().toLocaleTimeString();
            let pera = document.createElement('p');
            pera.innerText = `You have Complete The Task Add Dark Mode at ${currTime}   `;
            pera.classList.add('pera','bgc');
            parentDiv.appendChild(pera);
           



        });
    });
