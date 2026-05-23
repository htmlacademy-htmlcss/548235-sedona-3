const modal = document.querySelector(".modal")
const openButton = document.querySelector(".hotel-search__button")
const closeButton = document.querySelector(".modal__close-button")

openButton.addEventListener("click", () => {
  modal.classList.remove("modal--hidden")
})

closeButton.addEventListener("click", () => {
  modal.classList.add("modal--hidden")
})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("modal--hidden")
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("modal--hidden")) {
    modal.classList.add("modal--hidden")
  }
})
