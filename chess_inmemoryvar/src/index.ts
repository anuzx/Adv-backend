import { startLogger } from "./logger.js";
import { games } from "./store.js";

startLogger();

setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayerName: "john",
    blackPlayerName: "bob",
    moves: [],
  });
}, 5000);

//here ws server 
