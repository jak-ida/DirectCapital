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
    //location.href="#"
   
    fetch('about.html')
    .then(response => response.blob())
    .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'about.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    })
    .catch(console.error);
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



//Whatsapp Widget JS
/* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on("click", "#send-it", function() {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = $("#get-number").text(),
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=+267 73366966" + e + f;
      window.open(g, "_blank");
    }
  }),
    $(document).on("click", ".informasi", function() {
      (document.getElementById("get-number").innerHTML = $(this)
        .children(".my-number")
        .text()),
        $(".start-chat,.get-new")
          .addClass("show")
          .removeClass("hide"),
        $(".home-chat,.head-home")
          .addClass("hide")
          .removeClass("show"),
        (document.getElementById("get-nama").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-nama")
          .text()),
        (document.getElementById("get-label").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-label")
          .text());
    }),
    $(document).on("click", ".close-chat", function() {
      $("#whatsapp-chat")
        .addClass("hide")
        .removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function() {
      $("#whatsapp-chat")
        .addClass("show")
        .removeClass("hide");
    });
  
