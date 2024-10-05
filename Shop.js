function toggleMenu(displayState) {
    const nav = document.getElementById("navigation");
    const closeIco = document.getElementById("close-ico");  

    nav.style.display = displayState;
    closeIco.style.display = displayState;
    
}