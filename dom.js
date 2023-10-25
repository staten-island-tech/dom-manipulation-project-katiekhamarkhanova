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
};

function backgroundAndText(background){
  background.style.backgroundColor = "lightblue";
  /* text.innerHTML = "This is now box"; */
};
backgroundAndText(DOMSelectors.backgrounds);

function makeCard() {
  DOMSelectors.form.addEventListener("submit", function() {
      DOMSelectors.h2s.forEach(
          (el) => (el.textContent = DOMSelectors.firstName.value)
        );
        DOMSelectors.h3s.forEach(
          (el) => (el.textContent = DOMSelectors.lastName.value)
        );
        DOMSelectors.paragraphs.forEach(
          (el) => (el.textContent = DOMSelectors.desc.value)
        );
  })
};
makeCard();


function addCard() {
DOMSelectors.form.addEventListener("submit", function() {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", 
  `<div class="card">
  <h2>${input}</h2>
  <h3>${input}</h3>
  <p>${input}</p>
</div>`);
})};
addCard();

function clearFields() {
  DOMSelectors.form.addEventListener("submit", function (event) {
      event.preventDefault();
      const inputs = document.querySelectorAll(
        ".first-name, .last-name, .description"
      );
      inputs.forEach((submit) => {
        submit.value = "";
      });
    });
  };
clearFields();

//const card = makeCard(); , makes card
// addCard () , adds to card
//clearFields()
//addRemoveButtons
/*   document.querySelector(".gallery") */
