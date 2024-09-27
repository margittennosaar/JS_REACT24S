const myId = document.getElementById('myId');
const mySecondId = document.querySelector('#myId');

const myClass = document.getElementsByClassName('myClass');
const mySecondClass = document.querySelectorAll('.myClass');
const myClassSecond = document.querySelector('.myClass');

const myParagraph = document.getElementsByTagName('p');
const button = document.querySelector('#whatever');

const headline = document.querySelector('h1')
const list = document.querySelector('ul')
let newElement = document.createElement('li')

function myFunction() {
    console.log('this was trigerred in html!!!');
    headline.textContent = 'what I just did?!?!?!'
    button.style.color = 'green'
}

function myFunction2() {
    console.log('wow, it was äddeventlistener');
    headline.textContent = 'I fixed it'
    button.textContent = 'fix it'
    button.style.color = 'red'
    headline.style.fontSize = '100px'
    headline.style.backgroundColor = 'yellow'
    headline.remove()
    list.appendChild(newElement)
}

document.querySelector('#whatever').addEventListener('click', myFunction2)
button.addEventListener('click', myFunction2)
