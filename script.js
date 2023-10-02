const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


// const headerbuttonpop = document.querySelector('header-button');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});



// headerbuttonpop.addEventListener('click',()=>{
//     wrapper.classList.add('active-button');
// });


