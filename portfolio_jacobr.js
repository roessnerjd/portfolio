// creates a smooth effect when going to section clicked for on navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// pop up box when message is sent (Netlify-compatible)
/*
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(contactForm);

      const res = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Message sent. I will respond as soon as possible.");
        contactForm.reset();
      } else {
        alert("Message failed to send. Please try again later.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    }
  });
}
  */

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
