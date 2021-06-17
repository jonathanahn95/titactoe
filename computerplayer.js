class ComputerPlayer { 
    constructor() { 
        this.name = 'O 3000',
        this.scores = { 
            'O': 100,
            'X': -100,
            tie: 0
        }
    }

    makeBestMove(board) { 
        let bestScore = -Infinity;
        let move;

        for (let i = 0; i < board.board.length; i++) { 
            if (!board.board[i]) { 
                board.board[i] = 'O';
                board.step++
                let score = this.minimax(board, false);
                console.log(score, 32323222)
                board.board[i] = null;
                board.step--;

                if (score > bestScore){
                    bestScore = score;
                    move = i;
                }
            } 
        }

        board.updateBoard(move, 'O')
    }

    minimax(board, isMaximizing) { 
        const isWinner = board.hasWinner(); 
        if (isWinner !== null) { 
            return this.scores[isWinner]
        }
                
        if (isMaximizing) { 
            let bestScore = -Infinity;
            for (let i = 0; i < board.board.length; i++) { 
                if (!board.board[i]) { 
                    board.board[i] = 'O'
                    board.step++
                    let score = this.minimax(board, false)
                    board.board[i] = null
                    board.step--
                    bestScore = Math.max(score, bestScore)

                    if (board.step === 9) { 
                        
                        console.log(score, bestScore, 3232323111)
                    }
                }
            }

            
            return bestScore
        } else { 
            let bestScore = -Infinity;
            for (let i = 0; i < board.board.length; i++) { 
                if (!board.board[i]) { 
                    board.board[i] = 'X'
                    board.step++
                    let score = this.minimax(board, true)
                    board.board[i] = null
                    board.step--
                    bestScore = Math.min(score, bestScore)
                }
            }
            
            return bestScore
        }
    }


}

module.exports.computerplayer = ComputerPlayer


//known input -> known output
// 