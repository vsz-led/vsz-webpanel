
fetch('/client/autoskruising')
    .then((response) => {
        response.json().then(data => {
            console.log(data)
            let projecten = ""
            for (let kruising in data) {
                projecten += "<h4 class=\"small font-weight-bold\">" + kruising + "<span class=\"float-right\">"+ data[kruising] + "%</span></h4>" +
                    "<div class=\"progress mb-4\"><div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: " + data[kruising] + "%\"" +
                    " aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div>"
            }
            document.getElementById('autoskruising').innerHTML = projecten
        })
    })
    .catch((error) => {
        console.log(error)
    })


fetch('/client/autosopdrachtgever')
    .then((response) => {
        response.json().then(data => {
            console.log(data)
            let opdrachtgevers = ""
            for (let opdrachtgever in data) {
                opdrachtgevers += "<h4 class=\"small font-weight-bold\">" + opdrachtgever + "<span class=\"float-right\">"+ data[opdrachtgever] + "%</span></h4>" +
                    "<div class=\"progress mb-4\"><div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: " + data[opdrachtgever] + "%\"" +
                    " aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div>"
            }
            document.getElementById('autosopdrachtgever').innerHTML = opdrachtgevers
        })
    })
    .catch((error) => {
        console.log(error)
    })