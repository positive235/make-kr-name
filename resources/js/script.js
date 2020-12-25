/* change menu display none to block */ 
const menu = document.getElementById("menu");

function menuDisplay() {
    if (window.matchMedia("(max-width: 690px)").matches){
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        } 
    } else {
        menu.style.display = "block";
    }
}