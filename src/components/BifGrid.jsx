// import { useEffect, useState } from 'react';

import { BifItem } from './BifItem';
// import { getBifs } from '../helpers/getBifs';
import { useFetchBifs } from '../hooks/useFetchBifs';

export const BifGrid = ({ category }) => {

    const { images, isLoading } = useFetchBifs( category );

    // const [images, setImages] = useState([]);
    

    // const getImages = async() => {
    //    const newImages = await getBifs( category );
    //    setImages(newImages);
        
    // }

    // useEffect( () => {
    //    getImages();
    // }, [])
    
    
    return (
        <>
           <h3>{ category }</h3>
           {
            //    isLoading
                /*? ( <h2>Cargando...</h2> )*/
            //    : null
                isLoading && ( <h2>Cargando...</h2> )
           }
           {/*<h2>Cargando...</h2>*/}

           <div className="card-grid">
            
                {
                  images.map( ( image ) => (
                      <BifItem 
                          key={ image.id } 
                        //  title={ image.title }
                        //  url={ image.url }
                            { ...image }
                       />
                    ))
                }
        
            </div>
         
        </>
    )
}


  
  

