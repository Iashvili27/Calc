`use strict`;

let currentNumber = ``;

let ricxvi1 = document.querySelector(`.calculate`);

document.querySelector(`.btn-9`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `9`;
  ricxvi1.textContent = currentNumber;
});
document.querySelector(`.btn-8`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `8`;
  ricxvi1.textContent = currentNumber;
});
document.querySelector(`.btn-7`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `7`;
  ricxvi1.textContent = currentNumber;
});
document.querySelector(`.btn-6`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `6`;
  ricxvi1.textContent = currentNumber;
});
document.querySelector(`.btn-5`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `5`;
  ricxvi1.textContent = currentNumber;
});
document.querySelector(`.btn-4`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `4`;
  ricxvi1.textContent = currentNumber;
});
document.querySelector(`.btn-3`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `3`;
  ricxvi1.textContent = currentNumber;
});
document.querySelector(`.btn-2`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `2`;
  ricxvi1.textContent = currentNumber;
});
document.querySelector(`.btn-1`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `1`;
  ricxvi1.textContent = currentNumber;
});

document.querySelector(`.btn-0`).addEventListener(`click`, function () {
  currentNumber = currentNumber + `0`;
  ricxvi1.textContent = currentNumber;
});

document.querySelector(`.btn-dot`).addEventListener(`click`, function () {
  if (currentNumber.includes(`.`)) {
  } else {
    currentNumber = currentNumber + `.`;
    ricxvi1.textContent = currentNumber;
  }
});

let cvladi1;
let cvladi2;
let plus = false;
let minus = false;
let multiply = false;
let divide = false;
let otherPlus;

document.querySelector(`.btn-plus`).addEventListener(`click`, function () {
  if (plus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 + cvladi2;
    plus = false;
    currentNumber = document.querySelector(`.calculate`).textContent;
  } else if (minus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 - cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    minus = false;
  } else if (multiply) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 * cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    multiply = false;
  } else if (divide) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 / cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    divide = false;
  }
  cvladi1 = Number(currentNumber);
  plus = true;
  // document.querySelector(`.calculate`).textContent = 0;
  currentNumber = ``;
});

document.querySelector(`.btn-minus`).addEventListener(`click`, function () {
  if (plus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 + cvladi2;
    plus = false;
    currentNumber = document.querySelector(`.calculate`).textContent;
  } else if (minus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 - cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    minus = false;
  } else if (multiply) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 * cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    multiply = false;
  } else if (divide) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 / cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    divide = false;
  }
  cvladi1 = Number(currentNumber);
  minus = true;
  // document.querySelector(`.calculate`).textContent = 0;
  currentNumber = ``;
});

document.querySelector(`.btn-divide`).addEventListener(`click`, function () {
  if (plus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 + cvladi2;
    plus = false;
    currentNumber = document.querySelector(`.calculate`).textContent;
  } else if (minus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 - cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    minus = false;
  } else if (multiply) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 * cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    multiply = false;
  } else if (divide) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 / cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    divide = false;
  }
  cvladi1 = Number(currentNumber);
  divide = true;
  // document.querySelector(`.calculate`).textContent = 0;
  currentNumber = ``;
});

document.querySelector(`.btn-multiply`).addEventListener(`click`, function () {
  if (plus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 + cvladi2;
    plus = false;
    currentNumber = document.querySelector(`.calculate`).textContent;
  } else if (minus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 - cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    minus = false;
  } else if (multiply) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 * cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    multiply = false;
  } else if (divide) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 / cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    divide = false;
  }
  cvladi1 = Number(currentNumber);
  multiply = true;
  // document.querySelector(`.calculate`).textContent = 0;
  currentNumber = ``;
});

document.querySelector(`.btn-reset`).addEventListener(`click`, function () {
  plus = false;
  minus = false;
  multiply = false;
  divide = false;
  currentNumber = ``;
  ricxvi1.textContent = 0;
});

document.querySelector(`.btn-equal`).addEventListener(`click`, function () {
  if (plus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 + cvladi2;
    plus = false;
    currentNumber = document.querySelector(`.calculate`).textContent;
  } else if (minus) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 - cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    minus = false;
  } else if (multiply) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 * cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    multiply = false;
  } else if (divide) {
    cvladi2 = Number(ricxvi1.textContent);
    document.querySelector(`.calculate`).textContent = cvladi1 / cvladi2;
    currentNumber = document.querySelector(`.calculate`).textContent;
    divide = false;
  }
});
