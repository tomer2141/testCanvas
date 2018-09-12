let ctx;
let cnv;
let controlPanel;
let rectWidth;
let rectHeight;
let rectArr;
let selctedRect;
let zoomW;
let zoomH;
let tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid );
    // do your work
    init();

}, 100 );

function init(){

   const cnvName = 'myCanvas';
   cnv = document.getElementById(cnvName);
   controlPanel = document.getElementById('rooms-manage-control-panel');

   rectWidth = cnvWidth / cols;
   rectHeight = cnvHeight / rows;
   zoomW = (25 / 100) * rectWidth;
   zoomH = (25 / 100) * rectHeight;

   controlPanel_setSize();

   rectArr = [];

  ctx = cnv.getContext("2d");

  const cnvStyle = {
    'border': '1px solid black'
  }

  cnv.width = cnvWidth + titleMargin;
  cnv.height = cnvHeight + titleMargin;

  cnv.style.border = '3px solid black';
  setup();
  draw();

  //Listen for click on the zoom in button
  document.getElementById("zoom-in").addEventListener("click", zoom_in);
  document.getElementById("zoom-out").addEventListener("click", zoom_out);
  cnv.addEventListener("click", e => Controls.move(controls).mousePressed(e), false);
  cnv.addEventListener("mousedown", e => Controls.move(controls).mouseDown(e), false);
  cnv.addEventListener("mousemove", e => Controls.move(controls).mouseMove(e), false);
  document.getElementById('main-body').addEventListener("mouseup", e => Controls.move(controls).mouseReleased(e), false);

} //End of init function

function setup(){
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

function draw(){
for (let i = 0; i < rectArr.length; i++) {
  for (let j = 0; j < rectArr[i].length; j++) {
      rectArr[i][j].draw();
      console.log("draw");
  }
}

//Printing the letters
for (let i = 0; i < cols; i++) {
  let firstRow = rectArr[i][0];
  let lastRow = rectArr[i][rows - 1];
  let text = abc[0] + abc[i];
  let x = firstRow.x + (rectWidth / 2);
  let upperY = firstRow.y - textSize / 2;
  let bottomY = lastRow.y + rectHeight + (titleMargin / 2) - textSize / 2;
    drawText(text, x, upperY);
    drawText(text, x, bottomY);
}

//Printing the numbers
for (let i = 0; i < rows; i++) {
  let firstRow = rectArr[0][i];
  //console.log(firstRow)
  let lastRow = rectArr[cols - 1][i];
  let leftX = firstRow.x - (titleMargin / 3);
  let rightX = lastRow.x + rectWidth + (textSize / 1.3);
  let y = firstRow.y + (rectHeight / 2);
  //let rightY = lastRow.y + (rectHeight / 2);
  drawText(i + 1, leftX, y);
  drawText(i + 1, rightX, y);
}

//draw the inner big rect
ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="black";
ctx.rect(rectArr[0][0], rectArr[rows - 1][cols - 1], cols * rectWidth,  rows * rectHeight);
ctx.stroke();
//end
} //End of draw()

  function drawText(text, x, y){
    ctx.font = textSize + "px Arial";
    ctx.fillText(text, x, y);
  }

  function update(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.beginPath();

      draw();
  }

  function cnv_click_handler(e){
    let x = e.offsetX;
    let y = e.offsetY;
    for (var i = 0; i < rectArr.length; i++) {
      if (rectArr[i].isClicked(x, y)) {
        selctedRect = rectArr[i];
      }
    }
    update();
  }
