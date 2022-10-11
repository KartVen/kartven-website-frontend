import './AboutMeStyle.css'
import WarlockIMG from '../../assets/warlock.png'
import {AiOutlineArrowDown} from "react-icons/ai";

const AboutMe = () => {

    return (
        <section id='about-me'>
            <div className='cnt'>
                <div className='avatar'>
                    <img src={WarlockIMG} alt={document.title}/>
                </div>
                <div>
                    <h2>About Me</h2>
                    <p>
                        Hi! My name is Krystian and I invite you to see my portfolio.
                    </p>
                    <p className='about-card'>
                        <span>
                            <span className='th'>#Name</span>
                            <span>Krystian (vel KartVen)</span>
                        </span>
                        <span>
                            <span className='th'>#Profession</span>
                            <span>Software Developer - basically <br/>Web Developer - sometimes</span>
                        </span>
                        <span>
                            <span className='th'>#E-mail</span>
                            <span>krystian.kielbasa@hotmail.com</span>
                        </span>
                        <span>
                            <span className='th'>#Locatisation</span>
                            <span>Poland, Subcarpathia Province</span>
                        </span>
                        <span>
                            <span className='th'>#Others information</span>
                            <span>
                                <AiOutlineArrowDown/> below <AiOutlineArrowDown/>
                            </span>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;