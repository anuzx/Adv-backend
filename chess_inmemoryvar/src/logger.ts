//aim is to log the state of the server

import { games } from "./store.js";

export function startLogger() {
    setInterval(() => {
      console.log(games);
    }, 5000);
}
