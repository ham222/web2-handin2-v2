import React from "react"
import "../dist/output.css"
import { Link, Outlet } from "react-router-dom"

export default function Root() {
	return (
		<>
			<div className="bg-slate-200 min-h-screen">
				<nav className="mx-28 mb-1 ">
					<div className="flex justify-between mx-10">
						<div className="navItem">
							<Link to="/">Home</Link>
						</div>
						<div className="navItem">
							<Link to="/about">About</Link>
						</div>
					</div>
				</nav>
				<Outlet />
			</div>
		</>
	)
}
