import React, {useState,useEffect} from 'react'
import './App.css'

export default function App() {
  const [winner, setWinner] = useState('')
  const [player1Positions, setPayer1Positions] = useState([])
  const [player2Positions, setPayer2Positions] = useState([])
  const [turn, setTurn] = useState(1)
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
useEffect(() => {
   checkWinner()
});
   const checkWinner = ()=> {
      for(var i=0; i < winningCombinations.length; i+=1){
        if(player1Positions
          .includes(winningCombinations[i][0])
          && player1Positions.includes(winningCombinations[i][1]) &&
            player1Positions.includes(winningCombinations[i][2])
          ){
           setWinner('player X wins')
        }
      }
      for(var i=0; i < winningCombinations.length; i+=1){
        if(player2Positions
          .includes(winningCombinations[i][0])
          && player2Positions.includes(winningCombinations[i][1]) &&
            player2Positions.includes(winningCombinations[i][2])
          ){
           setWinner('player Y wins')
        }
       }
  }
  const playHandler = (e) => { 
    if (turn === 1) {    
      if (!player1Positions.includes(Number(e.target.id) === false)
        && !player2Positions.includes(Number(e.target.id) === false)
      ) {
        setPayer1Positions([...player1Positions, Number(e.target.id)])
        setTurn(2) 
      }
      
    } else if (turn === 2) {
      if (!player1Positions.includes(Number(e.target.id))
        && !player2Positions.includes(Number(e.target.id))
      ) {
        setPayer2Positions([...player2Positions, Number(e.target.id)])
        setTurn(1)
      }
      
    }

  }
  return (
    <main>
      <div>Tic toc game</div>
    
    {winner===""?<>
    <div className='BoxGrid'>
      <div className='Item' id='0'
        onClick={(e) => { playHandler(e) }}>
        {player1Positions.includes(0) && 'X'}
        {player2Positions.includes(0) && 'Y'}
      </div>
      <div className='Item' id='1'
        onClick={(e) => { playHandler(e) }} >
        {player1Positions.includes(1) && 'X'}
        {player2Positions.includes(1) && 'Y'}
      </div>
      <div className='Item' id='2'
        onClick={(e) => { playHandler(e) }}>          
        {player1Positions.includes(2) && 'X'}
        {player2Positions.includes(2) && 'Y'}</div>
    </div>
    <div className='BoxGrid'>
      <div className='Item' onClick={(e) => { playHandler(e) }} id='3'>
        {player1Positions.includes(3) && 'X'}
        {player2Positions.includes(3) && 'Y'}
      </div>
      <div className='Item' onClick={(e) => { playHandler(e) }} id='4'>
        {player1Positions.includes(4) && 'X'}
        {player2Positions.includes(4) && 'Y'}
      </div>
      <div className='Item' onClick={(e) => { playHandler(e) }} id='5'>
        {player1Positions.includes(5) && 'X'}
        {player2Positions.includes(5) && 'Y'}
      </div>
    </div>
    <div className='BoxGrid'>
      <div className='Item' onClick={(e) => { playHandler(e) }} id='6'>
        {player1Positions.includes(6) && 'X'}
        {player2Positions.includes(6) && 'Y'}
      </div>
      <div className='Item' onClick={(e) => { playHandler(e) }} id='7'>
        {player1Positions.includes(7) && 'X'}
        {player2Positions.includes(7) && 'Y'}
      </div>
      <div className='Item' onClick={(e) => { playHandler(e) }} id='8'>
        {player1Positions.includes(8) && 'X'}
        {player2Positions.includes(8) && 'Y'}
      </div>
    </div>
    </>: winner +" "+ "please restart"}
    </main>
  )
}

