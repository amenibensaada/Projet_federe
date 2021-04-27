window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navp").style.backgroundColor = "#fffdc6";
  } else {
    document.getElementById("navp").style.backgroundColor = "transparent";
  }
}
