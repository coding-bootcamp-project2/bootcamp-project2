const characterForm = document.querySelector("#question-form");
const answersSection = document.querySelector(".answers-section");
const characterNameInput = document.querySelector("#name");
const race = document.querySelector("#race");

const createCharacter = async (e) => {
  e.preventDefault();
  // Tommy's form needs to pass in class ID and race ID.
  // fetch the class data that matches the class ID
  const response = await fetch(`/api/class/${classId}`);
  const classData = await response.json();
  const raceId = race.value;
  const characterName = characterNameInput.value;

  // if the class data is found, then create the character
  if (response.ok) {
    console.log(classData);
    const character = {
      character_name: characterName,
      class_id: classId,
      race_id: raceId,
      level: 1,
    };
    console.log("create character------------");
    const response = await fetch(`/api/character/create`, {
      method: "POST",
      body: JSON.stringify(character),
      headers: { "Content-Type": "application/json" },
    });
    // document.location.replace(`/api/class/${dndClassId}`);
    if (response.ok) {
      console.log(response);
      const newCharacter = await response.json();
      const newCharacterId = newCharacter.id;
      document.location.replace(`/api/character/${newCharacterId}`);
    } else {
      alert("Failed to create character.");
    }
  } else {
    alert("Failed to retrieve class.");
  }
};

// Questions and answers which will be displayed during the quiz:
var answers = [];
var questions = [
  {
    questionId: 1,
    question: "What's your preferred role in a group?",
    a: "Lead the charge and smash things",
    b: "Charm and inspire others",
    c: "Heal and support your allies",
    d: "Connect with nature and transform",
    e: "Swear an oath to protect the innocent",
    f: "Sneaking and Scouting ahead for enemies",
    g: "Unleash powerful magic with your will",
    h: "Make a pact with a mysterious entity",
    i: "Study and manipulate arcane knowledge",
  },
  {
    questionId: 2,
    question: "What's your preferred weapon?",
    a: "A massive, two-handed axe",
    b: "A musical instrument",
    c: "A mace or holy symbol",
    d: "A staff or a sling",
    e: "A sword and shield",
    f: "A longbow",
    g: "Magic spells",
    h: "Eldritch blasts",
    i: "A spellbook and wand",
  },
  {
    questionId: 3,
    question: "What's your favorite environment?",
    a: "The wilderness",
    b: "A lively tavern",
    c: "A sacred temple",
    d: "Dense forests",
    e: "Defending the city walls",
    f: "Vast plains",
    g: "Mysterious arcane libraries",
    h: "The shadowy places",
    i: "A tower filled with magical tomes",
  },
  {
    questionId: 4,
    question: "What motivates you?",
    a: "Fierce loyalty to your tribe",
    b: "Fame and admiration",
    c: "Faith and devotion to a deity",
    d: "Protecting nature",
    e: "Upholding justice and righteousness",
    f: "Defending the weak",
    g: "Seeking knowledge and power",
    h: "Making pacts for power",
    i: "Unraveling magical mysteries",
  },
  {
    questionId: 5,
    question: "How do you feel about rules and authority?",
    a: "Ignore them when they get in the way",
    b: "Bend them to your advantage",
    c: "Follow them devoutly",
    d: "Nature's laws are your guide",
    e: "Uphold justice and protect the innocent",
    f: "You are your own authority",
    g: "Create your own rules with magic",
    h: "Make deals with powerful entities",
    i: "Seek hidden knowledge beyond rules",
  },
  {
    questionId: 6,
    question: " Your moral compass points towards...",
    a: "Your tribe's code",
    b: "What benefits you and your friends",
    c: "Your deity's teachings",
    d: "Protecting nature and balance",
    e: "Upholding honor and glory",
    f: "Do what you can for those who need it",
    g: "The pursuit of knowledge",
    h: "The power of darkness",
    i: "The secrets of the arcane",
  },
  {
    questionId: 7,
    question: "What's your greatest fear?",
    a: "Losing your rage and control",
    b: "Losing your charm and popularity",
    c: "Losing your faith and connection to your deity",
    d: "The destruction of the natural world",
    e: "Being defeated in battle",
    f: "Losing your home",
    g: "Losing your magical abilities",
    h: "The wrath of your patron",
    i: "Failing to uncover hidden knowledge",
  },
  {
    questionId: 8,
    question: "What's your favorite drink?",
    a: "Mead",
    b: "Fine wine",
    c: "Holy water",
    d: "Herbal tea",
    e: "Water",
    f: "Ale",
    g: "Elixir of magic",
    h: "A mysterious concoction",
    i: "Potion of knowledge",
  },
];

var currentQuestion = 0;
var answerButtons = document.getElementById("answer-buttons");
var questionDiv = document.getElementById("question");
var startQuizButton = document.getElementById("startquiz");

function showQuestion() {
  var questionData = questions[currentQuestion];
  questionDiv.innerText = questionData.question;
  answerButtons.innerHTML = "";
  for (var i = 1; i <= 8; i++) {
    var option = questionData[String.fromCharCode(96 + i)];
    if (option) {
      var button = document.createElement("button");
      button.dataset.class = i;
      button.innerText = option;
      button.id = "answer" + i;
      button.addEventListener("click", checkAnswer);
      answerButtons.appendChild(button);
    }
  }
}

async function checkAnswer(event) {
  event.preventDefault();
  var userClassAnswer = event.target.dataset.class;
  answers.push(userClassAnswer);
  console.log(answers);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    console.log(answers);
    // logic to check answers array for most common answer
    var frequency = {}; // array of frequency.
    var max = 0; // holds the max frequency.
    for (var v in answers) {
      frequency[answers[v]] = (frequency[answers[v]] || 0) + 1; // increment frequency.
      if (frequency[answers[v]] > max) {
        // is this frequency > max so far ?
        max = frequency[answers[v]]; // update max.
        classId = answers[v]; // update classId
        console.log("Result:", classId); // classId is the submission number with max frequency which will end up being the class number
      }
    }
    // userClass = await getClassById(classId);
    const submitQuizBtn = document.createElement("button");
    submitQuizBtn.innerText = "Submit";
    questionDiv.innerText = "Quiz completed. You can submit the form here.";
    questionDiv.append(submitQuizBtn);
    answersSection.classList.add("hidden");
  }
}

// send fetch request to get class by id
async function getClassById(id) {
  const response = await fetch(`http://localhost:3001/api/class/${id}`);
  const classData = await response.json();
  console.log(classData);
  return classData;
}

startQuizButton.addEventListener("click", function (event) {
  event.preventDefault();
  currentQuestion = 0;
  showQuestion();
  startQuizButton.classList.add("hidden");
  questionDiv.classList.remove("hidden");
  questionDiv.classList.add("question-display");
  answersSection.classList.remove("hidden");
});

characterForm.addEventListener("submit", createCharacter);
