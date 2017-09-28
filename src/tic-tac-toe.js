class TicTacToe {
    constructor() {

       this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        
        this.currentSymbol = 'x';
        this.turn = 0;
        this.winner = null;

    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;

    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] != null) {
            return ;
        }

            this.matrix[rowIndex][columnIndex] = this.currentSymbol;
            this.turn++;
 
 

            if (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][0] === this.matrix[0][2] && this.matrix[0][0] !== null ||
                this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][0] === this.matrix[1][2] && this.matrix[1][0] !== null  ||
                this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][0] === this.matrix[2][2] && this.matrix[2][0] !== null  ||
                this.matrix[0][0] === this.matrix[1][0] && this.matrix[0][0] === this.matrix[2][0] && this.matrix[0][0] !== null  ||
                this.matrix[0][1] === this.matrix[1][1] && this.matrix[0][1] === this.matrix[2][1] && this.matrix[0][1] !== null  ||
                this.matrix[0][2] === this.matrix[1][2] && this.matrix[0][2] === this.matrix[2][2] && this.matrix[0][2] !== null  ||
                this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2] && this.matrix[0][0] !== null  ||
                this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0] && this.matrix[0][2] !== null  ) {
                this.winner = this.currentSymbol;
                }   
              this.currentSymbol = (this.currentSymbol == 'x') ? 'o' : 'x'; 
        }


    isFinished() {
        if(this.getWinner() != null || this.isDraw() == true) {
            return true;
        } else{
            return false;
        }
    }

    getWinner() {
        if(this.winner != null) {
            return this.winner;
        } else{
            return null;
        }
    }

    noMoreTurns() {
        if(this.turn == 9){
            return true;
        } else {
            return false;
        }

    }

    isDraw() {
        if (this.noMoreTurns() == true && this.getWinner() == null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex]
    }

}

module.exports = TicTacToe;
