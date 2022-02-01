import React from "react"
import "./gameButtons.css"

function GameButtons() {
	return (
		<div className="game-buttons">
			<div className="col one">
				<button className="deal">Deal</button>
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
