function switchTab(event) {
    const targetTab = event.target.getAttribute("data-tab");

    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));

    document.querySelectorAll(".tab-contents").forEach(tab => tab.classList.remove("active"));

    document.getElementById(targetTab).classList.add("active");
    event.target.classList.add("active");
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => link.addEventListener("click", (event) => switchTab(event)));