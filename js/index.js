fetch('/client/autosmaand')
    .then((response) => {
        response.text().then(data => {
            document.getElementById('autosmaand').innerHTML = data
        })
    })
    .catch((error) => {
        console.log(error)
    })

fetch('/client/kruisingen')
    .then((response) => {
        response.json().then(data => {
            console.log(data)
            document.getElementById('kruisingen').innerHTML = data.length
        })
    })
    .catch((error) => {
        console.log(error)
    })

fetch('/client/opdrachtgevercount')
    .then((response) => {
        response.text().then(data => {
            console.log(data)
            document.getElementById('opdrachtgevercount').innerHTML = data
        })
    })
    .catch((error) => {
        console.log(error)
    })