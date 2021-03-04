const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navLinks')
const bars = document.querySelector(".fa-bars")

burger.addEventListener('click',()=>{
    navLinks.classList.toggle('show')
    bars.classList.toggle('fa-times')
})