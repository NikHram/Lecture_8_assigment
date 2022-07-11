window.onload = () => {
  const game = new Game(gameConfig);
  console.log(game);
}

let gameConfig = {
  rootElementId: 'game',
  width: 1400,
  height: 1000,
  backgroundColor: 'darkcyan',
  groundConfig: {
    height: 300,
    backgroundColor: 'black',
  },
  playerConfig: {
    width: 100,
    height: 100,
    // backgroundColor: 'green',
    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png)',
    leftMargin: 30,
    floorYPos: 300,
    jumpHeight: 300
  },
  enemiesConfig: {
    defaultEnemy: {
      width: 100,
      height: 100,
      floorYPos: 240,
      // backgroundColor: 'red',
      backgroundImage: 'url(https://www.tesla.com/assets/img/roadster_side_view.png)',
      weightChance: 1
    },
    flyEnemy: {
      width: 100,
      height: 100,
      floorYPos: 450,
      // backgroundColor: 'yellow',
      backgroundImage: 'url(https://www.pngall.com/wp-content/uploads/2016/06/Forever-Alone-PNG-Image.png)',
      weightChance: 2
    },
    }
}
