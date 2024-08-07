/* agregando detector de eventos en múltiples elementos */
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}



/* navbar toggle para celulares */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/* slider */
const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

    const sldierContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

    let currentSlidePos = 0;

    const moveSliderItem = function () {
        sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
    }

    /* siguiente slider */
    const slideNext = function () {
        const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

        if (slideEnd) {
            currentSlidePos = 0;
        } else {
            currentSlidePos++;
        }

        moveSliderItem();
    }

    sliderNextBtn.addEventListener("click", slideNext);

    /* anterior slider */
    const slidePrev = function () {

        if (currentSlidePos <= 0) {
            currentSlidePos = sldierContainer.childElementCount - 1;
        } else {
            currentSlidePos--;
        }

        moveSliderItem();
    }

    sliderPrevBtn.addEventListener("click", slidePrev);

    const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
    if (dontHaveExtraItem) {
        sliderNextBtn.style.display = "none";
        sliderPrevBtn.style.display = "none";
    }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/* desplegar informacion */
const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }

function formEmpresa() {
    const empresaElements = document.getElementsByClassName('empresa');
    const personaElements = document.getElementsByClassName('persona');
    const persona = document.querySelector("#persona");
    const empresa = document.querySelector("#empresa");
    for (let i = 0; i < empresaElements.length; i++) {
        empresaElements[i].style.display = 'block';
    }
    for (let i = 0; i < personaElements.length; i++) {
        personaElements[i].style.display = 'none';
    };
    persona.style.background = 'var(--azul)';
    empresa.style.background = 'var(--azul-oscuro)';
}

function formPersona() {
    const empresaElements = document.getElementsByClassName('empresa');
    const personaElements = document.getElementsByClassName('persona');
    const persona = document.querySelector("#persona");
    const empresa = document.querySelector("#empresa");
    for (let i = 0; i < empresaElements.length; i++) {
        empresaElements[i].style.display = 'none';
    }
    for (let i = 0; i < personaElements.length; i++) {
        personaElements[i].style.display = 'block';
    };
    empresa.style.background = 'var(--azul)';
    persona.style.background = 'var(--azul-oscuro)';
}

const wrapper = document.querySelector(".wrapperp");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const img = document.querySelector("#img");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive(){
  defaultBtn.click();
}
defaultBtn.addEventListener("change", function(){
  const file = this.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(){
      const result = reader.result;
      img.src = result;
      wrapper.classList.add("active");
    }
    reader.readAsDataURL(file);
  }
  if(this.value){
    let valueStore = this.value.match(regExp);
    fileName.textContent = valueStore;
  }
});