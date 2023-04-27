import React from "react"
import PokemonPanel from "./pokemonPanel"

export default function FrontPage() {
	return (
		<>
			<div className="">
				<h2 className="flex justify-center text-3xl mb-2">
					Choose your pokemon!
				</h2>
				<PokemonPanel />
			</div>
		</>
	)
}
