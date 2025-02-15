export const GameRules = () => {
    return (
        <div className="game-rules">
            <h1>How to Play</h1>
            <div className="rules-sections">
                <div className="section">
                    <h2>1</h2>
                    <h3>Game Setup</h3>
                    <p>The game has 3 options - the standard tic-tac-toe(3x3) , 4x4 and 5x5, where you have to place 4 consecutive X or O to win.</p>
                    <p>One player uses "X", and the other player uses "O". Player "X" always goes first.</p>
                </div>
                <div className="section">
                    <h2>2</h2>
                    <h3>How To Play</h3>
                    <p>The game starts with one player placing their mark ("X" or "O") in any empty square.</p>
                    <p>Players take turns, placing one mark per turn in an available square.</p>
                </div>
                <div className="section">
                    <h2>3</h2>
                    <h3>Game End</h3>
                    <p>Depending on the board size, a player wins if they align 3 or 4 of their marks: Horizontally, Vertically or Diagonally</p>
                    <p>The game ends immediately when a player achieves a winning sequence. If the board is full and no player has won, the game ends in a tie.</p>
                    <p>Adapt your strategy depending on the board size and enjoy the game!</p>
                </div>
            </div>
        </div>
    )
}