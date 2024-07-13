function switchTab(event) {
    const targetTab = event.target.getAttribute("data-tab");

    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));

    document.querySelectorAll(".tab-contents").forEach(tab => tab.classList.remove("active"));

    document.getElementById(targetTab).classList.add("active");
    event.target.classList.add("active");
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => link.addEventListener("click", (event) => switchTab(event)));




const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(form);
const object = Object.fromEntries(formData);
const json = JSON.stringify(object);
result.innerHTML = "Зачекайте будь ласка..."

fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = "Запит відправлено!";
        } else {
            console.log(response);
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Відбулась якась помилка!";
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
});
const rizneDiv = document.getElementById("carouselExampleFade");
const rizne = document.querySelector(".modal-rizne");
rizneDiv.addEventListener("click", function(event) {
    rizne.style.display = "block";

    const closeOne = document.querySelector(".btn-close-rizne");
    closeOne.addEventListener("click", () => {
        rizne.style.display = "none";
})
});

const modernDiv = document.getElementById("carouselExampleFade3");
const modern = document.querySelector(".modal-modern");
modernDiv.addEventListener("click", function(event) {
    modern.style.display = "block";

    const closeOne = document.querySelector(".btn-close-modern");
    closeOne.addEventListener("click", () => {
        modern.style.display = "none";
})
});

const kitchenDiv = document.getElementById("carouselExampleFade1");
const kitchen = document.querySelector(".modal-kitchen");
kitchenDiv.addEventListener("click", function(event) {
    kitchen.style.display = "block";

    const closeOne = document.querySelector(".btn-close-kitchen");
    closeOne.addEventListener("click", () => {
        kitchen.style.display = "none";
})
});

const shafaDiv = document.getElementById("carouselExampleFade2");
const shafa = document.querySelector(".modal-shafa");
shafaDiv.addEventListener("click", function(event) {
    shafa.style.display = "block";

    const closeOne = document.querySelector(".btn-close-shafa");
    closeOne.addEventListener("click", () => {
        shafa.style.display = "none";
    })
});