import React from 'react'
import Vector from '../images/Vector.png'
import Vector2 from '../images/Vector2.png'
import yariba from '../images/YarribaCastro.png'
import '../style/CartaA2.css'

function CartaA2(props) {
    const img = yariba
    const img2 = Vector
    const img3 = Vector2

  return (
    <div className='cartaA2'>
        <div>
            <img src={yariba} className="cartaA2_img" alt="" />
         <p>Design Track</p>
        </div>
        <p className='desc'>
            I chose design track because ILove to design betiful user-centered interfaces.</p>
        <div className='CartaA2_2'>
            <span>
                <img src={Vector} className="cartaA2_img2" alt="" />
                <span>Yaretas24</span>
            </span>
         
            <span>
                <img src={Vector2} className="cartaA2_img3" alt="" />
                <span>Yaretas24</span>
            </span>  
        </div>
        

    </div>
  )
}

export { CartaA2 }