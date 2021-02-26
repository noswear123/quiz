import React from 'react';
import './end-game.page.styles.css';


const EndGame = ({match,history}) => {
    return (
    <div>
        <h1>{match.params.points >= 7 ? 'Congratulations' : 'You Lost, Try Again'}</h1>
            <h2>Your Final Score is: {match.params.points}</h2>
                <button className='restart' onClick={ () => history.push('/')} >Restart</button>
    </div>
    )
}

export default EndGame;