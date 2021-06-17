class Board { 
    constructor() {
        this.board = Array(9).fill(null);
        this.step = 0
    }

    showBoard() {
        let str = "";
        for (let i = 0; i < this.board.length; i++) {
            if ((i + 1) % 3 === 0) {
                if (!this.board[i]) {
                    str += '_ \n\n'
                } else { 
                    str += `${this.board[i]} \n\n`
                }
            } else { 
                if (!this.board[i]) {
                    str += '_ | '
                } else { 
                    str += `${this.board[i]} | `
                }
            }
        }

        console.log(str)
    }

    updateBoard(coord, mark) {
        this.board[coord-1] = mark
        this.step++;
    }

    hasWinner() {
        if (this.isTied()) { 
            return this.isTied()
        }
        const moves = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        const board = this.board

        for (let i = 0; i < moves.length; i++) {
            const [a,b,c] = moves[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
        }

        return null
    }

    isTied() { 
        if (this.step === 9) { 
            return 'tie' 
        } else { 
            return false
        }
    }
}

module.exports.board = Board;