const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    lastName: document.querySelector(".last-name"),
    desc: document.querySelector(".description"),
    image: document.querySelector(".img-link"),
    h3s: document.querySelectorAll("h3"),
    paragraphs: document.querySelectorAll("p"),
    h2s: document.querySelectorAll("h2"),
    img: document.querySelectorAll("img"),
  };
  DOMSelectors.form.addEventListener("submit", function (event) {
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
    event.preventDefault();
    const inputs = document.querySelectorAll('.first-name, .last-name, .description');
    inputs.forEach(submit => {
      submit.value = '';
    });
  });
