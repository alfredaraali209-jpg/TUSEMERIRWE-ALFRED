// ================= MENU =================

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// ================= VIDEO =================

function openVideo() {

    const modal = document.getElementById("videoModal");

    modal.style.display = "flex";

}


function closeVideo() {

    const modal = document.getElementById("videoModal");

    modal.style.display = "none";

}


// Close video when clicking outside it

window.addEventListener("click", function(event) {

    const modal = document.getElementById("videoModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

});


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting Excel Nursery and Primary School. " +
        "We will get back to you soon."
    );

    event.target.reset();

}


// ================= CLOSE MOBILE MENU =================

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});
How to see the website

Put the three files in the same folder:

excel-school/
│
├── index.html
├── style.css
└── script.js