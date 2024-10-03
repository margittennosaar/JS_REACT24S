const backToTop = document.querySelector('#backTop');
const mobButton = document.querySelector('.mobile');
const navList = document.querySelector('nav ul');
const modalButton = document.querySelector('#mobBtn');
const closeButton = document.querySelector('.close');
const overlay = document.querySelector('.overlay')

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('header').style.backdropFilter = "blur(10px)";
        document.querySelector('header .logo h1').style.fontSize = "12px";
        document.querySelector('header').style.height = "50px";
    } else {
        document.querySelector('header').style.backgroundColor = "transparent";
        document.querySelector('header .logo h1').style.fontSize = "32px";
        document.querySelector('header').style.height = "100px";
    }
}

const toggleMenu = () => {
    navList.classList.toggle('responsive')
}

const toggleModal = () => {
    overlay.classList.toggle('visible')
}

mobButton.addEventListener('click', toggleMenu)
modalButton.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)
