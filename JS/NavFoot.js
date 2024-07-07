var page = window.location.href.split("bw/");
if (page.length > 1) {
    var location = page[1].split(".")[0];
    document.getElementById(location).classList.add("active-pg")
    document.getElementById(location).classList.add("no-a")
}else{

}

document.getElementById('Footer').innerHTML = ` <div class="">
<footer class="padd-1">
    <div id="contact" class="">
        <div class=" row">
            <div class="col-lg-8">
                <div class="d-flex">
                    <img class="image-smaller" src="Images/fast-forward-red.png" alt="right-arrow">
                    <h2>Find Us</h2>
                </div>
                <iframe class="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.0595860514206!2d25.91819724564715!3d-24.654028583273288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebb5ba11d16451b%3A0xad20371532a7c74d!2sPlot%20205%20Independence%20Ave%2C%20Gaborone!5e0!3m2!1sen!2sbw!4v1714737823194!5m2!1sen!2sbw"
                     height="350" style="border:0; padding-top:1.5rem;" allowfullscreen=""
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <br>
                    <br>
            </div>

            <div class="col-lg-4">
            <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-12">
                <div class="d-flex">
                    <img class="image-smaller" src="Images/fast-forward-red.png" alt="right-arrow">
                    <h2>Contact Us</h2>
                </div>
                <ul class="margin-left">
                    <li class="d-flex"><img class="image-smaller" src="Images/tele.png" alt="telephone icon"> <a
                            href="tel:+2673901942"> +267 3901942</a></li>
                    <li class="d-flex"><img class="image-smaller" src="Images/app.png" alt="whatsapp icon"><a
                            href="tel:+26773366966"> +267 73366966</a></li>
                    <li class="d-flex"><img class="image-smaller" src="Images/email.png" alt="email icon"><a
                            href="mailto:info@directcapital.co.bw "> info@directcapital.co.bw </a></li>
                    <li class="d-flex"><img class="image-smaller" src="Images/email.png" alt="email icon"><a
                            href="mailto:sales@directcapital.co.bw">sales@directcapital.co.bw</a></li>
                </ul>
            </div>
                <br>
            <div class="col-sm-12 col-md-6 col-lg-12">
                <div class="d-flex">
                    <img class="image-smaller" src="Images/fast-forward-red.png" alt="right-arrow">
                    <h2>Follow Us</h2>
                </div>
                <div class="margin-left">
                    <p> Stay connected on social media:</p>
                    <div class="d-flex">
                        <a href="https://web.facebook.com/profile.php?id=100063589358012" target="_blank"><img
                                class="image-smaller-x" src="Images/facebook.png" alt="facebook logo"></a>
                        <a href="https://www.linkedin.com/company/directcapital/" target="_blank"><img
                                class="image-smaller-x" src="Images/linkedin.png" alt="linked in logo"></a>
                    </div>
                </div>
            </div>
            </div>

            </div>
        </div>
    </div>
</footer>
</div>
<footer class="footer-1"> &copy; Copyright 2024, Direct Capital, All Rights Reserved <div> Designed by <a
                class="yortek" href="www.yortek.co.bw" target="_blank">Yortek</a></div>
    </footer>`


document.getElementById('Header').innerHTML = `<img onclick="redirectToHome()" class="icon" src="Images/lg-2.png" />
<div class="navbar d-flex p-2 justify-content-center">
    <a id="Index" href="index.html" >HOME</a>
    <a id="About" href="about.html">ABOUT US</a>
    <a id="Services" href="services.html">SERVICES</a>
    <a id="Contact" href="contact.html">CONTACT US</a>
</div>
<div id="HamburgerDrop" class="dropdown-3"></div>
` 
