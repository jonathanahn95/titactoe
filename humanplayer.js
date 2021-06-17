class HumanPlayer { 
    constructor(name="") {
        this.name = name;
    }

    makeMove(board, coord, mark) {
        board.updateBoard(coord, mark);
    }


}

module.exports.humanplayer = HumanPlayer