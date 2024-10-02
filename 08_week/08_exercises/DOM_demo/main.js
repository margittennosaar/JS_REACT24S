const backToTop = document.querySelector('#backTop');

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('header').style.backgroundColor = "green";
        document.querySelector('header .logo h1').style.fontSize = "12px";
        document.querySelector('header').style.height = "50px";
    } else {
        document.querySelector('header').style.backgroundColor = "transparent";
        document.querySelector('header .logo h1').style.fontSize = "32px";
        document.querySelector('header').style.height = "100px";
    }
}
