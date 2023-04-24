const header = document.querySelector('header');
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// Email Js

function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    /* let tel = document.querySelector(".tel"); */
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });
}

validate();

function sendmail (name, email, msg) {
    emailjs.send("service_nttv9u7","template_fbnymok",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "Error!",
        text: "All fields required!",
        icon: "error",
      });
}

function success() {
    swal({
        title: "Email sent successfully!",
        text: "Get back to you as soon as possible!",
        icon: "success",
      });
}

