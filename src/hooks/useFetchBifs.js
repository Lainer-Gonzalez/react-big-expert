import { useEffect,useState } from 'react';
import { getBifs } from '../helpers/getBifs';

export const useFetchBifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    

    const getImages = async() => {
        const newImages = await getBifs( category );
        setImages(newImages);
        setIsLoading(false);
        
    }

    useEffect( () => {
        getImages();
    }, [])

    return {
        images,
        isLoading: true

    }
    
  
}

