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