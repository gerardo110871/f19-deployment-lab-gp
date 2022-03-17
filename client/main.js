let btn = document.querySelector('#btn')

console.log('loaded diapers')

function submit() {
    let nameInput = document.querySelector('#fname')
    
    axios.post('/names', {name: nameInput.value})
    .then(res => {
        nameInput.value = ""
    })
}


btn.addEventListener('click', submit)