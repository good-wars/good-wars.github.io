function openImage(img) {
  var fullScreenImg = document.getElementById("fullScreenImg");
  fullScreenImg.src = img.src;
  
  var modal = document.getElementById('fullScreenImage');
  modal.style.display = "block";
}

function closeImage() {
  var modal = document.getElementById('fullScreenImage');
  modal.style.display = "none";
}