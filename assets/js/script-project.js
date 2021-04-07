function openCloseMenu() {
    var divMenuResposivo = document.getElementById("menu-responsive").style.top;

    console.log(divMenuResposivo);

    if (divMenuResposivo == "-170px") {
        document.getElementById("menu-responsive").style.top = "0px";
    } else {
        document.getElementById("menu-responsive").style.top = "-170px";
    }

}