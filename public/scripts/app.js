<<<<<<< HEAD
// const escape = require('./escape.js')

$(() => {
  $.ajax({
    method: "GET",
    url: "/users"
  }).done((users) => {
    console.log(users);
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});


// MAIN QUIZ CONTAINER FUNCTIONALITY TO LOAD QUIZ CARDS //

const createQuizElement = function(quiz) {
  console.log(quiz);
  const $quizElement = `
    <article id="quiz">
      <a class="text-reset" href="/quizzes/${quiz.id}">
        <header>
          <h4>${quiz.name}</h4>
        </header>
      </a>
      <a class="text-reset" href="/quizzes/results/${quiz.id}">
        <footer>
          <h6>Results</h6>
        </footer>
      </a>
    </article>
    `;
  return $quizElement;
};

const renderQuizzes = function(quizzes) {
  // console.log(quizzes)
  const quizArr = [];
  for (let title in quizzes) {
    const quizObj = quizzes[title];
    for (let quiz of quizObj) {
      console.log(quiz);
      quizArr.push(createQuizElement(quiz));
    }
  }
  $('#quizzes-container').append(quizArr);
};

const loadQuizzes = function() {
  $.ajax({
    url: '/quizzes/json',
    method: 'GET',
    dataType: 'JSON'
  }).then(function(response) {
    console.log(response);
    renderQuizzes(response);
  });
};

$(document).ready(() => {
  console.log('ready');
  loadQuizzes();
});

// SPECIFIC QUIZ RENDER //






=======
// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for (user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$(document).ready(function() {
  console.log("READY")

  // $.ajax({
  //   url: '/quizzes',
  //   method: 'POST',
  //   data: $(this).serialize(),
  // })
  //   .then(function() {
  //     // $('#tweet-text').val('');
  //     // $('#char-counter').text(140);
  //     // $.fn.loadTweets();
  //   });

  let shown = false;
  $("#create_new_quiz").on('click', function() {
    if (!shown) {
      console.log("WHEE")
      // $("#nav-new-tweet").html("<strong>Hide</strong> tweet composer");
      // $("#new_quiz_container").slideDown();
      // $("#new_quiz_container").css("display", "block");
      // $("#tweet-text").focus();
      shown = true;
    } else {
      console.log("GOODBYE")
      // $("#nav-new-tweet").html("<strong>Write</strong> a new tweet");
      // $("#new_quiz_container").slideUp();
      // ("#new_quiz_container").css("display", "none");
      shown = false;
    }
  });
})

  // $.ajax({
  //   method: "GET",
  //   url: "/quizzes/new"
  // }).then(())


  // $.fn.loadNewQuizForm = function() {
  //   $.ajax('/quizzes/new', { method: 'GET' })
  //     .then(function(data) {
  //       // $('#tweets-container').empty();
  //       console.log(data)
  //       $('#new_quiz_container').
  //     });

    // })
    //  POST REQUEST STRUCTURE
    // // $.ajax({
    //   url: '/tweets',
    //   method: 'POST',
    //   data: $(this).serialize(),
    // })
    //   .then(function() {
    //     $('#tweet-text').val('');
    //     $('#char-counter').text(140);
    //     $.fn.loadTweets();
    //   });


// That’s where our jQuery should go for the newQuiz slider for example.
>>>>>>> feature_new_quiz
