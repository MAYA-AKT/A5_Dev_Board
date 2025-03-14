let buttons = document.querySelectorAll('.complete_btn');

function disableButton(button) {
   
    button.setAttribute("disabled", "");
    console.log('click');
    
}
buttons.forEach(button => {
    button.addEventListener('click', () => disableButton(button));
});

 