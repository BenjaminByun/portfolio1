function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "projectnavigation") {
    x.className += " responsive";
  } else {
    x.className = "projectnavigation";
  }
}
