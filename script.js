//main or calculation section

const result = document.querySelector(".result");
const equation = document.querySelector(".equation");
const buttons = document.querySelectorAll("button");
const arr = Array.from(buttons);

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", () => {
    if (arr[i].innerText === "AC") {
      equation.innerText = "";
      result.innerText = "";
    }
    else if (arr[i].innerText === "Del")
      result.innerText = result.innerText.substring(0, result.innerText.length - 1);
    else if (arr[i].innerText === "=" && result.innerHTML != "") {
      equation.innerText = result.innerHTML;
      result.innerText = eval(result.innerText);
    }
    else
      result.innerText += arr[i].innerText;
  });
}


// menu section

const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.querySelector(".menu");

function showMenu() {
  openBtn.addEventListener("click", () => {
    menu.classList.add("menu-open");
    closeBtn.style.visibility = "visible";
    openBtn.style.visibility = "hidden";
  });
}
showMenu();

function hideMenu() {
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("menu-open");
    closeBtn.style.visibility = "hidden";
    openBtn.style.visibility = "visible";
  });
}
hideMenu();


// changing theme section

const themeStyle = document.getElementById("theme-style");
const darkThemeBtn = document.getElementById("dark-btn");
const lightThemeBtn = document.getElementById("light-btn");

darkThemeBtn.addEventListener("click", () => {
  themeStyle.href = "style.css";
})
lightThemeBtn.addEventListener("click", () => {
  themeStyle.href = "light-style.css";
})


