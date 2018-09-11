class RectObj {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw(color = 'grey', lineWidth = "1"){
    ctx.beginPath();
    ctx.lineWidth=lineWidth;
    ctx.strokeStyle=color;
    ctx.rect(this.x, this.y, rectWidth, rectHeight);
    ctx.stroke();
  }

  isClicked(x, y){
    return x >= this.x && x <= this.w + this.x && y >= this.y && y <= this.h + this.y;
  }
}
