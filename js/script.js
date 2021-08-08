const { getMaxListeners } = require("process");
var navLinks = document.getElementById("navLinks");

function showmenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right ="0";
}

function hidemenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right="-100%";
}

document.getElementById('loader').style.display = "block";
function loader(){
    document.getElementById('loader').style.display = "none";
}

