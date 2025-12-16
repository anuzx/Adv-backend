import { startLogger } from "./logger.js";
import { gameManager } from "./store.js";

//if we will do this and then import it into logger.ts it will create a cicular dependecy which we should avoid 
//const gameManager = new GameManager()
startLogger();

setInterval(() => {
  gameManager.addGame(Math.random().toString());
}, 5000);

//here ws server 
