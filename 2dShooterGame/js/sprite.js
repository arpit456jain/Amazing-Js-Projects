export default class Sprite {
  constructor(Lx, Ly, posX, posY, RepetX, RepetY) {
    this.Lx = Lx;
    this.Ly = Ly;
    this.posX = posX;
    this.posY = posY;
    this.RepetX = RepetX;
    this.RepetY = RepetY;
    this.all_img = [];
    this.img = new Image();
    this.anim_id = -1;
    this.cnv = document.getElementById("myCanvas");
    this.ctx = this.cnv.getContext("2d");
    this.slow = 3;
    this.sslow = 3;
    this.state = false;
    this.hp = 5;
    this.hRatio = 1.5;
    this.vRatio = 1.5;
    this.centerShift_x = 0;
    this.centerShift_y = 0;
    this.knife = 0;
    this.attack = 0;
  }
  load() {
    let canvas1 = document.createElement("canvas");
    canvas1.width = this.Lx * this.RepetX;
    canvas1.height = this.Ly * this.RepetY;
    let context1 = canvas1.getContext("2d");
    context1.drawImage(
      this.img,
      0,
      0,
      this.Lx * this.RepetX,
      this.Ly * this.RepetY
    );
    for (let j = 0; j < this.RepetY; j += 1) {
      let imax = this.RepetX;
      for (let i = 0; i < imax; i += 1) {
        let canvasImageData1 = context1.getImageData(
          i * this.Lx,
          j * this.Ly,
          this.Lx,
          this.Ly
        );
        let canvas2 = document.createElement("canvas");
        canvas2.width = this.Lx;
        canvas2.height = this.Ly;
        let context2 = canvas2.getContext("2d");
        context2.putImageData(canvasImageData1, 0, 0);
        this.all_img.push(canvas2);
      }
    }
    this.anim_id = 0;
  }
  draw() {
    if (this.anim_id >= 0) {
      this.ctx.drawImage(
        this.all_img[this.anim_id],
        this.posX,
        this.posY,
        this.Lx,
        this.Ly
      );
      if (this.slow == 1) {
        this.anim_id += 1;
        this.slow = this.sslow;
      }
      this.slow -= 1;
      if (this.anim_id == this.all_img.length) {
        this.anim_id = 0;
      }
    }
  }
  drawpercent() { 
    if (this.anim_id >= 0) {
      this.ctx.drawImage(
        this.all_img[this.anim_id],
        this.posX,
        this.posY,
        this.Lx,
        this.Ly,
        this.centerShift_x,
        this.centerShift_y,
        this.Lx * this.hRatio,
        this.Ly * this.vRatio
      );
    }
  }
  drawScale() {
    if (this.anim_id >= 0) {
      this.ctx.drawImage(
        this.all_img[this.anim_id],
        this.posX,
        this.posY,
        this.Lx,
        this.Ly,
        this.centerShift_x,
        this.centerShift_y,
        this.Lx * this.hRatio,
        this.Ly * this.vRatio
      );
      if (this.slow == 1) {
        this.anim_id += 1;
        this.slow = this.sslow;
      }
      this.slow -= 1;
      if (this.anim_id == this.all_img.length) {
        this.anim_id = 0;
      }
    }
  }
  drawSlice() { 
    if (this.anim_id >= 0) {
      this.ctx.drawImage(
        this.all_img[this.anim_id],
        this.posX,
        this.posY,
        this.Lx,
        this.Ly
      );
    }
  }
}
