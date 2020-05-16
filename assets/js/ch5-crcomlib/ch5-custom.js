var mainPage = document.getElementById("main-page");

var page01button = document.getElementById("page-01-button");
var page01 = document.getElementById("page-01");

var page02button = document.getElementById("page-02-button");
var page02 = document.getElementById("page-02");

page01button.addEventListener("click", function () {
  mainPage.setActiveViewChild(page01);
});

page02button.addEventListener("click", function () {
  mainPage.setActiveViewChild(page02);
});
