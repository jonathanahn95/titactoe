const ComputerPlayer = require('./computerplayer');
const model = new ComputerPlayer.computerplayer();

describe('The computerplayer constructor', () => {
    test('Initializes with the name O 3000', () => {
        const Player = new ComputerPlayer.computerplayer()
        expect(Player.name).toBe('O 3000')
    })
})


// describe('The makeBestMove function', () => {
//     test('it should iterate through the board and find the best possible move', () => {

//     })
// })


fdescribe('#minimax', () => {
    test('it returns 100 when `O` wins', () => {
        board = {
            hasWinner: () => { return 'O' }
        }

        expect(model.minimax(board, false)).toEqual(100);
    })

    test('it expects an `O` at position 1 when `X` is at 0', () => {
        board = {
            hasWinner: () => { return null },
            board: ['X', null, null, null, null, null, null, null, null]
        }

        model.minimax(board, true)

        expect(board.board.includes('O')).toBeTruthy()
    })
})





describe('the makeBestMove function', () => { 
    test('it takes the board and updates the board', () => { 
        const updateBoard = jest.fn();
        const input = 1;
        const mark = "X"
        const makeMove = () => updateBoard(input, mark);
        makeMove();
        expect(updateBoard).toHaveBeenCalledWith(input, mark);
    })
})


