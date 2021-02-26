import React, {Component} from 'react';
import axios from 'axios';
import './game.page.styles.css';


import Question from '../../components/question/question.component';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            questions: [],
            counter: 0,
            points: 0,
            loading: true,
        }
    }




   async componentDidMount() {
    const {catId, difficulty} = this.props.match.params;
    const {data: {results}} = await axios.get(`https://opentdb.com/api.php?amount=10&category=${catId}&difficulty=${difficulty}&&type=multiple`)
    this.setState({...this.state, questions: results, loading: false})
   }

   
   render() {
       const {counter, points, questions, loading,} = this.state;
       const {history} = this.props;
       const onClickAnswer = (point) => {
        if(counter === 9) {
            this.setState({...this.state, points: points  + point}, () => history.push(`/end-game/${points}`))  
        }
            this.setState({...this.state, points: points + point, counter: counter + 1})
    }   
    return (
        <div className='game'>
            {loading ? <h1 className='loader'>LOADING....</h1> :
                (questions.length > 0 && questions[counter]) ? 
                    <Question qs={questions[counter]} onClickAnswer={onClickAnswer}/> :
                        <div className='nocategory'> 
                            <h1>SORRY, NO QUESTIONS FOR THIS CATEGORY</h1>;
                            <button className='btn' onClick={ () => history.push('/') }>GET BACK</button>
                        </div>
                        }
         </div>
       )

    }
}

export default Game;