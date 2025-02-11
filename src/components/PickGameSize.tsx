import {useState} from 'react'

import { StartGame } from './StartGame';


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
          <div className="status-info">Choose game size:</div>
          <button value={9} onClick={() => pickGameSize(9)}>Size: 3x3</button>
          <button value={16} onClick={() => pickGameSize(16)}>Size: 4x4</button>
          </>}
          <StartGame gameSize={gameSize} handleResetGame={handleResetGame}/>
    </>
  );
};
