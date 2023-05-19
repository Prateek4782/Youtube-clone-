var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}


// --------------dark-theme----------------

icon.addEventListener('click', function() {
    document.body.classList.toggle("white-theme");
    if(document.body.classList.contains('white-theme')){
        icon.src = "images/moon.png"
    }else{
        icon.src = "images/sun.png"
    }
})


