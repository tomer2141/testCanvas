
const cnvWidth = 1000;
const cnvHeight = 600;
const rows = 9;
const cols = 10;
const titleMargin = 50;
const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const textSize = 12;
const borders = { upper: 0, bottom: 0, left: 0, right: 0 };
const controls = {
  view: {x: titleMargin, y: titleMargin, zoom: 1},
  viewPos: { prevX: null,  prevY: null,  isDragging: false },
}
