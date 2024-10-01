const backToTop = document.querySelector('#backTop');

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 200;
    document.documentElement.scrollTop = 200
})