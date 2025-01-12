/*!
=========================================================
* Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// For the first blog card
var likeButton1 = document.getElementById("likeButton1");
var heartIcon1 = document.getElementById("heartIcon1");
var likeCountElement1 = document.getElementById("likeCount1");
var isLiked1 = false;

likeButton1.addEventListener("click", function() {
    var likeCount1 = parseInt(likeCountElement1.textContent);
    if (!isLiked1) {
        likeCount1++;
        likeCountElement1.textContent = likeCount1;
        heartIcon1.classList.add("ti-heart-filled");
        isLiked1 = true;
    } else {
        likeCount1--;
        likeCountElement1.textContent = likeCount1;
        heartIcon1.classList.remove("ti-heart-filled");
        isLiked1 = false;
    }
});

// For the second blog card
var likeButton2 = document.getElementById("likeButton2");
var heartIcon2 = document.getElementById("heartIcon2");
var likeCountElement2 = document.getElementById("likeCount2");
var isLiked2 = false;

likeButton2.addEventListener("click", function() {
    var likeCount2 = parseInt(likeCountElement2.textContent);
    if (!isLiked2) {
        likeCount2++;
        likeCountElement2.textContent = likeCount2;
        heartIcon2.classList.add("ti-heart-filled");
        isLiked2 = true;
    } else {
        likeCount2--;
        likeCountElement2.textContent = likeCount2;
        heartIcon2.classList.remove("ti-heart-filled");
        isLiked2 = false;
    }
});

// For the third blog card
var likeButton3 = document.getElementById("likeButton3");
var heartIcon3 = document.getElementById("heartIcon3");
var likeCountElement3 = document.getElementById("likeCount3");
var isLiked3 = false;

likeButton3.addEventListener("click", function() {
    var likeCount3 = parseInt(likeCountElement3.textContent);
    if (!isLiked3) {
        likeCount3++;
        likeCountElement3.textContent = likeCount3;
        heartIcon3.classList.add("ti-heart-filled");
        isLiked3 = true;
    } else {
        likeCount3--;
        likeCountElement3.textContent = likeCount3;
        heartIcon3.classList.remove("ti-heart-filled");
        isLiked3 = false;
    }
});

// For the fourth blog card
var likeButton4 = document.getElementById("likeButton4");
var heartIcon4 = document.getElementById("heartIcon4");
var likeCountElement4 = document.getElementById("likeCount4");
var isLiked4 = false;

likeButton4.addEventListener("click", function() {
    var likeCount4 = parseInt(likeCountElement4.textContent);
    if (!isLiked4) {
        likeCount4++;
        likeCountElement4.textContent = likeCount4;
        heartIcon4.classList.add("ti-heart-filled");
        isLiked4 = true;
    } else {
        likeCount4--;
        likeCountElement4.textContent = likeCount4;
        heartIcon4.classList.remove("ti-heart-filled");
        isLiked4 = false;
    }
});

// For the fifth blog card
var likeButton5 = document.getElementById("likeButton5");
var heartIcon5 = document.getElementById("heartIcon5");
var likeCountElement5 = document.getElementById("likeCount5");
var isLiked5 = false;

likeButton5.addEventListener("click", function() {
    var likeCount5 = parseInt(likeCountElement5.textContent);
    if (!isLiked5) {
        likeCount5++;
        likeCountElement5.textContent = likeCount5;
        heartIcon5.classList.add("ti-heart-filled");
        isLiked5 = true;
    } else {
        likeCount5--;
        likeCountElement5.textContent = likeCount5;
        heartIcon5.classList.remove("ti-heart-filled");
        isLiked5 = false;
    }
});

// For the sixth blog card
var likeButton6 = document.getElementById("likeButton6");
var heartIcon6 = document.getElementById("heartIcon6");
var likeCountElement6 = document.getElementById("likeCount6");
var isLiked6 = false;

likeButton6.addEventListener("click", function() {
    var likeCount6 = parseInt(likeCountElement6.textContent);
    if (!isLiked6) {
        likeCount6++;
        likeCountElement6.textContent = likeCount6;
        heartIcon6.classList.add("ti-heart-filled");
        isLiked6 = true;
    } else {
        likeCount6--;
        likeCountElement6.textContent = likeCount6;
        heartIcon6.classList.remove("ti-heart-filled");
        isLiked6 = false;
    }
});

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

$(document).ready(function(){
  // Other existing code...

  // Download button click event handler
  $("#downloadButton").on('click', function() {
      // Construct the URL to the PDF file
      var pdfUrl = "assets/imgs/AkshayPardeshi.pdf";

      // Create a hidden anchor element
      var link = document.createElement('a');
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "cv.pdf";

      // Append the anchor element to the body
      document.body.appendChild(link);

      // Trigger the click event on the anchor element
      link.click();

      // Remove the anchor element from the body
      document.body.removeChild(link);
  });
});

$(document).ready(function(){
  // Other existing code...

  // Download button click event handler
  $("#QAResume").on('click', function() {
      // Construct the URL to the PDF file
      var pdfUrl = "assets/imgs/AkshayPardeshi.pdf";

      // Create a hidden anchor element
      var link = document.createElement('a');
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "cv.pdf";

      // Append the anchor element to the body
      document.body.appendChild(link);

      // Trigger the click event on the anchor element
      link.click();

      // Remove the anchor element from the body
      document.body.removeChild(link);
  });
});

