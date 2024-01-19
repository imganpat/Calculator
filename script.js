const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const arr = Array.from(buttons);

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", () => {
    if (arr[i].innerText === "AC")
      result.innerText = "";
    else if (arr[i].innerText === "Del")
      result.innerText = result.innerText.substring(0, result.innerText.length - 1);
    else if (arr[i].innerText === "=" && result.innerHTML != "") {
      result.innerText = eval(result.innerText);
    }
    else
      result.innerText += arr[i].innerText;
  });
}


