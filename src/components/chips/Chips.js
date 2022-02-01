import React from "react"
import "./chips.css"

function Chips() {
	return (
		<div className="chips">
			<div className="row one">
				<button className="top-chip five">$5</button>
				<button className="ten">$10</button>
			</div>
			<div className="row two">
				<button className="top-chip twenty">$20</button>
				<button className="fifty">$50</button>
			</div>
			<div className="row three">
				<button className="top-chip hundred">$100</button>
				<button className="five-hundred">$500</button>
			</div>
		</div>
	)
}

export default Chips
