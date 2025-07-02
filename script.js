fetch('Heros.json')
    .then(response => response.json())
    .then(data => console.log(data))

// document.getElementById('image').innerHTML =
// document.getElementById('name').innerHTML =
// document.getElementById('realName').innerHTML =
// document.getElementById('power').innerHTML =
// document.getElementById('city').innerHTML =
// document.getElementById('firtApparence').innerHTML =

fetch('Heros.json')
    .then(response => response.json())
    .then(data => console.log(data[2].name))

fetch('Heros.json')
    .then(response => response.json())
    .then(data => console.log(data[2]["name"]))