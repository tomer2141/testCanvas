function controlPanel_setSize(){
  controlPanel.style.width = cnvWidth + titleMargin + 'px';
}

function zoom_in(){
  if (rectWidth < (90 / 100) * cnvWidth && rectHeight < (80 / 100) * cnvHeight) {
    //let w = (5 / 100) * rectWidth;
    rectWidth += zoomW;
    //let h = (5 / 100) * rectHeight;
    rectHeight += zoomH;

    setup();
    update();
  }
}

function zoom_out(){
  if (rectWidth > (10 / 100) * cnvWidth && rectHeight > (10 / 100) * cnvHeight) {
    //let w = (5 / 100) * rectWidth;
    rectWidth -= zoomW;
    //let h = (5 / 100) * rectHeight;
    rectHeight -= zoomH;

    setup();
    update();
  }
}
