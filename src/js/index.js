function fabButtonActionToggle(index) {
  const action = document.querySelectorAll(".fab-button>.fab-icon");
  index !== undefined && action[index].parentElement.classList.toggle("active");
  action.forEach(
    (e, i) => i !== index && e.parentElement.classList.remove("active")
  );
}

function selectLanguage(event, lang, fabId) {
  event.preventDefault();
  const action = document.querySelectorAll(".fab-button");
  action.forEach(
    (button) =>
      button.dataset.fabId.toString() === fabId.toString() &&
      button.classList.remove("active")
  );
  changeLanguage(lang);
}

function changeLanguage(language) {
    
}
