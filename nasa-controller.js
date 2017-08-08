function NasaController(){
    var nasaService = new NasaService()


    drawImages = function(images) {
        var template = ''
        var imageElem = document.getElementById('results')
        // var
        template += `
        <div class="col-xs-12">
            <img src="${images}">
        </div>
        `
        imageElem.innerHTML = template
    }


function getImages (){
    nasaService.getImages(drawImages)
}
getImages()


}