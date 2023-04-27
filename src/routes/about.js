import React from "react"

export default function About() {
	return (
		<footer>
			<div className="grid justify-center grid-cols-1 font-light">
				<p className="text-2xl w-max justify-self-center">
					This is the about section.
				</p>
				<br />
				<p className="text-2xl w-max justify-self-center">
					The assignment was created by
					<span className="font-semibold"> Jakub Nowak</span>, 315252.
				</p>
				<br />
				<p className="text-2xl w-max justify-self-center">
					You can reach me at
					<span className="font-semibold">
						<a href="mailto:jakub@via.dk"> jakub@via.dk</a>
					</span>
				</p>
			</div>
		</footer>
	)
}
