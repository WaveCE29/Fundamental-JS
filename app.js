let age = prompt("Enter your age:");
if (age > 18) {
  document.getElementById("content").innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/gcJm8eNaiF0?si=bimYSoMvyP6PJ_C-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
} else {
  document.getElementById("content").innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/QaG5nq2D7i8?si=ncidGNIChfTEFjks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}
