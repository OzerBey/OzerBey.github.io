
var hesaplar = [{
    img: "img/github.svg",
    link: "https://github.com/OzerBey"
}, {
    img: "img/linkedin.svg",
    link: "https://www.linkedin.com/in/ozeryasin/"
}, {
    img: "img/twitter.svg",
    link: "https://twitter.com/ozer_byy"
}, {
    img: "img/pp34_min_70px-removebg-preview.jpg",
    link: "https://ozerdensecmeler.blogspot.com/"
}]

function loadSocialIcons() {
    var socialtext = ""
    for (x in hesaplar) {
        var data = `<a class="center" href="` + hesaplar[x].link + `"> <img class="center" style="padding: 5px!important;width: 70px;" src="` + hesaplar[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'light');
    }

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "light") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
}

checkDayNight()
