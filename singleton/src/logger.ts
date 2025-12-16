//aim is to log the state of the server

import { gameManager } from "./store.js";

export function startLogger() {
    setInterval(() => {
      console.log(gameManager.log());
    }, 5000);
}
