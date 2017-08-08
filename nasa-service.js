function NasaService() {
    var apiKey = "?api_key=fq0AkVX8UGpx79Iq1wGe9tafGMcRkR5E3hcAhwDb";
    var baseUrl = "https://api.nasa.gov/planetary/apod";


    this.getImages = function (cb) {
        $.get(baseUrl + apiKey).then(function (res) {
            var nasaResults = res.url
            //next = ress.next
            //prev = res.previous
            console.log(nasaResults)
            cb(nasaResults)
        });
    }
}