import React,{ useEffect } from 'react'
import getData from '../../utils/apiFunctions'

const Products = () => {

  let products

  // useEffect(()=>{
  //   async function getDataInternal(){
  //     console.log('internal func running')
  //     products = await getData()
  //     console.log(products)
  //   }
  //   getDataInternal()
  // },[])

  // products ? console.log(products) : null

  // if(isLoading){
  //   return(
  //     <p>Loading...</p>
  //   )
  // }else{
  //   return(
  //     <div>
  //       {products.map((product)=>{
  //         const {id, title, image, description, price, featured} = product
  //         console.log({product})
  //         console.log(product.image[0].url)
          
  //         return(
  //           <article key={id}>
  //             <img src={`${SERVER_ENDPOINT}${image[0].url}`} alt='#' width='200' height='200'/>
  //             <h1>{title}</h1>
  //             <p>{description}</p>
  //             <h4>{`£${price.toFixed(2)}`}</h4>
  //             {featured ? <p>Featured item</p> : null}
  //           </article>
  //         )
  //       })}
  //     </div>
  //   )
  // }
  return(<>Winky face</>)
}

export default Products