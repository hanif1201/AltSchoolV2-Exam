const nav = document.querySelector("nav");
const footerDate = document.querySelector(".footer-date");
const navLinks = document.querySelector(".nav-links");
const questionCont = document.querySelector(".question-center");
const questions = document.querySelectorAll(".question");
const openSidebar = document.querySelector(".sidebar-open-btn");
const closeSidebar = document.querySelector(".sidebar-close-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelector(".sidebar-links");

// sidebar Open
openSidebar.addEventListener("click", (e) => {
  sidebar.classList.add("show");
});
closeSidebar.addEventListener("click", (e) => {
  sidebar.classList.remove("show");
});

// Sticky Nav
window.addEventListener("scroll", (e) => {
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.scrollY;
  if (scrollHeight > navHeight) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// Date
footerDate.textContent = new Date().getFullYear();

// Scroll Into View
navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  scrollToView(id);
});

sidebarLinks.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  scrollToView(id);
});

function scrollToView(id) {
  if (!id) return;
  const element = document.querySelector(id);
  const navHeight = nav.getBoundingClientRect().height;
  const fixedNav = nav.classList.contains("sticky");
  let position = element.offsetTop - navHeight;

  if (!fixedNav) {
    position -= navHeight;
  }

  if (sidebar.classList.contains("show")) sidebar.classList.remove("show");

  window.scrollTo({
    left: 0,
    top: position,
    behavior: "smooth",
  });
}

// Accordion

questionCont.addEventListener("click", displayActiveQuestion);

function displayActiveQuestion(e) {
  const activeQuestion = e.target.closest(".question");
  if (!activeQuestion) return;
  if (activeQuestion.classList.contains("active")) {
    activeQuestion.classList.remove("active");
    return;
  }
  questions.forEach((question) => question.classList.remove("active"));
  activeQuestion.classList.add("active");
}

window.addEventListener("resize", (e) => {
  const minWidth = 950;
  if (window.innerWidth < minWidth) return;
  if (window.innerWidth >= minWidth) {
    if (!sidebar.classList.contains("show")) return;
    sidebar.classList.remove("show");
  }
});
