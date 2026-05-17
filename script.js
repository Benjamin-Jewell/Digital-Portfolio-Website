//creates the function "changeCvDisplay" which runs on the CV page in order to change the CV from displaying as a word doc to displaying as an image
function changeCvDisplay(){
    var currentCvDisplay = document.getElementById("cv-display")
    var tagType = currentCvDisplay.nodeName

    if (tagType == "IFRAME"){
        var newElement = document.createElement('img')
        newElement.className = 'word-doc-viewer'
        newElement.id = 'cv-display'
        newElement.src = 'assets/cv-img.png'
        currentCvDisplay.replaceWith(newElement)
        document.getElementById("cv-display-button").innerHTML = "View as word doc"
    }
    else{
        location.reload()
    }
}