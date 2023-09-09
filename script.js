var icon = document.getElementById("icon");
var arrows = document.querySelectorAll(".arrow");
var all = document.getElementById("all");
var about = document.getElementById("about");
var projects = document.getElementById("projects");
var social = document.getElementById("social");
var abouts = document.getElementById("About-section");
var githubs = document.getElementById("github-section");
var spotifys = document.getElementById("spotify-section");
var twitters = document.getElementById("twitter-section");
var knowmores = document.getElementById("knowmore-section");
var cvs = document.getElementById("cv-section");
var contacts = document.getElementById("contact-section");
var pro1s = document.getElementById("pro1-section");
var pro2s = document.getElementById("pro2-section");
var pro3s = document.getElementById("pro3-section");
var item = document.querySelectorAll(".item");
var rotate = document.getElementById("rotate");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  clickSound.play();
  if (document.body.classList.contains("light-theme")) {
    for (var i = [0]; i < arrows.length; i++) {
      arrows[i].src = "icons/arrow-b.png";
    }

    icon.src = "icons/moon.png";
    rotate.src = "icons/rotate-b.png";
  } else {
    icon.src = "icons/sun.png";
    rotate.src = "icons/rotate-w.png";
    for (var i = [0]; i < arrows.length; i++) {
      arrows[i].src = "icons/arrow-w.png";
    }
  }
};
all.onclick = function () {
  clickSound2.play();
  for (var i = [0]; i < item.length; i++) {
    item[[i]].style.opacity = "100%";
  }
};
social.onclick = function () {
  clickSound2.play();
  for (var i = [0]; i < item.length; i++) {
    item[[i]].style.opacity = "30%";
  }
  githubs.style.opacity = "100%";
  twitters.style.opacity = "100%";
  contacts.style.opacity = "100%";
  spotifys.style.opacity = "100%";
};
about.onclick = function () {
  clickSound2.play();
  for (var i = [0]; i < item.length; i++) {
    item[[i]].style.opacity = "30%";
  }
  abouts.style.opacity = "100%";
  cvs.style.opacity = "100%";
  knowmores.style.opacity = "100%";
};
projects.onclick = function () {
  clickSound2.play();
  for (var i = [0]; i < item.length; i++) {
    item[[i]].style.opacity = "30%";
  }
  pro1s.style.opacity = "100%";
  pro2s.style.opacity = "100%";
  pro3s.style.opacity = "100%";
};

//handling memoji change event
const imageElement = document.getElementById("memojiid");
var abtbtn = document.getElementById("abt-btn");
let isImage1 = false;

abtbtn.addEventListener("click", () => {
  clickSound.play();
  // Toggle between image sources
  if (isImage1) {
    imageElement.style.opacity = 0; // Fade out the current image
    setTimeout(() => {
      imageElement.src = "IMAGES/memoji-1.png"; // Change the image source
      imageElement.style.opacity = 1; // Fade in the new image
    }, 500);
  } else {
    imageElement.style.opacity = 0; // Fade out the current image
    setTimeout(() => {
      imageElement.src = "IMAGES/memoji-2.png"; // Change the image source
      imageElement.style.opacity = 1; // Fade in the new image
    }, 500);
  }

  // Toggle the state flag
  isImage1 = !isImage1;
});
//handling message submit
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactform")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var message = document.getElementById("message").value;
      var formData = {
        message: message,
      };
      emailjs
        .send("service_6hfhnvr", "template_s5w13su", formData)
        .then(function (response) {
          console.log("Email sent successfully!", response);
          alert(
            "Message Sent Successfully!\nThank You For Contacing Me.\nI will get back to you soon."
          );
          setTimeout(function () {
            window.location.href = "index.html";
          }, 1000);
        })
        .catch(function (error) {
          console.error("Email sending failed:", error);
          alert("Email Sending Failed. Please Try Again Later.");
        });
    });
});
//resources/KEDARCV.pdf

//RESUME DOWNLOAD HANDLER
document.getElementById("cv-btn").addEventListener("click", function () {
  const pdfPath = "resources/KEDARCV.pdf";

  // Create a dynamic link element
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = "kedarcv.pdf"; // Specify the file name for download
  link.target = "_blank"; // Open the link in a new tab

  // Trigger a click event on the link
  link.click();
});
