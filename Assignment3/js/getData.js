function retrieveData() {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "2f0f0e8363msh8015f6c8651ccfap1b0d9cjsnab80dd9ab7a3"
            }
        })
        .then(response => response.json())
        .then(function(data) {
            // console.log(data.response);
            data.response.forEach(function(covidData) {
                // console.log(covidData);
                var countryName = document.getElementById("countryName").value;
                if (covidData.country === countryName) {
                    document.getElementById("activeCase").innerHTML = covidData.cases.active;
                    document.getElementById("recoveredCases").innerHTML = covidData.cases.recovered;
                    document.getElementById("totalCases").innerHTML = covidData.cases.total;
                    document.getElementById("totalDeaths").innerHTML = covidData.deaths.total;
                    document.getElementById("totalTests").innerHTML = covidData.tests.total;
                    document.getElementById("newCases").innerHTML = covidData.cases.new;
                }
            });
        })
        .catch(err => console.log(err));
}
retrieveData()