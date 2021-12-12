import './answer.css'

const Answer = ({solution, runTimeMs}) => {

    return(
        <div className='answer-wrapper'>
                <div className='answer-text-container'>
                    <div>
                        <p className='answer-text-header'> Answer: </p>
                        <p className='answer-text'> 
                            {solution ? solution : '?'  }
                        </p> 
                    </div>
                    <div>
                        <p className='answer-text-header'> Run Time (ms): </p>
                        <p className='answer-text'> 
                            {runTimeMs ? runTimeMs : '?'  }
                        </p> 
                    </div>
                </div>
        </div>
    )
}

export default Answer