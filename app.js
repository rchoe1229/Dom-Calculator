const $buttonContainer = document.querySelector('#buttons-container')
const $screen = document.querySelector('#screen')
const $buttons = document.querySelectorAll('span')
const $clear = document.querySelectorAll('clear')

  let $expressionInput = ""

$buttonContainer.addEventListener("click", event => {
  let $expressionInput = event.target.textContent

  if ($expressionInput === "C"){
    clearValue()
  } else if ($expressionInput === "="){
    calculateResponse()
  } else {
    $screen.append($expressionInput)
  }
})

function clearValue(){
  $screen.innerHTML = ''
}

function calculateResponse(){
  const $formulaString = $screen.textContent
  const $result = eval($formulaString)
  clearValue()
  $screen.append($result)
}