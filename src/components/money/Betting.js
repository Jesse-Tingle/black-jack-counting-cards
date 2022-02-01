import React, { useState, useEffect } from "react"
import "./betting.css"

function Betting() {
	const [count, setCount] = useState(0)

	return (
		<div className="money">
			<div className="place-bet">
				<button className="sub">-</button>
				<button className="bet">${count}</button>
				<button className="add">+</button>
			</div>
			<div className="balance">Balance: $30,000</div>
		</div>
	)
}

export default Betting
