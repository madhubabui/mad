function upDate(previewPic) {
  console.log('previewPic src:', previewPic.src);
  console.log('previewPic alt:', previewPic.alt);
  let imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  let imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "url('')"; // Reset to original URL, assuming empty
  imageDiv.innerHTML = "preview the picture here.";
}
