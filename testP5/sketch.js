let ctx;
let cnv;
let controlPanel;
let rectWidth;
let rectHeight;
let rectArr;
let selctedRect;
let zoomW;
let zoomH;

function init(){
  setup_ini();
  rectWidth = cnvWidth / cols;
  rectHeight = cnvHeight / rows;
}

function setup_ini(){
  rectArr = [];
  for (let i = 0; i < cols; i++) {
    let col = [];
    for (let j = 0; j < rows; j++) {
        let rect = new RectObj((i * rectWidth) + (titleMargin / 2), (j * rectHeight) + (titleMargin / 2), rectWidth, rectHeight, i, j);
        col.push(rect);
    }
    rectArr.push(col);
  }
}

function setup(){
  init();
  createCanvas(cnvWidth + titleMargin, cnvHeight + titleMargin);

}

function draw(){
  background(220);
  for (let i = 0; i < rectArr.length; i++) {
    for (let j = 0; j < rectArr[i].length; j++) {
        rectArr[i][j].draw();
    }
  }
}
