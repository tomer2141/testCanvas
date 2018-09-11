function controlPanel_setSize(){
  controlPanel.style.width = cnvWidth + titleMargin + 'px';
}

function zoom_in(){
  if (rectWidth < (80 / 100) * cnvWidth && rectHeight < (80 / 100) * cnvHeight) {
    let w = (20 / 100) * rectWidth;
    rectWidth += w;
    let h = (20 / 100) * rectHeight;
    rectHeight += h;

    setup();
    update();
  }
}

function zoom_in_draw(){

}
