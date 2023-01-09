fetch('/client/kruisingen')
    .then((response) => {
        response.json().then(data => {
            console.log(data)
            let kruisingen = ""
            data.forEach(kruising => {
                kruisingen += "<tr>\n" +
                    "<td>" + kruising.Kruisingscode + "</td>\n" +
                    "<td>" + kruising.Bedrijfscode + "</td>\n" +
                    "<td>" + kruising.Plaats + "</td>\n" +
                    "<td>" + kruising.Weg + "</td>\n" +
                    "<td>" + kruising.Plaatsing + "</td>\n" +
                    "<td>" + kruising.Laatst_Opgestart + "</td>\n" +
                    "</tr>"
                document.getElementById('table').innerHTML = kruisingen
            })
        })
    })
    .catch((error) => {
        console.log(error)
    })