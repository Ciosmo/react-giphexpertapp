import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (categorias) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    useEffect(() =>{
        getGifs( categorias )
            .then( gifs=>{
                setstate({
                    data: gifs,
                    loading:false
                });   
            })
    }, [categorias])

    return state;
}