let submit = document.querySelector("#submit");
function saveInputValue() {
    // Get the input element by its ID
    var usernameInput1 = document.getElementById('username1');
    var usernameInput2 = document.getElementById('username2');

    // Access the value property of the input element
    var inputValue1 = usernameInput1.value;
    var inputValue1 = usernameInput2.value;


    // Display the value in the console (you can do further processing here)
    console.log('Input Value:', inputValue1);
    console.log('Input Value:', inputValue2);


    // Optionally, you can save the value in a variable for later use
    // For example, you can define a global variable or use it in other functions
    window.savedInputValue = inputValue1;
    window.savedInputValue = inputValue2;
   
}
function openNewPage() {
    window.location.href = 'game.html';
}

submitbutn.addEventListener("click",openNewPage);

// submitbutn.addEventListener("click", saveInputValue);

