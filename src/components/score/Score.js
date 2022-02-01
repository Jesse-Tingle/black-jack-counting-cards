import React from "react"
import "./score.css"

function Score() {
	return (
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
	)
}

export default Score
