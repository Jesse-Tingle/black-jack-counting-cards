import React from "react"

export default function Button(props) {
	let { action, title, className } = props
	return (
		<button className={className} onClick={action}>
			{title}
		</button>
	)
}
