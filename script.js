let questions = document.getElementsByClassName('questions');
let buttons = document.querySelectorAll('.button'); // Using querySelectorAll to get all buttons
let answers = document.getElementsByClassName('answers');

// Iterate through each element with the class 'questions'
for (let i = 0; i < questions.length; i++) {
    // Add a click event listener to each element
    questions[i].addEventListener('click', function() {

        // Toggle background image for the clicked button
        buttons[i].style.backgroundImage = buttons[i].style.backgroundImage.includes('minus') ?
            "url('assets/images/icon-plus.svg')" :
            "url('assets/images/icon-minus.svg')";

        // Toggle visibility for the corresponding answer
        if (answers[i].hasAttribute('hidden')) {
            answers[i].removeAttribute('hidden');
        } else {
            answers[i].setAttribute('hidden', 'true');
        }
    });
}