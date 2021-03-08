var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var postModal = document.getElementById("postModal");
var deleteModal = document.getElementById("myModal3");
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
function signinmodal() {
// When the user clicks the button, open the signin modal
    modal1.style.display = "block";
}
function signupmodal() {
// When the user clicks the button, open the signup modal
    modal2.style.display = "block";
}
function signupmodalMember(){
    modal2.style.display = "block";
    modal1.style.display = "none";
}
close1.onclick = function() {
    modal1.style.display = "none";
}
close2.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == deleteModal) {
        deleteModal.style.display = "none";
    }
    if (event.target == postModal) {
        postModal.style.display = "none";
    }
};