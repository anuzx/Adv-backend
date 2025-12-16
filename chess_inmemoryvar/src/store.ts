//storing the games in a variable , not using singleton or redux

interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export const games:Game[] = [];
