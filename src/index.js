import React from "react"
import "./dist/output.css"
import ReactDOM from "react-dom/client"
import { RouterProvider, createHashRouter } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import FrontPage from "./routes/frontPage"
import Root from "./routes/root"
import About from "./routes/about"
import OnePokemon from "./routes/pokemonDetails"
import PokemonDetails from "./routes/pokemonDetails"

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <FrontPage />,
			},
			{
				path: "/pokemon/:id",
				element: <PokemonDetails />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
