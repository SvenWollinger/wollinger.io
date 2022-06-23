var ratsSongId;
var ratsSongIndex = 0;
var ratsSong = [
    "Rats, rats, we are the Rats!",
    "Celebrating yet another birthday bash!",
    "Michael!",
    "It's your birthday today!",
    "Cake and ice cream is on its way!",
    "And Michael...",
    "been such a good boy this year!",
    "Open up your gifts, while we all cheer!"			
];

function ratsSongStart() {
    ratsSongIndex = 0;
    ratsSongId = setInterval(function() {
        title.innerHTML = ratsSong[ratsSongIndex];
        ratsSongIndex = ratsSongIndex >= ratsSong.length - 1 ? ratsSongIndex = 0 : ratsSongIndex + 1;
    }, 1500);
}

function ratsSongStop() {
    clearInterval(ratsSongId);
    resetTitle();
}