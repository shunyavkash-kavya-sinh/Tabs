//Tabs js

function showSection(id) {
  const sections = document.querySelectorAll(".tabs-dec");
  sections.forEach((sec) => sec.classList.remove("active-tab"));
  document.getElementById(id).classList.add("active-tab");

  const tabButtons = document.querySelectorAll(".tabs-btn ul li");
  tabButtons.forEach((btn) => btn.classList.remove("active-btn"));

  tabButtons.forEach((btn) => {
    if (btn.innerText.trim() === id) {
      btn.classList.add("active-btn");
    }
  });
}

//dark mode js

function setDarkMode() {
  document.body.classList.add("dark-mode");
}

function setLightMode() {
  document.body.classList.remove("dark-mode");
}
