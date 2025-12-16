//storing the games in a variable , not using singleton or redux

interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

//export const games:Game[] = [];

//state management in class using singleton
export class GameManager{
  games: Game[] = []
  private static instance:GameManager
  private constructor() {
    //private keyword is used to make singleton
    //also we cannot make any obj out of the class , from outside the class
    this.games = []
 }
  static getInstance() {
    //static keyword helps to call this fn using the class and need not to make a obj
    //create a single instance of GameManager and return it
    if (this.instance) {
      return this.instance
    }
    this.instance = new GameManager()
    return this.instance
  }
  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game ${gameId}`)
    const game = this.games.find(game => game.id === gameId)
    game?.moves.push(move)
  }
  addGame(gameId:string) {
    const game = {
      id: gameId,
      whitePlayerName: "john",
      blackPlayerName: "bob",
      moves: [],
    };
    this.games.push(game)
  }
  log() {
    console.log(this.games)
  }
}

export const gameManager = GameManager.getInstance()