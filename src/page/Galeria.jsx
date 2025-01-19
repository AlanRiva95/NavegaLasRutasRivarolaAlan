import React from 'react'
import perfume1 from  '../img/perfumes1.jpg'
import perfume2 from  '../img/perfume2.jpg'



const images = [
    {src: perfume1, id:1},
    {src: perfume2, id:2},
   
]

const Galeria = () => {
  return (
    <main>
        <h2>Fragancias...</h2>
            <ul>
                {images.map((image) => 
                <li key={image.id}>
                    <link href={`/detalle/${image.id}`} />
                    <img className='item-card'src={image.src} alt={image.src}/>  


                </li>)}
            </ul>

      
    </main>
  )
}

export default Galeria
