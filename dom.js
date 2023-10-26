const DOMSelectors = {
  form: document.querySelector("#form"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
  firstName: document.querySelector(".first-name"),
  lastName: document.querySelector(".last-name"),
  desc: document.querySelector(".description"),
  card: document.querySelectorAll(".card"),
  h3s: document.querySelectorAll("h3"),
  paragraphs: document.querySelectorAll("p"),
  h2s: document.querySelectorAll("h2"),
  backgrounds: document.querySelector(".backgrounds"),
  button: document.querySelectorAll("#btn"),
};

function backgroundAndText(background) {
  background.style.backgroundColor = "lightblue";

  /* text.innerHTML = "This is now box"; */
}
backgroundAndText(DOMSelectors.backgrounds);

function makeCard() {
  DOMSelectors.form.addEventListener("submit", function () {
    DOMSelectors.h2s.forEach(
      (el) => (el.textContent = DOMSelectors.firstName.value)
    );
    DOMSelectors.h3s.forEach(
      (el) => (el.textContent = DOMSelectors.lastName.value)
    );
    DOMSelectors.paragraphs.forEach(
      (el) => (el.textContent = DOMSelectors.desc.value)
    );
  });
}
makeCard();

function addCard() {
  DOMSelectors.form.addEventListener("submit", function () {
    let input = DOMSelectors.input.value;
    const card = DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
  <h2>${input}</h2>
  <h3>${input}</h3>
  <p>${input}</p>
  <button type="button" id="btn">Delete</button>
</div>`
    );
    card();
  });
}
addCard();

function clearFields() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll(
      ".first-name, .last-name, .description"
    );
    inputs.forEach((submit) => {
      submit.value = "";
      function removeCard() {
        const buttons = document.querySelectorAll("#btn");
        buttons.forEach((button) => {
          button.addEventListener("click", function (event) {
            const card = event.currentTarget.parentNode; // Get the parent node of the button (the card element)
            card.remove(); // Remove the card from the DOM
          });
        });
      }
      removeCard();
    });
  });
}
clearFields();

/* function removeCard() {
  cards.forEach((button) => {button.addEventListener("click", function(event) {
    event.currentTarget.parentNode.remove(DOMSelectors.h2s);
  })})
}
removeCard(); */

//const card = makeCard(); , makes card
// addCard () , adds to card
//clearFields()
//addRemoveButtons
/*   document.querySelector(".gallery") */
