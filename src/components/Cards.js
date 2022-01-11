import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {setCardsDescription, changeChoise, checkMatch, startGameTurnCard, startGame} from '../redux/CardSlice';
import Card from './Card';

function Cards() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.card.cards);
    const choises = useSelector((state) => state.card.choises);
    const gameStart = useSelector((state) => state.card.gameStart);
    let matchCounter = useSelector((state) => state.card.matchCounter);
    const [choise, setChoise] = useState() 
    const [disabled, setDisabled] = useState(true)
    
    useEffect(() => {
        dispatch(setCardsDescription())
    }, [dispatch])

    useEffect(() => {
        if(choise !== undefined){
            dispatch(changeChoise(choise))
        }
    }, [choise, setChoise, dispatch])

    useEffect(() => {
        if(choises.length === 2){
            setDisabled(true);
            setTimeout(() => {
                dispatch(checkMatch());
                setDisabled(false)
            }, 1500)
        }
    }, [choises, dispatch])

    useEffect(() => {
        if(gameStart === true){
            (async () => {
                await dispatch(setCardsDescription())
                setDisabled(true)
                await dispatch(startGameTurnCard())
                await setTimeout(async () => {
                    await dispatch(startGameTurnCard())
                    await dispatch(startGame())
                    setDisabled(false)
                },4000)
            })()
        }
    }, [gameStart, dispatch])

    return (
        <div className='cards'>
            {
                cards.map((card, index) => (
                    <Card key={index} card={card} index={index} setChoise={setChoise} disabled={disabled}/>
                ))
            }
            {
                matchCounter === 8 && (
                    <Modal setDisabled={setDisabled}/>
                ) 
            }
        </div>
    )
}

export default Cards
