const list = document.getElementById("list-detail")


function onFormSubmit(e) {
  e.preventDefault()
  const inputValue = e.target.children[0].value
  console.log(inputValue)
  if(inputValue ==  ""){
    alert("Input your list!")
    return
  }
  list.appendChild(createListItem(inputValue))
  e.target.children[0].value =""
}

function deleteListItem(e) {
  const divItem = e.target.parentElement
  list.removeChild(divItem)
}

function deleteAllItem(e) {
  list.innerHTML = ""
}

function createListItem(inputValue) {
  const item = document.createElement("div")
  item.setAttribute("class", "list-item")
  item.innerHTML = `
    <div class="list-item-detail">
      <input type="checkbox">
      <span>${inputValue}</span>
    </div>
    <button class="btn" onclick="deleteListItem(event)">✅</button>
  `
  return item
}