window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("searchbar").style.opacity = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
    document.getElementById("searchbar").style.opacity = "1";
  }
}


