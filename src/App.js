
import Cell from './components/Cell'
import {useEffect, useState} from 'react'
function App() {

  const [cells, setCells] = useState(Array(9).fill(""))
  const [play, setPlay] = useState("circle")
  const [winMessage, setWinMessage] = useState(false)
  

  const winner = () => {
    const check = [
      [0,1,2], 
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8],
    ]

    for (let i=0; i<check.length; i++) {
      const [a,b,c] = check[i]

      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        setWinMessage(true)
        return cells[a]
      } 
    }
    return null
    
  }

  useEffect(() => {
    winner()
  }, [cells])

  console.log(cells)
  
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, id) => (
          <Cell 
          key={id}
          id={id}
          cell={cell}
          play={play}
          setPlay={setPlay}
          cells={cells}
          setCells={setCells}

          />
        ))}
      </div>
      <p>This is {play.toUpperCase()} turn</p>
      {winMessage ? <p>Yay you win!</p> : null}
    </div>
  );
}

export default App;
