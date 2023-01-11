const message = "Thank you for your message. We'll respond asap.";

document
  .getElementById("contactform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
