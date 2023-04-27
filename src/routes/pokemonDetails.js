import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function PokemonDetails() {
	const [pokemon, setPokemon] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setPokemon(data)
			})
	}, [id])

	return (
		<>
			<div className="flex justify-center flex-wrap">
				<div className="bg-color-slate-200 w-1/2 h-max text-2xl max-w-1/2">
					<div className="w-fit border-2 border-stone-500 rounded-lg col-end-1">
						<img
							src={pokemon?.sprites.front_default}
							alt={pokemon?.name}
							className="hover:-translate-y-1 hover:scale-110 duration-300 "
						></img>
					</div>
					<h1 className="">
						Name:
						<span className="bold italic ml-4">{pokemon?.name}</span>
					</h1>
					<h1>
						Weight:
						<span className="bold ml-4">{pokemon?.weight}</span>
					</h1>
					<h1>
						Height:
						<span className="bold ml-4">{pokemon?.height}</span>
					</h1>
				</div>
			</div>
		</>
	)
}
