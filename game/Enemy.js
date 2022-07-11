const velocity = -15;

class Enemy{
  constructor(enemyConfig, worldConfig) {
    this.worldConfig = worldConfig;
    this.yPos = enemyConfig.floorYPos;
    this.xPos = this.worldConfig.width
    this.width = enemyConfig.width;
    this.height = enemyConfig.height;
    this.element = this.createElement(enemyConfig);
  }

  move(){
    this.xPos += velocity;
    this.element.style.left = this.xPos + 'px';
  }

  createElement(enemyConfig){
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.bottom = enemyConfig.floorYPos + 'px';
    element.style.left = this.xPos + 'px';
    element.style.width = enemyConfig.width + 'px';
    element.style.height = enemyConfig.height + 'px'
    element.style.backgroundColor = enemyConfig.backgroundColor;
    element.style.backgroundImage = enemyConfig.backgroundImage;
    element.style.backgroundSize = "contain";
    element.style.backgroundRepeat = "no-repeat";
    return element
  }
}