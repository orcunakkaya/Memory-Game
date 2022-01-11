import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, setCardsDescription, newGame } from '../redux/CardSlice'
function Modal({ setDisabled }) {
    const score = useSelector(state => state.card.score)
    let dispatch = useDispatch();

    function handleCancel() {
        dispatch(closeModal());
        setDisabled(true)
    }

    function handleGame() {
        dispatch(closeModal());
        dispatch(setCardsDescription())
        dispatch(newGame())
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div>Score: {score}</div>
                <div className='buttons'>
                    <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
                    <button className='game-btn' onClick={handleGame}>New Game</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
