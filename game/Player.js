class Player {
  constructor(config) {
    this.config = config;
    this.element = this.createElement(config)
    this.yPos = config.floorYPos;
    this.xPos = config.leftMargin;
    this.width = config.width;
    this.height = config.height;
    this.Velocities = [-15, 15]
    this.Velocity = -1;
    this.isInJump = false;
    window.addEventListener('keydown', (e)=>{
      if(e.code === 'Space'){
        this.jump();
      }
    })
  }

  createElement(config) {
    const player = document.createElement('div');
    player.style.width = config.width + 'px';
    player.style.height = config.height + 'px';
    player.style.position = 'absolute';
    // player.style.backgroundColor = config.backgroundColor;
    player.style.backgroundImage = config.backgroundImage;
    player.style.backgroundSize = "contain";
    player.style.backgroundRepeat = "no-repeat";
    player.style.left = config.leftMargin + 'px';
    player.style.bottom = this.yPos + 'px';
    return player
  }

  moveUp() {
    this.Velocity = this.Velocities[1];
  }

  moveDown() {
    this.Velocity = this.Velocities[0];
  }

  applyVelocity = () => {
    this.yPos += this.Velocity;
    if(this.isInJump && this.yPos >= this.config.jumpHeight + this.config.floorYPos){
      this.moveDown();
    }
    if(this.yPos < this.config.floorYPos){
      this.isInJump = false;
      this.yPos = this.config.floorYPos;
    }
    this.element.style.bottom = this.yPos + 'px';
  }

  jump = () => {
    if(this.isInJump){
      return
    }else {
      this.isInJump = true;
      this.moveUp();
    }
  }


}