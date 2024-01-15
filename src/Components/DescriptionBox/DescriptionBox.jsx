import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p> SHOPBLISS is an innovative and user-friendly e-commerce platform designed to elevate your online shopping experience.
            With a name that exudes positivity and satisfaction, SHOPBLISS offers a curated selection of products across various categories, 
            ensuring that every visit brings joy and convenience. The website boasts a sleek and intuitive interface, making navigation a breeze, while also prioritizing a secure and seamless transaction process. 
            SHOPBLISS is not just a destination for shopping; it's a gateway to a world of delightful discoveries, where customers can find the products they love and enjoy a blissful online shopping journey.
            </p>
        </div>
    </div>
  )
}
