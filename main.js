let ctx;
let cnv;
let tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid );
    // do your work
    init();

}, 100 );

function init(){
   const cnvName = 'myCanvas';
   cnv = document.getElementById(cnvName);

  let rectArr = [];

  ctx = cnv.getContext("2d");

  const cnvStyle = {
    'border': '1px solid black'
  }

  cnv.width = cnvWidth + titleMargin;
  cnv.height = cnvHeight + titleMargin;

  cnv.style.border = '3px solid black';

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
        let rect = new RectObj((i * rectWidth) + (titleMargin / 2), (j * rectHeight) + (titleMargin / 2));
        rectArr.push(rect);
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

  

}

function drawRect(rect){
  ctx.beginPath();
  ctx.lineWidth="1";
  ctx.strokeStyle="grey";
  ctx.rect(rect.x, rect.y, rectWidth, rectHeight);
  ctx.stroke();
}
