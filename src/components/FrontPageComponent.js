import React, {useState} from 'react'

//SCSS
import './../SCSS/FrontPageComponent.scss'

//Icons 
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

import Illus1 from './../Assets/HospitalStorage.jpg'
import Illus2 from './../Assets/bloodDonation.jpg'

const Images = [Illus1,Illus2]
const delay = 5000

export function Slideshow() {

 
  const [index, setIndex] = useState(0)
  const [direction,setDirection] = useState(0);

  const ChangeDirection = () => {
    setDirection(!direction)
  }

  const timeoutRef = React.useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) => 
          prevIndex === Images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout();
    }
  }, [index])
  
  return (
    <div className = "Slideshow">
      <div className = "Slideshow-component"
        style = {{ transform: `translate3d(${-index * 100}%, 0, 0)`}}>
        {Images.map((index) => (
          <div className = "fade" key = {index}>
            <img src = {index}></img>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Slideshow