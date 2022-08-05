import people from "../assets/People.jpg"
import signature from "../assets/Signature.svg"

const HomeAboutUs = () => {

    return (
        <div className="aboutUs" id="aboutUs">
            <div className="aboutUs-content">
                <h2 className="aboutUs-content-title">O nas</h2>
                <div className="decoration"/>
                <p className="aboutUs-content-text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="podpis"/>
            </div>
            <img src={people} alt=""/>
        </div>
    )
}

export default HomeAboutUs;
