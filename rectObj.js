class RectObj {
  constructor(x, y, w, h, r, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.c = c;
  }

  draw(color = 'grey', lineWidth = "1"){
    ctx.beginPath();
    ctx.lineWidth=lineWidth;
    ctx.strokeStyle=color;
    ctx.rect(this.x, this.y, rectWidth, rectHeight);
    ctx.stroke();
    drawText("("+this.r+", "+this.c+")", this.x + (rectWidth / 2) - (textSize / 2), this.y + (rectHeight / 2));
  }

  isClicked(x, y){
    return x >= this.x && x <= this.w + this.x && y >= this.y && y <= this.h + this.y;
  }
}
