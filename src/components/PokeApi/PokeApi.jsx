import React, { useEffect, useState } from "react";

import axios from "axios";

export const PokeApi = () => {

    // Estado donde guardamos la info del pokemon
    const [pokemon, setPokemon] = useState(null);

    // Id actual del poke a mostrar
    const [id, setId] = useState(1);

    // Estado para guardar lo que el usuario escribe en el input
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

                setPokemon({
                    numero: res.data.id,
                    nombre: res.data.name,
                    img: res.data.sprites.front_default
                });
                setBusqueda(res.data.name);
            } catch (error) {
                console.log("Error al cargar pokemon", error);
                setPokemon(null)
            }
        }
        getPokemon();
    }, [id]);


    const submit = async (e) => {
        e.preventDefault();

        if (busqueda.length > 2) {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`);

                setPokemon({
                    nombre: res.data.name,
                    img: res.data.sprites.front_default,
                    numero: res.data.id
                });

                setId(res.data.id);
            } catch (error) {
                console.log("Pokemon no encontrado", error);
            }
        }
    }

    const anterior = () => {
        id > 1 && setId(id - 1);
    }

    const siguiente = () => {
        setId(id + 1);
    }

    const inputChange = (e) => {
        setBusqueda(e.target.value);
    }

    return (
        <>
            <div>
                {
                    !pokemon ? <h3>Cargando...</h3>
                        : <div>
                            <form onSubmit={submit}>
                                <input
                                    type="text"
                                    value={busqueda}
                                    onChange={inputChange}
                                />
                            </form>

                            <h3>{pokemon.numero}</h3>
                            <h3>{pokemon.nombre}</h3>
                            <img src={pokemon.img} alt={pokemon.nombre} />
                            <div>
                                <button onClick={anterior}>⬅</button>
                                <button onClick={siguiente}>➡</button>
                            </div>
                        </div>

                }

            </div>
        </>
    )

}