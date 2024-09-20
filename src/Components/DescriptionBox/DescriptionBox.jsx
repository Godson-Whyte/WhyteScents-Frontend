import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores neque repellat illo delectus ad deserunt laborum est sunt dolor at, sapiente distinctio veritatis libero ipsum doloribus blanditiis consectetur. Quo atque totam, ex, exercitationem in recusandae nemo, sed inventore iste sint modi eum. Ea, consectetur impedit sunt amet suscipit est eum.</p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid expedita laborum debitis dolore. Pariatur at ex aperiam ab mollitia.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox