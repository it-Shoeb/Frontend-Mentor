const spans = document.querySelectorAll("span");

spans.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement.parentElement;
    parent.classList.toggle("active");
    const active = parent.classList.contains("active");
    item.innerHTML = active
      ? '<img src="./assets/images/icon-minus.svg" alt="" />'
      : '<img src="./assets/images/icon-plus.svg" alt="" />';
  });
});
