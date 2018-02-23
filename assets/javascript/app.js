
 (function() {
    const myQuestions = [

        {
            question: "Which Live 8 pop performer had hits with Into The Groove and Like A Virgin?",
            answers: {
                a: "Elton John",
                b: "Madonna",
                c: "Paul McCartney",
                d: "Robbie Williams"
            },
            correctAnswer: "b",
        },
          
        {
            question: "Which reggae music legend was backed by The Wailers?",
            answers: {
                a: "Bob Marley",
                b: "Desmond Dekker",
                c: "Jimmy Cliff",
                d: "Johnny Nash"
            },
            correctAnswer: "a",
        },
         
        {
            question: "With which song did Hot Chocolate have a major pop hit in November 1975?",
            answers: {
                a: "You Sassy Thing",
                b: "You Saucy Thing",
                c: "You Sexy Thing",
                d: "You Sixty Thing"
            },
            correctAnswer: "c",
        },
          
        {
            question: "Which pop group from the West Midlands is best known for a Christmas-themed single?",
            answers: {
                a: "ELO",
                b: "Slade",
                c: "The Moody Blues",
                d: "The Move",
            },
            correctAnswer: "b",
        },
         
        {
            question: "Which enduring pop band memorably recorded Satisfaction in 1965?",
            answers: {
                a: "Status Quo",
                b: "The Rolling Stones",
                c: "The Searchers",
                d: "The Who"
            },
            correctAnswer: "b",
        },
         
        {
            question: "Which pop group, led by Justin Hawkins, originated in Lowestoft?",
            answers: {
                a: "The Brightness",
                b: "The Darkness",
                c: "The Dead Of Night",
                d: "The Shade"
            },
            correctAnswer: "b",
        },
         
        {
            question: "Which pop music legend is respectfully remembered as The King?",
            answers: {
                a: "Buddy Holly",
                b: "Elvis Presley",
                c: "Jimi Hendrix",
                d: "Jim Morrison"
            },
            correctAnswer: "b",
        },
         
        {
            question: "Pop singer Ronan Keating first shot to fame as part of which Irish boy band?",
            answers: {
                a: "Boyzone",
                b: "The Bachelors",
                c: "The Clancy Brothers",
                d: "The Dubliners",
            },
            correctAnswer: "a",
        },
         
        {
            question: "How was punk singer John Lydon of The Sex Pistols known?",
            answers: {
                a: "Johnny Foul",
                b: "Johnny Horrible",
                c: "Johnny Nasty",
                d: "Johnny Rotten"
            },
            correctAnswer: "d",
        },
        
        {
            question: "Pop singer, guitarist and songwriter Robert Smith founded which group?",
            answers: {
                a: "The Answer",
                b: "The Cure",
                c: "The Remedy",
                d: "The Solution"
            },
            correctAnswer: "b",
        }
        ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      } 
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  nextButton.addEventListener("click", showNextSlide);
})
();

