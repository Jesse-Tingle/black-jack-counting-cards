import React from "react"
import "./App.css"
import suiteIcons from "./components/img/bg-hsdc.png"
import axios from "axios"
import Betting from "./components/money/Betting"
import GameButtons from "./components/game-buttons/GameButtons"
import Score from "./components/score/Score"
import Chips from "./components/chips/Chips"
import User from "./components/players/User"
import Dealer from "./components/players/Dealer"

function App() {
	// useEffect(() => {
	// 	try {
	// 		axios
	// 			.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
	// 			.then((res) => {
	// 				console.log(res.data)
	// 				setDeck(res.data)
	// 			})
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// }, [])

	return (
		<div className="App">
			<header className="App-header">
				<div className="title">BLACKJACK</div>
				<div className="top">
					<Chips />
					<Score />
					<button className="end-game">End Game</button>
				</div>

				<div className="card-totals">
					<User />
					<Dealer />
				</div>

				<img className="Suite-Icons" src={suiteIcons} alt="suite icons" />
				<div className="bottom">
					<Betting />
					<GameButtons />
				</div>
			</header>
		</div>
	)
}

export default App
