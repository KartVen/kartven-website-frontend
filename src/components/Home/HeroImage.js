import './HeroImageStyle.css'
import HeroIMG from '../../assets/hero_bg.jpg'

const HeroImage = () => {
    return (
        <div className="hero-box">
            <div className="mask">
                <img src={HeroIMG} alt={document.title}/>
            </div>
            <div className="cnt">
                <div>
                    <div>
                        <h4 className="cnt-lg">Witma. - GD</h4>
                    </div>
                    <div>
                        <h2 className="cnt-lg">Platforma działa poprawnie.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroImage;