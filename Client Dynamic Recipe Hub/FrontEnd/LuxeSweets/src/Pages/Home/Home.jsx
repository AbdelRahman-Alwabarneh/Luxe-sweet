import Header from "../../Components/Header/Header";
import IceCreamHero from "./heroSection";
import TopRatedDish from "./topRatedDish";
import UpcomingSection from "./UpcomingSection";
import TopRatedRecipes from "./topRatedRecipes";
import FAQ from "./FAQ";
import Footer from "../../Components/Footer/Footer";

function Home(){
return (
<>
<Header/>
<IceCreamHero/>
<TopRatedDish/>
<UpcomingSection/>
<TopRatedRecipes/>
<FAQ/>
<Footer/>

</>
)
}

export default Home;