import { FeaturedProducts } from "../../Components/FeaturedProducts/FeaturedProducts"
import { Slider } from "../../Components/Slider/Slider"

const Home = () => {
  
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type={'featured'} />
            <FeaturedProducts type={'trending'} />
        </div>
    )
}
export { Home }