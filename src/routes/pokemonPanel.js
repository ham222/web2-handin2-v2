import { useState, useEffect } from "react"
import PokemonComp from "./pokemonComp"
import "../dist/output.css"

export default function PokemonList() {
	const [pokemonList, setPokemonList] = useState(null)
	const [page, setPage] = useState(0)

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?offset=${20 * page}&limit=20`)
			.then((response) => response.json())
			.then((data) => {
				setPokemonList(data.results)
			})
	}, [page])

	function handlePrevious() {
		if (page > 0) {
			setPage(page - 1)
		}
	}

	function handleNext() {
		setPage(page + 1)
	}

	return (
		<div className="">
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{pokemonList &&
					pokemonList.map((pokemon) => (
						<PokemonComp key={pokemon.name} url={pokemon.url}></PokemonComp>
					))}
			</div>

			<footer className="flex justify-between mx-64 sticky bottom-0 flex-row-reverse">
				<button className="button bg-blue-400" onClick={handleNext}>
					Next
				</button>
				{page === 0 ? (
					""
				) : (
					<button className="button bg-red-400" onClick={handlePrevious}>
						Previous
					</button>
				)}
			</footer>
		</div>
	)
}
