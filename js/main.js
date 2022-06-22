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

var title = document.getElementById("title");
var titleOriginal = title.innerHTML;

var ratsSongId;
var ratsSongIndex = 0;
var ratsSong = [
    "Rats, rats, we are the Rats!",
    "Celebrating yet another birthday bash!",
    "Michael!",
    "It's your birthday today!",
    "Cake and ice cream is on its way!",
    "And Michael...",
    "you're such a good boy this year!",
    "Open up your gifts, while we all cheer!"			
];

function focus() {
    title.innerHTML = titleOriginal;
    clearInterval(ratsSongId);
}

function blur() {
    ratsSongIndex = 0;
    ratsSongId = setInterval(function() {
        title.innerHTML = ratsSong[ratsSongIndex];
        if(ratsSongIndex >= ratsSong.length - 1) {
            ratsSongIndex = 0;
        } else {
            ratsSongIndex++;
        }
    }, 1500);
}

window.onblur = blur;
window.onfocus = focus;

function navClick(page) {
    var navContact = document.getElementById("navContact");
    var navProjects = document.getElementById("navProjects");
    var navHobbys = document.getElementById("navHobbys");
    var navPets = document.getElementById("navPets");
    navContact.classList.remove("selected");
    navProjects.classList.remove("selected");
    navHobbys.classList.remove("selected");
    navPets.classList.remove("selected");
    
    
    switch(page) {
        case "contact":
             navContact.classList.add("selected");
             break;
        case "projects":
            navProjects.classList.add("selected");
            break;
        case "hobbys":
            navHobbys.classList.add("selected");
            break;
        case "pets":
            navPets.classList.add("selected");
            break;
    }
}