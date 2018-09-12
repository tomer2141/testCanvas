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

function draging_left(){
  for (let i = 0; i < rectArr.length; i++) {
      for (let j = 0; j < rectArr[i].length; j++) {
        rectArr[i][j].x -= 20;
      }
  }
  console.log('left');
  update();
}

function draging_right(){
  for (let i = 0; i < rectArr.length; i++) {
      for (let j = 0; j < rectArr[i].length; j++) {
        rectArr[i][j].x += 20;
      }
  }
  console.log('right');
  update();
}

function draging_up(){
  for (let i = 0; i < rectArr.length; i++) {
      for (let j = 0; j < rectArr[i].length; j++) {
        rectArr[i][j].y -= 20;
      }
  }
  console.log('up');
  update();
}

function draging_down(){
  for (let i = 0; i < rectArr.length; i++) {
      for (let j = 0; j < rectArr[i].length; j++) {
        rectArr[i][j].y += 20;
      }
  }
  console.log('down');
  update();
}
