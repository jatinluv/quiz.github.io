const quizData = [
    {
        question: "How many Marks does Sakshi gets in 10+2?",
        a: "50%",
        b: "55%",
        c: "62%",
        d: "66%",
        correct: "d",
    },
    {
        question: "When was first time Sakshi fell for a guy ?",
        a: "2011",
        b: "2012",
        c: "2013",
        d: "2014",
        correct: "b",
    },
    {
        question: "What was the name of Sakshi Favourate Teacher in MMU?",
        a: "Chetna😂",
        b: "Shiwani",
        c: "Archana",
        d: "All of these",
        correct: "b",
    },
    {
        question: "How many TikTok followers does Sakshi has?",
        a: "500",
        b: "5K",
        c: "10K",
        d: "13K",
        correct: "d",
    },
    {
        question: "Does Sakshi have double chin?",
        a: "Of Course",
        b: "Thodi si",
        c: "Bilkul Nahi",
        d: "I dont Care",
        correct: "d",
    },
    {
        question: "1 Bhai h tera wo na?",
        a: "Sab jantaa h😂",
        b: "Smart h",
        c: "Golu h",
        d: "All of these",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly<br>
                Just made for Fun.Don't yell at ur Brother Later😂😂😊😊</h2>

                <button onclick="location.reload()">Dobara Try Krle</button>
            `
        }
    }
})