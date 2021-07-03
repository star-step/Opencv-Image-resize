function output(){
  let src = cv.imread('canvasInput');
  let dst = new cv.Mat();
  let dsize = new cv.Size(300, 300);
  cv.resize(src, dst, dsize, 0, 0, cv.INTER_AREA);
  cv.imshow('canvasOutput', dst);
  src.delete(); dst.delete();
}

let tryIt = document.getElementById('Convert');
tryIt.addEventListener('click', () => {
    output();
});
  function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
  }
    
    function getURL() {
      alert( window.location.protocol+window.location.host+"/image.jpg");
  }

  function download_image(){
    var canvas = document.getElementById("canvasOutput");
    var image = canvas.toDataURL("image/jpg"); 
    window.location.href=image; 
    image = "<img src='"+image+"'/>";

    
    var canvas = document.getElementById("canvasOutput");
    var image = canvas.toDataURL("image/jpg").replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-image.jpg";
    link.href = image;
    link.click();
    console.log(image);
  }