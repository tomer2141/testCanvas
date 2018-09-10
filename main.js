let ctx;
let cnv;
let controlPanel;
let rectWidth;
let rectHeight;
let rectArr;
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

   controlPanel_setSize();

   rectArr = [];

  ctx = cnv.getContext("2d");

  const cnvStyle = {
    'border': '1px solid black'
  }

  cnv.width = cnvWidth + titleMargin;
  cnv.height = cnvHeight + titleMargin;

  cnv.style.border = '3px solid black';

  draw();


  //Listen for click on the zoom in button
  document.getElementById("zoom-in").addEventListener("click", zoom_in);

} //End of init function

function draw(){

for (let i = 0; i < cols; i++) {
  let text = abc[0] + abc[i];
  let x = (i * rectWidth) + (titleMargin / 2) + ((rectWidth / 2) - textSize / 2);
  let upperY = (titleMargin / 2) / 2 + (textSize / 2);
  let bottomY = cnvHeight + titleMargin - (textSize / 2);
    drawText(text, x, upperY);
    drawText(text, x, bottomY);
  for (let j = 0; j < rows; j++) {
      let rect = new RectObj((i * rectWidth) + (titleMargin / 2), (j * rectHeight) + (titleMargin / 2));
      rectArr.push(rect);
      if (i < 1) {
        let leftX = ((titleMargin / 2) - (textSize / 2)) / 2;
        let rightX = cnvWidth + (titleMargin / 2) + leftX;
        let y = (j * rectHeight) + (titleMargin / 2) + (rectHeight / 2);
        drawText(j + 1, rightX, y);
        drawText(j + 1, leftX, y);
      }
  }
}

for (let i = 0; i < rectArr.length; i++) {
  drawRect(rectArr[i]);
}

//draw the inner big rect
ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="black";
ctx.rect(titleMargin / 2, titleMargin / 2, cols * rectWidth,  rows * rectHeight);
ctx.stroke();
//end
} //End of draw()


  function drawRect(rect){
    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.strokeStyle="grey";
    ctx.rect(rect.x, rect.y, rectWidth, rectHeight);
    ctx.stroke();
  }

  function drawText(text, x, y){
    ctx.font = textSize + "px Arial";
    ctx.fillText(text, x, y);
  }

  function update(){
    
  }
