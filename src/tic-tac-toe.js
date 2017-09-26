class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.turn = 0;
        this.winner = null;
        this.matrix = [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        this.currentSymbol;

    }

    nextTurn(rowIndex, columnIndex) {
        if(this.getFieldValue(rowIndex, columnIndex) == null){
            this.turn++;
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            return true;
        } else {
            return false;
        }

    }

    isFinished() {
        if(this.winner != null || this.isDraw()){
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if(this.turn == 9){
            return true;
        } else{
            return false;
        }

    }

    isDraw() {
        if(this.turn == 9 && this.winner == null) {
            return true;
        } else {
            return false;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
