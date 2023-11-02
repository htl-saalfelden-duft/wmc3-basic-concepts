const buttonClicked = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
}

document.querySelector('#my-button').addEventListener('click', buttonClicked)

