var discordCopyText = document.getElementById("discordCopyText");
var discordCopyTextOriginal = discordCopyText.innerHTML;

var mailCopyText = document.getElementById("mailCopyText");
var mailCopyTextOriginal = mailCopyText.innerHTML;

var isRotating = false;
function rotateImage() {
    if(isRotating) return;
    isRotating = true;
    
    var image = document.getElementById("userPhoto");
    image.classList.add("start");
    setTimeout(function() {
        image.classList.remove("start");
        isRotating = false;
    }, 1000);
}

function discordButton() {
    copyFunction(discordCopyText, discordCopyTextOriginal, "SvenWollinger#0001");
}

function mailButton() {
    copyFunction(mailCopyText, mailCopyTextOriginal, "sven@wollinger.email");
}

function copyFunction(element, originalText, textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(function() {
        element.innerHTML = "Copied!";
        setTimeout(function() {
            element.innerHTML = originalText;
        }, 3000);
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

function focus() {
    if(!isMobileAgent())
        ratsSongStop();
}

function blur() {
    if(!isMobileAgent())
        ratsSongStart();
}

window.onblur = blur;
window.onfocus = focus;

function navClick(page) {
    //Get img tags to display selected
    var navContact = getChild("navContact");
    var navProjects = getChild("navProjects");
    var navHobbys = getChild("navHobbys");
    var navPets = getChild("navPets");

    //Reset selected
    removeSelected(navContact);
    removeSelected(navProjects);
    removeSelected(navHobbys);
    removeSelected(navPets);
    
    var pageContact = document.getElementById("pageContact");
    var pageProjects = document.getElementById("pageProjects");

    pageContact.style.display = "none";
    pageProjects.style.display = "none";

    switch(page) {
        case "contact":
             navContact.classList.add("selected");
             pageContact.style.display = "block";
             break;
        case "projects":
            navProjects.classList.add("selected");
            pageProjects.style.display = "block";
            break;
        case "hobbys":
            navHobbys.classList.add("selected");
            break;
        case "pets":
            navPets.classList.add("selected");
            break;
    }
}