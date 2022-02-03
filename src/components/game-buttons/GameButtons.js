import axios from "axios"
import React, { useState } from "react"
import Button from "../utils/Button.js"
import "./gameButtons.css"

function GameButtons(props) {
	const [user, setUser] = useState([])
	const [dealer, setDealer] = useState([])

	let drawOne = () => {
		axios
			.get(`https://deckofcardsapi.com/api/deck/${props.deckId}/draw/?count=1`)
			.then((res) => {
				console.log(res.data)
			})
	}

	let deal = () => {
		// creates user pile
		axios.get(
			`https://deckofcardsapi.com/api/deck/${props.deckId}/pile/user/add/?cards=`
		)
		// creates dealer pile
		axios.get(
			`https://deckofcardsapi.com/api/deck/${props.deckId}/pile/dealer/add/?cards=`
		)
		setUser(drawOne())
	}

	return (
		<div className="game-buttons">
			<h2>{props.deckId}</h2>
			<div className="col one">
				<Button className="deal" title={"Deal"} action={deal} />
				<button className="hit">Hit</button>
			</div>
			<div className="col two">
				<button className="stand">Stand</button>
				<button className="double-down">Double Down</button>
			</div>
			<div className="col three">
				<button className="split">Split</button>
				<button className="surrender">Surrender</button>
			</div>
		</div>
	)
}

export default GameButtons
