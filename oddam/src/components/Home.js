import Navigation from "./Navigation";
import HomeHero from "./HomeHero";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeFundations from "./HomeFundations";

const Home = ()=>{

    return(
        <div id="home">
            <Navigation />
            <HomeHero />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
            <HomeFundations />
        </div>
    )
}

export default Home;
