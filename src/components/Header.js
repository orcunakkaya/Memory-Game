import React from 'react'
import { startGame } from '../redux/CardSlice';
import { useDispatch, useSelector } from 'react-redux';
function Header() {
    let dispatch = useDispatch();
    let score = useSelector(state => state.card.score);

    function handleClick(){
        dispatch(startGame())
    }

    return (
        <header>
            <h1 className='header'>Memory Game</h1>
            <button  onClick={handleClick} className='ply-btn'>Play Game</button>
            <div className='score'>Score: {score}</div>
        </header>
    )
}

export default Header
