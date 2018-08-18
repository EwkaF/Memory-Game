import React from 'react';
import ReactDOM from 'react-dom';
import body from './body.js';
import fruits from './fruits.js';
import animals from './animals.js'
import Card from './apptest.jsx';
import { GameController } from './01test.jsx';
import style from '../style.scss';

class App extends React.Component{
render(){
	return <FirstPage />
}
}


class FirstPage extends React.Component{
	constructor(props){
		super(props);
			this.state= {
				selectedCards: null
			}
		
	}

	handleOnClickFruits = () => {
		this.setState({selectedCards: fruits});
  	}
  	handleOnClickBody = () => {
		this.setState({selectedCards: body});
  	}
  	handleOnClickAnimals = () => {
		this.setState({selectedCards: animals});
  	}

    componentDidMount() {
        alert('Turn on the sound/ Włącz dźwięk');
    }
	render(){
		const cardsSelector = <div style={{textAlign:'center'}}>
			<h2>Choose the theme / Wybierz tematykę</h2>
			<div className="showButtons">

				<div className='button'>
					<button  id ="fruits" onClick={this.handleOnClickFruits}> </button>
					<p>Fruits & Vegetables / Owoce & warzywa</p>
				</div>

				<div className="button">
					<button id="body" onClick={this.handleOnClickBody}> </button>
					<p>Body parts / Części ciała</p>
				</div>

            	<div className="button">
					<button id="animals" onClick={this.handleOnClickAnimals}> </button>
					<p>Animals / Zwierzęta</p>
				</div>

			</div>
		</div>;

		const game = <GameController cards={this.state.selectedCards} />

		const display = this.state.selectedCards == null ? cardsSelector : game;	

		return(<div className ='background' >
			<div className = 'container'>
			<h1 id = 'memoryGame'><span>Memory </span>GAME</h1>
                <div className="red-bell"></div>
				{display}
			</div>
			</div>
			);
	}
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(<div>
        <App   body={body} fruits={fruits} />
        </div>,
        
        document.getElementById('app')
    );
});