window.onload = (event) => {
    //document.getElementById("ul").style.transition = "0.4s";
};

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const nav = document.getElementById("nav").style;

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // PEQUEÑO
        nav.height = "3rem";
        nav.fontSize = "x-large";
        nav.margin = "10rem";
        nav.marginTop = "0.5rem";
        nav.width = "calc(100% - 20rem)"

    } else {
        // GRANDE
        nav.height = "5rem";
        nav.fontSize = "xx-large";
        nav.margin = "2rem";
        nav.marginTop = "2rem";
        nav.width = "calc(100% - 4rem)"
    }
}