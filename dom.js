const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    lastName: document.querySelector(".last-name"),
    desc: document.querySelector(".description"),
    h3s: document.querySelectorAll("h3"),
    paragraphs: document.querySelectorAll("p"),
    h2s: document.querySelectorAll("h2"),
  };
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
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
  });
