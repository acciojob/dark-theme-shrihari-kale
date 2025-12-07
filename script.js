//your code here

function swapTheme() {
    const app = document.getElementById("app");
    const btn = document.getElementById("swap");

    // Toggle classes
    if (app.classList.contains("day")) {
        app.classList.remove("day");
        app.classList.add("night");

        btn.classList.remove("button_day");
        btn.classList.add("button_night");

    } else {
        app.classList.remove("night");
        app.classList.add("day");

        btn.classList.remove("button_night");
        btn.classList.add("button_day");
    }
}
