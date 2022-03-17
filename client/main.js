let btn = document.querySelector('button')

console.log('loaded diapers')

function submit(event) {
    let nameInput = document.querySelector('input')
    
    axios.post('/name', {name: nameinput.value})
    .then(res => {
        nameInput.value = ""
    })
}


btn.addEventListener('click', submit)