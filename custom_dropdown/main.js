toggleDrowdown = () => {
  const drowdown = document.querySelector(".drowdown-list");
  const hasHidden = drowdown?.hasAttribute("hidden");
  if (hasHidden) {
    drowdown.removeAttribute("hidden");
  } else {
    drowdown?.setAttribute("hidden", "");
  }
};

function selectOption(event, option) {
  const selectedItems = document.querySelectorAll(".drowdown-item.selected");
  selectedItems.forEach((item) => {
    if (item !== event.currentTarget) {
      item.classList.remove("selected");
    }
  });
  event.currentTarget.classList.add("selected");
  const header = document.querySelector(".drowdown-header");
  header.textContent = option;
  const drowdown = document.querySelector(".drowdown-list");
  drowdown?.setAttribute("hidden", "");

  console.log("Selected option:", option);
}
