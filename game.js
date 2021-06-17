const Board = require('./board');
const board = new Board.board();
const HumanPlayer = require('./humanplayer');
const ComputerPlayer = require('./computerplayer');
const readline = require('readline');
const { listeners } = require('process');

class Game { 
    constructor() {
        this.board = board;
        this.humanPlayer = new HumanPlayer.humanplayer('X');
        this.computerPlayer = new ComputerPlayer.computerplayer('O');
        this.humanIsNext = true;
    }

    changeCurrentPlayer() {
        if (this.humanIsNext) { 
            this.humanIsNext = false
        } else { 
            this.humanIsNext = true;
        }
        return this.humanIsNext;
    }

    run() {
        const currentPlayer = this.humanIsNext? this.humanPlayer : this.computerPlayer;
        const rl = readline.createInterface({
            input:process.stdin,
            output: process.stdout
        });

        // if (currentPlayer === this.humanPlayer) { 
        //     rl.question(`Player ${currentPlayer.name}: Please enter a move`, (input) => {
        //         this.humanPlayer.makeMove(this.board, input, "X")

        //         if (this.gameOver()) { 
        //             rl.close() 
        //         } else { 
        //             this.board.showBoard();
        //             this.changeCurrentPlayer()
        //             this.run()
        //         }
        //     })
        // } else { 
        //     rl.write(this.computerPlayer.makeBestMove(this.board))
        //     if (this.gameOver()) { 
        //         rl.close() 
        //     } else { 
        //         this.board.showBoard();
        //         this.changeCurrentPlayer()
        //         this.run()
        //     }
        // }
        
    }

    gameOver() { 
        if (this.foundTie()) { 
            console.log(this.foundTie())
            return true
        } else if (this.foundWinner()) { 
            console.log(this.foundWinner()) 
            return true
        } else { 
            return false;
        }
    }

    foundWinner() { 
        const currentPlayer = this.humanIsNext? this.humanPlayer : this.computerPlayer;

        if (this.board.hasWinner()) { 
            return `${currentPlayer.name} has won the gasme`
        } else { 
            return null
        }
    }

    foundTie() { 
        if (this.board.isTied()) { 
            return 'There is a tie !'
        } else { 
            return null
        }
    }



}

const game = new Game()
game.run()
module.exports.game = Game;