// Questions and answers which will be displayed during the quiz:
var answers = []
var userClass = "";
var questions = [
    {
        questionId: 1,
        question: "What's your preferred role in a group?",
        a: "Lead the charge and smash things",
        b: "Charm and inspire others",
        c: "Heal and support your allies",
        d: "Connect with nature and transform",
        e: "Swear an oath to protect the innocent",
        f: "Unleash powerful magic with your will",
        g: "Make a pact with a mysterious entity",
        h: "Study and manipulate arcane knowledge"
    },
    {
        questionId: 2,
        question: "What's your preferred weapon?",
        a: "A massive, two-handed axe",
        b: "A musical instrument",
        c: "A mace or holy symbol",
        d: "A staff or a sling",
        e: "A sword and shield",
        f: "Magic spells",
        g: "Eldritch blasts",
        h: "A spellbook and wand"
    },
    {
        questionId: 3,
        question: "What's your favorite environment?",
        a: "The wilderness",
        b: "A lively tavern",
        c: "A sacred temple",
        d: "Dense forests",
        e: "Defending the city walls",
        f: "Mysterious arcane libraries",
        g: "The shadowy places",
        h: "A tower filled with magical tomes"
    },
    {
        questionId: 4,
        question: "What motivates you?",
        a: "Fierce loyalty to your tribe",
        b: "Fame and admiration",
        c: "Faith and devotion to a deity",
        d: "Protecting nature",
        e: "Upholding justice and righteousness",
        f: "Seeking knowledge and power",
        g: "Making pacts for power",
        h: "Unraveling magical mysteries"
    },
    {
        questionId: 5,
        question: "How do you feel about rules and authority?",
        a: "Ignore them when they get in the way",
        b: "Bend them to your advantage",
        c: "Follow them devoutly",
        d: "Nature's laws are your guide",
        e: "Uphold justice and protect the innocent",
        f: "Create your own rules with magic",
        g: "Make deals with powerful entities",
        h: "Seek hidden knowledge beyond rules"
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
    var userClassAnswer = event.target.dataset.class;
    answers.push(userClassAnswer);
    console.log(answers);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        console.log(answers);
        // write some logic to check answers array for most common answer
        userClass = await getClassById("1");
        questionDiv.innerText = "Quiz completed. You can submit the form here.";
        answerButtons.innerHTML = "";
    }
}

// send fetch request to get class by id
async function getClassById(id) {
    const response = await fetch(`http://localhost:3001/api/class/${id}`);
    const classData = await response.json();
    console.log(classData);
    return classData
  }

startQuizButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentQuestion = 0;
    showQuestion();
});
