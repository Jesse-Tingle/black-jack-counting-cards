import React, { useEffect, useState } from "react"
import "./players.css"

function User() {
	const [hand, setHand] = useState([])

	useEffect(() => {}, [])
	return (
		<div className="user-info">
			<div className="user">You:</div>
			<div className="user-card-total">0</div>
		</div>
	)
}

export default User
