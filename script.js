function show() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}

function hide() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
}


const names = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
    if (email.value != '' && names.value != ''){
        nameerror.innerHTML= "Thank You, I'll get back to You soon";
        nameerror.style.color = "green";
    }
    else {
        validate();
    }
})

function validate() {
    var emailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!email.value.match(emailcheck) || names.value == '') {
        nameerror.innerHTML = "Please enter valid details!";
    }
    else {
        nameerror.innerHTML = "";
    }
}