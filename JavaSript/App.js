const startbtn = document.querySelector('.btn-home');
const startquez = document.querySelector('.start-quiz');
const prebtn = document.querySelector('.pre-btn');
const nextbtn = document.querySelector('.next-btn');
const quizsec = document.querySelector('quiz-sec');



startbtn.addEventListener('click', () => {
    startquez.classList.add('active');
    showQuestion(0);
    questionCounter(1);
});


prebtn.addEventListener('click', () => {
    questionCount--;
    nextbtn.innerHTML = `Next`;
    if (questionCount < 1) {

        console.log(questionCount);
        questionCount = 0;
    }

    showQuestion(questionCount);
});

let questionNum = 1;

nextbtn.addEventListener('click', () => {
    // startquez.classList.add('active');
    // quizsec.classList.add('active');
    if (questionCount < questions.length - 1) {

        questionCount++;
        showQuestion(questionCount);

        questionNum++;
        questionCounter(questionNum);
    } else {

        // nextbtn.classList.add('reulte');
        // const result = document.querySelector('.result');
        nextbtn.innerHTML = `result`;
        console.log('complated');
        result();

    }
});


function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.innerHTML = `${index} of ${questions.length} Questions`;
}






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
    let currectAnswer = questions[questionCount].answer;
    let alloption = optionlist.children.length;

    // console.log(typeof (currectAnswer));
    if (userAnswer == currectAnswer) {
        console.log('yes');
        answer.classList.add('currect');
    } else {
        // console.log('no');
        answer.classList.add('incurrect');
    }


    for (let i = 0; i < alloption; i++) {
        optionlist.children[i].classList.add('disable');

    }

}

function result() {
    console.log('result')
}


