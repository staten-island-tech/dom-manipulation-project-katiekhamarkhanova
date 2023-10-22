const DOMSelectors = {
    form: document.querySelector("#form"),
    box: document.querySelector("#box"),
    text: document.querySelector("#text"),
    firstName: document.querySelector(".first-name"),
    lastName: document.querySelector(".last-name"),
    desc: document.querySelector(".description"),
    image: document.querySelector(".img-link"),
    h3s: document.querySelectorAll("h3"),
    paragraphs: document.querySelectorAll("p"),
    h2s: document.querySelectorAll("h2"),
    img: document.querySelectorAll("img"),
  };
  function backgroundAndText(background, text) {
    background.style.backgroundColor = "red";
    text.innerHTML = "This is now a big red box";
  }
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);

  DOMSelectors.form.addEventListener("submit", function () {
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
      (el) => el.textContent = DOMSelectors.firstName.value
    );
    console.log(DOMSelectors.lastName.value);
    DOMSelectors.h3s.forEach(
      (el) => el.textContent = DOMSelectors.lastName.value
    );
    console.log(DOMSelectors.desc.value);
    DOMSelectors.paragraphs.forEach(
      (el) => el.textContent = DOMSelectors.desc.value
    );
    console.log(DOMSelectors.image.value);
    DOMSelectors.img.forEach(
      (el) => el.textContent = DOMSelectors.image.value
    );
  });
  function clearFields() {
    DOMSelectors.form.addEventListener("submit", function (event) {
      event.preventDefault();
      const inputs = document.querySelectorAll('.first-name, .last-name, .description, .img-link');
      inputs.forEach(submit => {
        submit.value = '';
      })})};
    clearFields();


function makeCard() {
    
  };
function addCard(card) {
  const card = makeCard();
  document.querySelector(".gallery")
  .insertAdjacentHTML(
    "afterbegin",
    ``
  )
  //const card = makeCard(); , makes card
  // addCard () , adds to card
  //clearFields()
  //addRemoveButtons
};