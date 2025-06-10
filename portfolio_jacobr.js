// creates a smooth effect when going to section clicked for on navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// pop up box when message is sent
const contactForm = document.querySelector("#contact form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent. I will respond as soon as possible.");
    this.reset();
  });
}

// typewriter effect, pulled from: http://w3schools.com/howto/howto_js_typewriter.asp
const text = "Hello, I am Jacob Roessner.";
let i = 0;
const speed = 50;

function typeWriter() {
  const target = document.querySelector(".typewriter");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);
