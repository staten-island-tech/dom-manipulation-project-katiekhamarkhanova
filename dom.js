const DOMSelectors = {
  form: document.getElementById("#form"),
  box: document.querySelector(".container-box"),
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
  imgs: document.querySelector("image"),
  imgHTML: document.querySelectorAll("img")
};
/* function makeCard() {
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
    DOMSelectors.imgHTML.forEach(
      (el) => (el.textContent = DOMSelectors.imgs.value)
    );
  });
};
makeCard(); */


  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log()
    function addCard() {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
  <h2>${DOMSelectors.firstName.value}</h2>
  <h3>${DOMSelectors.lastName.value}</h3>
  <p>${DOMSelectors.desc.value}</p>
  <img src="${DOMSelectors.imgs.value}" alt=""></img>
</div>`
    );
  } 
  addCard()});
 

/*   <button type="button" id="btn">Delete</button> */

/* function clearFields() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll(
      ".first-name, .last-name, .description, .image"
    ); */
   /*  inputs.forEach((submit) => {
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
};
clearFields(); */


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
