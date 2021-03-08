function blogFunction() {
    var descCollection = document.getElementsByClassName("post-desc");
    for (var i=0; i<document.getElementsByClassName("post-desc").length; i++){
        var val = document.getElementsByClassName("post-desc")[i].innerHTML.substring(0,250);
        descCollection[i].innerHTML = val;
    }
}
var deleteModal = document.getElementById("myModal3");
var close3 = document.getElementById("close3");

function pop() {
    deleteModal.style.display = "block";
}

close3.onclick = function() {
    deleteModal.style.display = "none";
}


