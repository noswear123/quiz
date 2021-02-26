import React, {Component } from 'react';
import axios from 'axios';
import './start.page.styles.css';

class StartPage extends Component {

    state = {
        difficulty: 'easy',
        categories: [],
        selectedCategory: 9
    }

    async componentDidMount() {
        const {data} = await axios.get('https://opentdb.com/api_category.php')
        this.setState({...this.state, categories: data.trivia_categories})
    }



render() {
    const {history} = this.props;
    const {difficulty, categories, selectedCategory} = this.state;    
        return (
            <div className='start'>
                <h1>QUIZ</h1>
                <h4>Difficulty</h4>
            <select className='difficulty' onChange={e => this.setState({...this.state, difficulty: e.target.value})}> 
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
                <h4>Category</h4>
                <select className='category' onChange={e => this.setState({...this.state, selectedCategory: e.target.value})} >
                {categories.map((cat) => <option key={cat.id} value={cat.id} >{cat.name}</option>)}
            </select>   
                <button className='startbutton' onClick={()  => history.push(`/quiz/${difficulty}/${selectedCategory}`)} >start</button>
             </div>
        )
    }
}
export default StartPage;