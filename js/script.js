const menuToggle = document.querySelector('#toggle');
const closeToggle = document.querySelector('#toggleclose')
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
    menuToggle.style.display = 'none';
    closeToggle.style.display = 'inline-block';
})

closeToggle.addEventListener('click', () => {
    showcase.classList.remove('active');
    menuToggle.style.display = 'inline-block';
    closeToggle.style.display = 'none';
})