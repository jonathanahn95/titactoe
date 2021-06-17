const HumanPlayerFile = require('./humanplayer');
const HumanPlayer = new HumanPlayerFile.humanplayer('X');
const Boardfile = require('./board');
const Board = new Boardfile.board();


describe('The player constructor', () => {
    test('Initializes with a name if given parameter', () => {
        const Player = new HumanPlayerFile.humanplayer('X')
        expect(Player.name).toBe('X')
    })

    test('Initializes with empty string if no parameter', () => {
        const Player = new HumanPlayerFile.humanplayer()
        expect(Player.name).toBe('')
    })

})


describe('the makeMove function', () => { 
    test('calls updateBoard function', () => { 
        const updateBoard = jest.fn();
        const input = 1;
        const mark = "X"
        const makeMove = () => updateBoard(input, mark);
        makeMove();
        expect(updateBoard).toHaveBeenCalledWith(input, mark);
    })
})