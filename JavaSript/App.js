const startbtn = document.querySelector('.btn-home');
const startquez = document.querySelector('.start-quiz');
const prebtn = document.querySelector('.pre-btn');
const nextbtn = document.querySelector('.next-btn');
const quizsec = document.querySelector('quiz-sec');



startbtn.addEventListener('click', () => {
    startquez.classList.add('active');
});


prebtn.addEventListener('click', () => {
    questionCount--;

    if (questionCount < 1) {

        console.log(questionCount);
        questionCount = 1;
    }

    showQuestion(questionCount);
});

nextbtn.addEventListener('click', () => {
    // startquez.classList.add('active');
    // quizsec.classList.add('active');
    if (questionCount < questions.length - 1) {

        questionCount++;
        showQuestion(questionCount);
    } else {

        console.log('complated')
    }
});


const optionlist = document.querySelector('.option-list');
let questionCount = 0;


function showQuestion(index) {
    const questiontext = document.querySelector('.question-text');
    const optiontext = document.querySelector('.option');
    questiontext.innerHTML = `${questions[index].num}. ${questions[index].question}`;

    let optionTag = `<div class="option">${questions[index].options[0]}</div>
    <div class="option">${questions[index].options[1]}</div>
    <div class="option">${questions[index].options[2]}</div>
    <div class="option">${questions[index].options[3]}</div>`;

    optionlist.innerHTML = optionTag;
    const option = document.querySelectorAll('.option');

    for (let i = 0; i < option.length; i++) {

        option[i].setAttribute('onClick', 'optionSelected(this)')
    }

}

function optionSelected(answer) {
    let userAnswer = answer.innerHTML;
    // console.log(userAnswer)
    let currectAnswer = questions[questionCount].answer;
    // console.log(currectAnswer);
    if (userAnswer == currectAnswer) {
        console.log('yes');
        option.classList.add('currect')
    } else {
        console.log('no');
    }

}


