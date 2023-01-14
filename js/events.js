fetch('/client/autos')
    .then((response) => {
        response.json().then(data => {
            console.log(data)
            let autos = ""
            data.forEach(auto => {
                autos += "<tr>\n" +
                    "<td>" + auto.Autocode + "</td>\n" +
                    "<td>" + auto.Datum + "</td>\n" +
                    "<td>" + auto.Tijd + "</td>\n" +
                    "<td>" + auto.Richting + "</td>\n" +
                    "<td>" + auto.Weg + "</td>\n" +
                    "</tr>"
                document.getElementById('table').innerHTML = autos
            })
        })
    })
    .catch((error) => {
        console.log(error)
    })