fetch('/client/autosmaand')
    .then((response) => {
        response.text().then(data => {
            document.getElementById('autosmaand').innerHTML = data
        })
    })
    .catch((error) => {
        console.log(error)
    })