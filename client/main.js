let btn = document.querySelector('#btn')

console.log('loaded diapers')

function submit() {
    let nameInput = document.querySelector('input')
    
    axios.post('/name', {name: nameinput.value})
    .then(res => {
        nameInput.value = ""
    })
}


btn.addEventListener('click', submit)