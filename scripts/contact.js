// when the "submit-button" is clicked, the contents of the contact-page are replaced 
// with a single <p> element that reads "Thank you for your message" in size 24 font.
var fullPage = document.getElementById("contact-page");
var submit = document.getElementById("submit-button");
function submitMessage(){
    fullPage.classList.add("submitted");
    fullPage.innerHTML = "<p>Thank you for your message!</p>";
}
submit.addEventListener("click", submitMessage);

// hint: you can change the style of an element by modifying the value of that 
// element's .style.fontSize, or by updating its .classList.

