var discordCopyText = getByID("discordCopyText");
var discordCopyTextOriginal = discordCopyText.innerHTML;

var mailCopyText = getByID("mailCopyText");
var mailCopyTextOriginal = mailCopyText.innerHTML;

var isRotating = false;
function rotateUserPhoto() {
    if(isRotating) return;
    isRotating = true;
    
    var image = getByID("userPhoto");
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

function setSelected(isSelected, ...elements) {
    for(var index in elements) {
        var element = elements[index];
        if(element != undefined) isSelected ? element.classList.add("selected") : element.classList.remove("selected");
    }
}

function setVisible(isVisible, ...elements) {
    for(var index in elements) {
        var element = elements[index];
        if(element != undefined) isVisible ? element.style.display = "block" : element.style.display = "none";
    }
}

function navClick(page) {
    //Get img tags to display selected
    var navContact = getChild("navContact");
    var navProjects = getChild("navProjects");
    var navHobbys = getChild("navHobbys");
    var navPets = getChild("navPets");

    //Get pages
    var pageContact = getByID("pageContact");
    var pageProjects = getByID("pageProjects");
    var pageHobbys = getByID("pageHobbys");

    //Reset selected
    setSelected(false, navContact, navProjects, navHobbys, navPets);
    setVisible(false, pageContact, pageProjects, pageHobbys);

    switch(page) {
        case "contact":
            setSelected(true, navContact);
            setVisible(true, pageContact);
            break;
        case "projects":
            setSelected(true, navProjects);
            setVisible(true, pageProjects);
            break;
        case "hobbys":
            setSelected(true, navHobbys);
            setVisible(true, pageHobbys);
            break;
        case "pets":
            setSelected(true, navPets);
            break;
    }
}