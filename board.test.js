const Boardfile = require('./board');
const Board = new Boardfile.board();
const Gamefile = require('./game');
const Game = new Gamefile.game();

describe("the Board constructor", () => {
    test('it should contruct', () => {
        expect(Board.board).toStrictEqual([null,null,null,null,null,null,null,null,null])
    })
})

describe('the showBoard method', () => {
    test('it should console.log the status of the board', () => {
        console.log = jest.fn();
        Board.showBoard()
        expect(console.log.mock.calls[0][0]).toBe(3)
    })
})

describe('the updateBoard method', () => {
    test('it should update the board when given position', () => {
        const mockFn = jest.mock()
        const mockResult = `X | _ | _ \n\n_ | _ | _ \n\n_ | _ | _ \n\n`;

        const spy = mockFn.spyOn(Board, 'updateBoard')
        spy.mockReturnValue(mockResult)

        expect(Board.updateBoard(1)).toEqual(mockResult)
    })
})

describe('the foundWinner method', () => { 
    test('returns true when there is a winner', () => {
        const mockBoard = ['X','X','X',null,null,null,null,null,null];
        Board.board = mockBoard

        Game.board = Board;
        expect(Game.board.foundWinner()).toBe(true)

    })
})

describe('the foundWinner method', () => { 
    test('returns false when there is no winner', () => {
        const mockBoard = [
        'X','O','X',
        'O', 'X', 'O', 
        'O', 'X', 'O'];
        Board.board = mockBoard


        Game.board = Board;
        expect(Game.board.foundWinner()).toBe(false)

    })
})

describe('the isTied method', () => { 
    test('returns true if step reaches 9 (length of the board', () => {
        Board.step = 9;


        expect(Board.isTied()).toBe(true)

    })
})

describe('the isTied method', () => { 
    test('returns false if step is not 9 (length of the board', () => {
        Board.step = 3;


        expect(Board.isTied()).toBe(false)
    })
})
