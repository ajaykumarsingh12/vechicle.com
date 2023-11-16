var b = document.getElementsByClassName("button")[0];
var n = document.getElementsByClassName("nav_bar")[0];

b.addEventListener("click", () => {
  n.classList.toggle("full");
  document.body.classList.toggle("cross");
  document.getElementById("img").style.cssText += "border-radius:20px;";
  b.classList.toggle("up");
});
b.addEventListener("click", () => {
  list = document.getElementsByTagName("a");
  for (i = 0; i <= list.length; i++) {
    list[i].classList.toggle("button1");
  }
});

var move = document.getElementsByClassName("move")[0];
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    move.classList.add("stop1");
  } else if (window.pageYOffset < 150) {
    move.classList.remove("stop1");
  }
});
var head1 = document.getElementsByTagName("h1");
for (i = 0; i <= head1.length; i++) {
  head1[i].style.cssText += "background:lightcoral;color:white;padding:20px;";
}
