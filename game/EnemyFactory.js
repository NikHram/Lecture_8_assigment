class EnemyFactory{
  constructor(config, gameScene) {
    this.config = config;
    this.gameScene = gameScene;
    this.possibleEnemies = this.parseEnemiesConfig(config.enemiesConfig);
    this.enemies= []
  }

  startSpawn() {
    setInterval(() => {
      let randomIndex = Math.floor(Math.random() * this.possibleEnemies.length)
      let randomConfig = this.possibleEnemies[randomIndex];
      const enemy = this.createEnemy(randomConfig);
      this.gameScene.appendChild(enemy.element)
      this.enemies.push(enemy);
    }, 1000)
  }


  createEnemy(enemyConfig){
    const element = new Enemy(enemyConfig, this.config)
    return element
  }

  parseEnemiesConfig(config){
    const arr = [];
    for(let enemyName in config){
      arr.push(config[enemyName]);
    }
    return arr
  }
}