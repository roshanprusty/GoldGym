
function validate() {
  let fullname = document.getElementById("namezone");
  let email = document.getElementById("emailzone");
  let number = document.getElementById("numberzone");
  let state = document.getElementById("statezone");
  let city = document.getElementById("cityzone");
  if (fullname.value.trim() == "" || email.value.trim() == "" || number.value.trim() == "" || state.value.trim() == "" || city.value.trim() == "") {
    alert("no blank values are allowed")
    return false;

  }
  else {
    alert("your responce has been recorded");
    true;
  }
}

let mybutton = document.getElementById(" fa-angle-double-up");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  // document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}