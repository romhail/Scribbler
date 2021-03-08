
var postModal = document.getElementById("postModal");

var close2 = document.getElementById("close3");

function addPost(){
    postModal.style.display = "block";
}

close2.onclick = function() {
    postModal.style.display = "none";
}
