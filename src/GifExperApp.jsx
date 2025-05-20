import  { useState } from 'react';
import {AddCategory,GifGrid} from './components';




export const GifExperApp = () => {

    const [categories,setCategories] = useState(['One punch']);


    const onAddCategory = (newCategory) => {

      if( categories.includes(newCategory) ){
        return;
      }
        
      // console.log(newCategory)
         setCategories([newCategory, ...categories]);


    }

    

  return (
    <>
      <h1>
        GifExpertApp
      </h1>


      
       <AddCategory 
      
      onNewCategory={ event => onAddCategory(event) }
       
       />

   
    
    
        { categories.map( (category) =>( 
              // <div  key={ category } >
              //       <h3>{ category }</h3>
              //       <li> {category}</li>
              // </div>

              <GifGrid key={ category } category={ category } />
              ))
              

     }
      
      
    
              
     </>
  )
}

export default GifExperApp
