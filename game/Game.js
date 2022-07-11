class Game {
  constructor(config) {
    this.width = config.width;
    this.height = config.height;
    this.gameScene = this.createGameScreen(config);
    this.rootElement = this.getHtmlElementById(config.rootElementId);
    this.putGameToRoot();
    this.ground = this.createGround(config.groundConfig);
    this.addToScene(this.ground);
    this.player = this.createPlayer(config.playerConfig);
    this.addToScene(this.player.element);
    this.points = 0;
    console.log(this.points);

    this.enemiesFactory = new EnemyFactory(config, this.gameScene);
    this.runLoop();
    this.enemiesFactory.startSpawn();
  }

  getHtmlElementById(id) {
    return document.getElementById(id)
  }

  putGameToRoot() {
    this.rootElement.appendChild(this.gameScene);
  }

  addToScene(element){
    this.gameScene.appendChild(element);
  }

  createGameScreen(config) {
    const game = document.createElement('div');
    game.style.width = config.width + 'px';
    game.style.height = config.height + 'px';
    game.style.position = 'relative';
    game.style.backgroundColor = config.backgroundColor;
    game.style.overflow = 'hidden';
    return game
  }

  createGround(config) {
    const ground = document.createElement('div');
    ground.style.width = this.width + 'px';
    ground.style.height = config.height + 'px';
    ground.style.backgroundColor = config.backgroundColor;
    ground.style.position = 'absolute';
    ground.style.bottom = 0 + 'px'
    return ground
  }

  createPlayer(config){
    const player = new Player(config);
    return player
  }

  loop = () => {
    this.player.applyVelocity();
    this.enemiesFactory.enemies.forEach((enemy, i, arr)=>{
      enemy.move();
      this.checkCollision(this.player, enemy);
      this.pointCounter(this.player, enemy);
    })
  }

  checkCollision(player, enemy){
    if(player.xPos + player.width > enemy.xPos &&
      player.xPos < enemy.xPos + enemy.width &&
      player.yPos + player.height > enemy.yPos &&
      player.yPos < enemy.yPos + enemy.height
    ){
      this.showEndGameScreen()
    }
  }

  pointCounter(player, enemy){
    if (player.xPos + player.width === enemy.xPos ||
        player.xPos === enemy.xPos + enemy.width)
    {
      this.points += 1;
    }
    let counter = document.querySelector("#point-counter");
    counter.style.position = "absolute";
    counter.style.top = "30%";
    counter.style.color = "white";
    counter.style.fontSize = "32px";
    counter.innerHTML = String(`Points count: ${this.points}`);
  }

  showEndGameScreen(){
    document.querySelector("body").innerHTML = "<div id='end_game_screen'></div>";
    let endGameScreen = document.querySelector("#end_game_screen");
    endGameScreen.style.width = "100%";
    endGameScreen.style.height = "100%";
    endGameScreen.style.backgroundColor = "black";
    endGameScreen.style.color = "white";
    endGameScreen.style.textAlign = "center";
    endGameScreen.innerHTML = "<p id='end_game_header'>Game over</p><p id='score'></p><p id='end_game_text'>Click anywhere to start again</p>";
    let endGameHeader = document.querySelector("#end_game_header");
    endGameHeader.style.marginTop = "200px";
    endGameHeader.style.fontSize = "32px";
    let score = document.querySelector("#score");
    score.style.fontSize = "24px";
    score.innerHTML = `Points scored: ${this.points}`;
    document.querySelector("#end_game_text").style.fontSize = "20px";
    endGameScreen.addEventListener("click", () => {
      location.reload();
    })
  }

  runLoop(){
    setInterval(this.loop, 20);
  }
}