const inp = document.querySelector("#inp-box");
const ul = document.querySelector(".list-cont");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (inp.value == "") {
    alert("enter the task first");
  } else {
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inp.value = "";
  saveData();
});

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});
