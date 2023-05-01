const id = document.getElementById("id");
const advice = document.querySelector(".advice-text");
const adviceBtn = document.querySelector(".advice-button");

window.addEventListener('DOMContentLoaded', () => {
    fetchData().then(data => {
        id.innerHTML = data.slip.id;
        advice.innerHTML = data.slip.advice;
    });
})

function fetchData() {
    return fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
}

adviceBtn.addEventListener("click", () => {
    fetchData().then(data => {
        id.innerHTML = data.slip.id;
        advice.innerHTML = data.slip.advice;
    });
})
