import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { BifGrid } from './components/BifGrid';


export const BigExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'one Punch' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory) ) return;
        
        // console.log(newCategory);
        // categories.push(newCategory);
        
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [...cat, 'Valorant'] );

    }

    return (
      <>
        <h1>BigExpertApp</h1>
         
        <AddCategory 
             // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value)}
        />
            { 
                categories.map( ( category ) => (
                    <BifGrid 
                    key={ category } 
                    category={ category } />
                ))
                
            }
        </>

    )
         
}
         
            
            

          
        
          


