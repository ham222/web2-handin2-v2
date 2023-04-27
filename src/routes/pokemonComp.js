import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "../dist/output.css"

function toUpper(word) {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

export default function PokemonComp({ url }) {
	const [pokemonData, setPokemonData] = useState(null)

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPokemonData(data)
			})
	}, [url])

	return (
		pokemonData && (
			<Link to={`/pokemon/${pokemonData.id}`}>
				<div className="pokemonCard">
					<div>
						<div className="">#{pokemonData.id}</div>
						<div className="italic text-white">{toUpper(pokemonData.name)}</div>
					</div>
					<div>
						<img
							src={pokemonData.sprites.front_default}
							alt={pokemonData.name}
						/>
					</div>
				</div>
			</Link>
		)
	)
}
