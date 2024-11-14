import React, { useState } from "react"
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './Slider.css'
const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0)
    const data = [
        'https://media.architecturaldigest.com/photos/57a11cbeb6c434ab487bc26b/16:9/w_1920,c_limit/nikes-senior-designer-explains-what-went-into-new-air-jordan-01.png',
        'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_2026,c_limit/4e5f660e-92e3-4fce-8c81-4ebc24be7189/nike-snkrs-app.jpg',
        'https://www.footlocker.com/content/dam/flincfoundation/FootLocker/images/flhoj-060217a-aj1Retro1.jpg',
    ]
    const prevSlideHandler = () => {
        setCurrentSlider(currentSlider === 0 ? 2 : (pre) => pre - 1 )
    }
    const nextSlideHandler = () => {
        setCurrentSlider(currentSlider === 2 ? 0 : (pre) => pre + 1 )
    }
    return (
        <div className="slider">
            <div className="container" style={{
                overflowX: 'hidden',
                transform: `translateX(-${currentSlider * 100}vw)`,
                transition: 'transform 0.5s ease-in-out',
            }}>
                <img src={data[0]} alt="banner" />
                <img src={data[1]} alt="banner" />
                <img src={data[2]} alt="banner" />
            </div>
            <div className="ikons">
                <div className="icon" onClick={prevSlideHandler}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlideHandler}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export { Slider }