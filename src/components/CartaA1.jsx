import React from 'react'
import Sra from '../images/Ellipse.png'
import fond from '../images/Rectangle.png'
import '../style/CartaA1.css'
import { CartaA2 } from './CartaA2'

function CartaA1(props) {
  const img1 = Sra
  const img2 = fond
  return (
    <div className="CartaA1">
      <div className="cartaA1">
          <img src={Sra} className="sra" alt="" /> 
      </div> 

     <CartaA2/>
</div>
  )
}

export { CartaA1 }