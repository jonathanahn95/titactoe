const Gamefile = require('./game');
const Game = new Gamefile.game();
const Boardfile = require('./board');
const Board = new Boardfile.board();
const HumanPlayerFile = require('./humanplayer');
const HumanPlayer = new HumanPlayerFile.humanplayer('X');
const ComputerPlayerFile = require('./computerplayer');
const ComputerPlayer = new ComputerPlayerFile.computerplayer('O 3000');


describe('the Game constructor', () => {
    test('board should be a board instance', () => {
        expect(Game.board).toEqual(Board)
    })

    test('player 1 should be a human player instance', () => {
        expect(Game.humanPlayer).toEqual(HumanPlayer)
    })

    test('player 2 should be a computer player instance', () => {
        expect(Game.computerPlayer).toEqual(ComputerPlayer)
    })
})

describe('the run method', () => { 
    test('calls the changeCurrentPlayer', () => {
        const mockFn = jest.mock()
        const currentPlayer = "X";
        
        const spy = mockFn.spyOn(Game, 'run')
        spy.mockReturnValue(currentPlayer)

        expect(Game.run()).toEqual(currentPlayer)
    })
})
