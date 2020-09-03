function myFunction() {
  var x = document.getElementById("projectNavigation");
  if (x.className === "projectnavigation") {
    x.className += " responsive";
  } else {
    x.className = "projectnavigation";
  }
}
