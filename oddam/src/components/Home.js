import Navigation from "./Navigation";
import HomeHero from "./HomeHero";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAboutUs from "./HomeAboutUs";

const Home = ()=>{

    return(
        <div id="home">
            <Navigation />
            <HomeHero />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
        </div>
    )
}

export default Home;
