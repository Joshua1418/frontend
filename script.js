let active = false;

function OpenNav(){
    document.getElementById("slideNav").style.display = active?
    "none" : "block";
    active = !active;
}


function closeNav(){
    document.getElementById("slideNav").style.display = "none";
}
