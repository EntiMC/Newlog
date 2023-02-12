
success: You are now editing your live project
sproblox

Settings
Assets
Files
script.js


PRETTIER
// Get the button
let mybutton = document.getElementById("myBtn");
​
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
​
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
​
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;
​
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
*/
You are now editing your live project