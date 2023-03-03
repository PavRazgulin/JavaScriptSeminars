// const task1 = document.getElementById(".super_link");
// console.log(task1);

// const task2 = document.querySelector(".card-link");
// task2.textContent = "ссылка";

// const task3 = document.getElementsByClassName("card-link,card-body");
// console.log(task3);

// const task4 = document.getElementById("data-number");
// if (".data-number" == "50") {
//   console.log(".data-number");
// }

// const task5 = document.getElementsByTagName("title");
// console.log(task5);

// const task6 = document.getElementsByClassName("card-title");
// console.log(task6.parentNode);

// const task7 = document.querySelector(".card");
// const p = document.createElement("p");
// p.textContent = "Привет";
// card.appendChild("p");

//   const task8 = document.getElementById(".h6");
//   task8 remove();

const task1 = document.querySelectorAll("dropdown-item");

task1.forEach((`.dropdown-item`) => {
  task1.classList.add("super-dropdown")
});

const task2 = document.getElementsByClassName(".btn");

if(task2.classList.contains('btn-secondary'))
{
    task2.classList.remove('btn-secondary'); }
else {
    task2.classList.add("sbtn-secondary");
}

const task3 = document.getElementsByClassName("menu");
task3.classList.remove(`.dropdown-menu`);

const task4 = document.querySelection("dropdown");
task4.insertAdjacentHTML(`beforebegin`, `<a href="#">link</a>`);

const task5 = document.getElementById("dropdownMenuButton");
task5.textContent = `superDropdown`;

const task6 = document.querySelector("menu dropdown-menu");
if(task6.contains('aria-labelledby="dropdownMenuButton"')) {
    task6.dataset.data-dd = 3;
}

const task7 = document.getElementByClassNamed("dropdown-toggle");
task7.removeAttribute('dropdown-toggle');
