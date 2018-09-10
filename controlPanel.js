function controlPanel_setSize(){
  controlPanel.style.width = cnvWidth + titleMargin + 'px';
}

function zoom_in(){
  console.log("zoom in");
  let addWidth = (10 / 100) * rectWidth;
  let addHeight = (10 / 100) * rectHeight;
  console.log(addWidth);
  rectWidth = rectWidth + addWidth;
  rectHeight = rectHeight + addHeight;

  draw();
}
