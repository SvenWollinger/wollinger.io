function isMobileAgent() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function getByID(id) {
    return document.getElementById(id);
}

function getChild(id) {
    var e = document.getElementById(id);
    return e == undefined ? undefined : e.childNodes[0];
}

//Title utils start
var titleElement = getByID("title");
var originalTitle = titleElement.innerHTML;

function setTitle(string) {
    titleElement.innerHTML = string;
}

function resetTitle() {
    titleElement.innerHTML = originalTitle;
}
//Title utils end