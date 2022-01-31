import React, { useEffect, useState } from "react"
import "./App.css"
import suiteIcons from "./components/img/bg-hsdc.png"
import axios from "axios"

function App() {
	const [deck, setDeck] = useState()

	useEffect(() => {
		try {
			axios
				.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
				.then((res) => {
					console.log(res.data)
					setDeck(res.data)
				})
		} catch (err) {
			console.log(err)
		}
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<div className="title">BLACKJACK</div>
				<div className="top">
					<div className="chips">
						<div className="row one">
							<button className="top-chip five">$5</button>
							<button className="ten">$10</button>
						</div>
						<div className="row two">
							<button className="top-chip twenty">$20</button>
							<button className="top-chip fifty">$50</button>
						</div>
						<div className="row three">
							<button className="top-chip hundred">$100</button>
							<button className="five-hundred">$500</button>
						</div>
					</div>

					<div className="score">
						<div className="wins">
							<div className="w">Wins</div>
							<div className="w-score">0</div>
						</div>
						<div className="losses">
							<div className="l">Losses</div>
							<div className="l-score">0</div>
						</div>
						<div className="draws">
							<div className="d">Draws</div>
							<div className="d-score">0</div>
						</div>
					</div>

					<button className="end-game">End Game</button>
				</div>

				<div className="card-totals">
					<div className="user-info">
						<div className="user">You:</div>
						<div className="user-card-total">0</div>
					</div>
					<div className="dealer-info">
						<div className="dealer">Dealer:</div>
						<div className="dealer-card-total">0</div>
					</div>
				</div>

				<img className="Suite-Icons" src={suiteIcons} alt="suite icons" />

				<div className="game-buttons">
					<button className="deal">Deal</button>
					<button className="hit">Hit</button>
					<button className="stand">Stand</button>
					<button className="double-down">Double Down</button>
					<button className="split">Split</button>
					<button className="surrender">Surrender</button>
				</div>
			</header>
		</div>
	)
}

export default App
