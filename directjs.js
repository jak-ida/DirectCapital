function RedirectToHome(){
    location.href="index.html"
}
function RedirectToAbout(){
    location.href="about.html"
}
function RedirectToServices(a){
    location.href="services.html#" + a;
}
function RedirectToContact(){
    location.href="contact.html"
}
function RedirectToDownload(){
    location.href="#"
}

     
// Show scroll-to-top button after scrolling halfway through the page
window.onscroll = function () {
    var btn = document.getElementById("scroll-to-top-btn");
    if (document.body.scrollTop > (document.body.scrollHeight / 9) || document.documentElement.scrollTop > (document.documentElement.scrollHeight / 5)) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Scroll to top when button is clicked
document.getElementById("scroll-to-top-btn").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
