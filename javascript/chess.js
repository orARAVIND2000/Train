<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Interactive Chess Board</title>
<style>
    .chessboard {
        width: 400px;
        height: 400px;
        display: flex;
        flex-wrap: wrap;
    }

    .square {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        cursor: pointer;
    }

    .white {
        background-color: #f0d9b5;
    }

    .black {
        background-color: #b58863;
    }

    .selected {
        background-color: lightblue;
    }
</style>
</head>
<body>

<div class="chessboard" id="chessboard"></div>

<script>
    // Chess pieces setup
    var pieces = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ];

    // Function to create the chess board
    function createChessBoard() {
        var board = document.getElementById('chessboard');
        var squareColor = true; // true for white, false for black

        for (var row = 0; row < 8; row++) {
            squareColor = !squareColor; // alternate starting color for each row

            for (var col = 0; col < 8; col++) {
                var square = document.createElement('div');
                square.className = 'square ' + (squareColor ? 'white' : 'black');
                square.setAttribute('data-row', row);
                square.setAttribute('data-col', col);

                // Add piece to square if there's a piece in the pieces array
                if (pieces[row][col] !== '') {
                    square.textContent = pieces[row][col];
                }

                square.addEventListener('click', squareClickHandler);

                board.appendChild(square);
                squareColor = !squareColor; // toggle color for next square
            }
        }
    }

    // Handler for when a square is clicked
    function squareClickHandler() {
        var selectedSquare = document.querySelector('.selected');

        // If no square is currently selected, select this one
        if (!selectedSquare) {
            this.classList.add('selected');
        } else {
            // If the clicked square is already selected, deselect it
            if (this === selectedSquare) {
                this.classList.remove('selected');
            } else {
                // Move the piece (if any) to the clicked square
                var selectedPiece = selectedSquare.textContent;
                this.textContent = selectedPiece;
                selectedSquare.textContent = '';
                selectedSquare.classList.remove('selected');
            }
        }
    }

    // Call the function to create the chess board when the page loads
    window.onload = function() {
        createChessBoard();
    };
</script>

</body>
</html>
