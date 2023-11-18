// This variable is used to track whether a user is logged in or not.
var logged=true;

// This function is executed when the window has finished loading.
window.onload = function() {
  // Retrieve user information from local storage
    var user = localStorage.getItem("currentUser");
    var userType = localStorage.getItem("userType");

    // Check if a user is logged in
    if(user) {
      // Check the user type and update the name accordingly
      if(userType == "admin") {
        console.log("is admin home")
        document.getElementById("user").textContent = "Admin " + user;
        document.getElementById('admin').style.display='inline-block';
        
      }
      else if(userType == "user") {
        document.getElementById("user").textContent = user;
      }
      else{
        document.getElementById("user").textContent ="User "
      }
    }
    else{
      // If no user is found, set the logged variable to false
        logged=false;
    }
    if (logged) {
        document.getElementById('signup').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
        if(userType == "user"){
           document.getElementById('yourAccount').style.display='block';
           // Hide admin buttons for regular users
           var elements = document.getElementsByClassName('adminbtn');
           for(var i = 0; i < elements.length; i++){
              elements[i].style.display = 'none';
            }
        }
        else{
          document.getElementById('pdfBtn').style.display='inline-block';
        }
    }
    else{
        document.getElementById('user').textContent = '';
        document.getElementById('signup').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('yourAccount').style.display='none';
    }
}


function logout() {
    // Clear the user session
    localStorage.removeItem("currentUser");
    // Then redirect to the login page
    window.location.href = "login.html";
}
/******************************** */
    function removeCard(e) {
      // Prevent the default action of the button
      e.preventDefault();
      // Remove the card
      e.target.closest(".card").remove();
  }
/****************************************** */
//updates the UI by creating a link to a PDF file selected by the user
// The link is configured to open in a new tab ('_blank') and allows the user to download the file with its original name.
function updateLink() {
    var file = document.getElementById('pdfFile').files[0];
    var link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.textContent = file.name;
    link.download = file.name;
    link.target = "_blank";
    document.getElementById('pdfContainer').appendChild(link);
    document.getElementById('pdfContainer').appendChild(document.createElement('br'));
}
/************************************ */
const quizQuestions = [
    {
      question: "Which of the following is not a principle of OOP?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
      correctAnswer: "Compilation"
    },
    {
      question: "What is Inheritance in OOP?",
      options: ["It is a process where one class acquires the properties of another.",
       "It is a process of wrapping data and functions into a single unit.",
        "It is a concept where one task can be performed in different ways",
         " It is a concept of hiding internal details and showing functionality only."],
      correctAnswer: "It is a process where one class acquires the properties of another."
    },
    {
      question: "What is Encapsulation in OOP?",
      options: [" It is a process where one class acquires the properties of another.",
       " It is a process of wrapping data and functions into a single unit.",
        "It is a concept where one task can be performed in different ways.",
         " It is a concept of hiding internal details and showing functionality only."],
      correctAnswer: " It is a process of wrapping data and functions into a single unit."
    }
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    document.getElementById("end-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
    document.getElementById("end-button").style.display = "block";
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
    document.getElementById('score').textContent=score;
  }
  
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);

  /**************************************** */
 
  