const textArea = document.getElementById("message")
const digitCounter = document.getElementById("digit_counter")

textArea.addEventListener("input", () => {
  let ditalCount = textArea.value.length;
  digitCounter.innerText = ditalCount + "/250"
  if (ditalCount >= 250) {
    textArea.classList.add('limit')
    digitCounter.classList.add('limit')
  } else {
    textArea.classList.remove('limit')
    digitCounter.classList.remove('limit')
  }
})
