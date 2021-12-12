import { useState, useEffect } from 'react'
import * as Solutions from '../algorithms/Solutions'
import Answer from './Answer'
import Loader from './Loader'
import './question.css'

const Question = ({questionNumber, title, questionText}) => {
    const correctSolution = Solutions[`Solution${questionNumber}`]
    const [isRunning, setIsRunning] = useState(false)
    const [solution, setSolution] = useState(null)
    const [runTimeMs, setRunTimeMs] = useState(null)

    useEffect(() => {
        if(isRunning) runSolution()
    }, [isRunning])

    
    const runSolution = async () => {
        const startTime = performance.now()
        const result = await correctSolution()
        const runTimeMs = (performance.now() - startTime).toFixed(4)
        setSolution(result)
        setRunTimeMs(runTimeMs)
        setIsRunning(false)
    }


    const handleClick = () => setIsRunning(true)


    return(
        <div className='question-wrapper'>
            <h2 className='quesiton-title'> # {questionNumber} - {title}</h2>
            <p className='question-text'> {questionText} </p>
            <div className='button-container'>
                {!isRunning ?
                <button className='run-button' onClick={handleClick}> Run </button>
                :
                <Loader />
                }
            </div>
            <Answer 
                solution={solution}
                runTimeMs={runTimeMs}
            />
        </div>
    )
}

export default Question