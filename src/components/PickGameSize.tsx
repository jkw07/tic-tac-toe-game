import {useState} from 'react'

import { StartGame } from './StartGame';
import { GameHeader } from './GameHeader';
import {GameLogo} from './GameLogo'


export const PickGameSize = () => {
  const [gameSize, setGameSize] = useState<number>(0);
  const pickGameSize = (size: number) => {
    setGameSize(size)
  }
  const handleResetGame = () => {
    setGameSize(0)
  }
  return (
    <>
          {!gameSize && 
          <>
          <div className="status">
            <GameLogo/>
            <GameHeader text="TIC TAC TOE GAME"/>
          </div>
          <div className="status">
            <button className="game-size-button" value={9} onClick={() => pickGameSize(9)}>Size: 3x3</button>
            <button className="game-size-button" value={16} onClick={() => pickGameSize(16)}>Size: 4x4</button>
            <button className="game-size-button" value={25} onClick={() => pickGameSize(25)}>Size: 5x5</button>
          </div>
          </>}
          {gameSize && <StartGame gameSize={gameSize} handleResetGame={handleResetGame}/>}
    </>
  );
};
