import { Categeories } from "../../Components/Categeories/Categeories"
import { Contact } from "../../Components/Contact/Contact"
import { FeaturedProducts } from "../../Components/FeaturedProducts/FeaturedProducts"
import { Slider } from "../../Components/Slider/Slider"

const Home = () => {
  
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type={'featured'} />
            <Categeories />
            <FeaturedProducts type={'trending'} />
            <Contact />
        </div>
    )
}
export { Home }