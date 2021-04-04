import $ from "jquery";
var pagePrevState = 0;
const IsScrolledIntoView = (elem) => {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return (
    elemTop + (elemBottom - elemTop) / 2 >= docViewTop &&
    elemTop + (elemBottom - elemTop) / 2 <= docViewBottom
  );
  // return elemBottom <= docViewBottom && elemTop >= docViewTop;
};

const Checker = ({ elem }) => {
  if (IsScrolledIntoView(elem) && CheckScrollDirection()) {
    var boxes = $(elem)[0].children;
    for (let i = 0; i < boxes.length; i++) {
      if (i % 2 !== 0) {
        boxes[i].style.display = "flex";
        boxes[i].classList.add("animate__rotateInDownRight");
        boxes[i].classList.add(`animate__delay-${i}s`);
      } else {
        boxes[i].style.display = "flex";
        boxes[i].classList.add("animate__rotateInDownLeft");
        boxes[i].classList.add(`animate__delay-${i}s`);
      }
    }
  }
};

export const ZoomInUp = (elem) => {
  if (IsScrolledIntoView(elem)) {
    var boxes = $(elem)[0].children;
    for (let i = 0; i < boxes.length; i++) {
      if (i === 0) {
        boxes[i].style.display = "flex";
        boxes[i].classList.add("animate__fadeInLeftBig");
      } else {
        boxes[i].style.display = "block";
        boxes[i].classList.add("animate__zoomInUp");
        boxes[i].classList.add(`animate__delay-${i}s`);
      }
    }
  }
};

export const FadeInLeftBigEntrance = (elem) => {
  if (IsScrolledIntoView(elem)) {
    var box = $(elem)[0].children[0];
    box.style.display = "flex";
    box.classList.add("animate__fadeInLeftBig");
  }
};

const CheckScrollDirection = () => {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > pagePrevState) {
    return true;
  }
  pagePrevState = st <= 0 ? 0 : st;
  return false;
};

export default Checker;
