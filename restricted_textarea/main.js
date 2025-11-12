const textArea = document.getElementById("message")

textArea.addEventListener("input",()=>{
  let ditalCount = textArea.value.length;
  console.log(ditalCount)
  if (ditalCount >= 250) {
    console.log("limit neg")
    textArea.classList.add('limit')
  }
})
