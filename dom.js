const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  lastName: document.querySelector(".last-name"),
  desc: document.querySelector(".description"),
  h3s: document.querySelectorAll("h3"),
  paragraphs: document.querySelectorAll("p"),
  h2s: document.querySelectorAll("h2"),
  input: document.querySelectorAll("#input"),
  box: document.getElementById("container-box"),
};

function makeCard() {
  DOMSelectors.form.addEventListener("submit", function () {
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
      (el) => (el.textContent = DOMSelectors.firstName.value)
    );
    console.log(DOMSelectors.lastName.value);
    DOMSelectors.h3s.forEach(
      (el) => (el.textContent = DOMSelectors.lastName.value)
    );
    console.log(DOMSelectors.desc.value);
    DOMSelectors.paragraphs.forEach(
      (el) => (el.textContent = DOMSelectors.desc.value)
    );
  });
}
makeCard();


function addCard() {
  DOMSelectors.form.addEventListener("submit", function () {
    const inputs = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <h2>${inputs}</h2>
      <h3>${inputs}</h3>
      <p>${inputs}</p>
    </div>`
    );
  });
}
addCard();


function clearFields() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputss = document.querySelectorAll(
      ".first-name, .last-name, .description"
    );
    inputss.forEach((submit) => {
      submit.value = "";
    });
  });
}
clearFields();

//const card = makeCard(); , makes card
// addCard () , adds to card
//clearFields()
//addRemoveButtons
/*   document.querySelector(".gallery") */
