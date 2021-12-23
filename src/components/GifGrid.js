import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categorias }) => {
    const {data:images, loading} = useFetchGifs(categorias);
    return (
        <>
            <h3>{categorias}</h3>  
            {loading && <p className='animate__animated animate__flash'>Cargando</p>}
            <div className='card-grid'>        
                    {
                        images.map (img  =>(
                            <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                        ))
                    }
            </div>
        </> 
    )
}
