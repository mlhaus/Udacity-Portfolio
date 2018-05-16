var toribio = document.querySelector(".toribio");
var cat = document.querySelector(".cat");
var wedding = document.querySelector(".wedding");

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

toribio.addEventListener('click', function() {
  openInNewTab("http://toribioconstruction.com");
});

cat.addEventListener('click', function() {
  openInNewTab("https://mlhaus.github.io/animal-trading-cards/");
});

wedding.addEventListener('click', function() {
  openInNewTab("https://mlhaus.github.io/wedding/");
});