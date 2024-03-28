function toggleTheme() {
    let body = document.querySelector("body");
    let img = document.querySelector("img");

    if (body.getAttribute("class") === "light") {
        body.setAttribute("class", "dark");
        img.setAttribute("src", "assets/images/moon.png");
        img.setAttribute("alt", "Picture of the moon");
    } else {
        body.setAttribute("class", "light");
        img.setAttribute("src", "assets/images/sun.png");
        img.setAttribute("alt", "Picture of the sun");
    }
}