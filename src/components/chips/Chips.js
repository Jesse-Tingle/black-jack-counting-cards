import React, { useState } from "react"
import Button from "../utils/Button"
import "./chips.css"

function Chips() {
	const [count, setCount] = useState(0)

	let incrementByFive = () => {
		setCount(count + 5)
	}

	let incrementByTen = () => {
		setCount(count + 10)
	}

	let incrementByTwenty = () => {
		setCount(count + 20)
	}

	let incrementByFifty = () => {
		setCount(count + 50)
	}

	let incrementByOneHundred = () => {
		setCount(count + 100)
	}

	let incrementByFiveHundred = () => {
		setCount(count + 500)
	}

	let reset = () => {
		setCount(0)
	}

	return (
		<div className="chips">
			<div className="row one">
				<Button
					className="top-chip five"
					title={"$5"}
					action={incrementByFive}
				/>

				<Button className="ten" title={"$10"} action={incrementByTen} />
			</div>
			<div className="row two">
				<Button
					className="top-chip twenty"
					title={"$20"}
					action={incrementByTwenty}
				/>
				<Button className="fifty" title={"$50"} action={incrementByFifty} />
			</div>
			<div className="row three">
				<Button
					className="top-chip hundred"
					title={"$100"}
					action={incrementByOneHundred}
				/>

				<Button
					className="five-hundred"
					title={"$500"}
					action={incrementByFiveHundred}
				/>
			</div>
			<div className="balance">
				<div className="total">${count}</div>
				<Button className="reset" title={"Reset"} action={reset} />
			</div>
		</div>
	)
}

export default Chips
