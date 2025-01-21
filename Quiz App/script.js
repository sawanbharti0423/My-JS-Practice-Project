const Question = [
    {
        'Que': 'What does console.log(typeof null) output?',
        'a': 'null',
        'b': 'object',
        'c': 'undefined',
        'd': 'boolean',
        'correct': 'b'

    },
    {
        'Que': 'Which of the following is NOT a primitive data type in JavaScript?',
        'a': 'String',
        'b': 'Boolean',
        'c': 'Array',
        'd': 'Number',
        'correct': 'c'

    },
    {
        'Que': 'Which of the following statements is correct about JavaScript closures?',
        'a': 'A closure is a function that is enclosed within another function.',
        'b': 'A closure is a function that is enclosed within an object.',
        'c': 'A closure is a function that can access variables from its parent functions scope even after the parent function has finished execution.',
        'd': 'A closure can only access global variables.',
        'correct': 'c'

    },
    {
        'Que': 'Which operator is used to assign a value to a variable in JavaScript?',
        'a': '=',
        'b': '==',
        'c': '===',
        'd': '=>',
        'correct': 'a'

    },
    {
        'Que': 'What does the Array.isArray() method do?',
        'a': 'Checks if a variable is an array.',
        'b': 'Converts an array into a string.',
        'c': 'Merges two arrays.',
        'd': 'Removes duplicate elements from an array.',
        'correct': 'a'

    }
];

let index = 0;
let total = Question.length;
let Right = 0;
let Wrong = 0;
let quesBox = document.getElementById("que-box")
let options = document.getElementsByClassName("options")
let resultBox = document.getElementsByClassName("box")[0];

const loadQuestion = () => {
    if (index == total) {
        return end()
    }
    reset()
    const data = Question[index]
    quesBox.innerText = `${index + 1}) ${data.Que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = Question[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        Right++
    } else {
        Wrong++
    }
    index++;
    loadQuestion();
    return;
}

getAnswer = () => {
    let answer;
    Array.from(options).forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    Array.from(options).forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const end = () => {
    resultBox.innerHTML = `
    <h3 style="text-align:center"> Thankyou For Playing Quiz.</h3>
    <h2 style="text-align:center">${Right} / ${total} are Correct </h2>
    `
}


loadQuestion()

