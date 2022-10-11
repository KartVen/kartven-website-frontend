import './SkillsStyle.css'
import * as PropTypes from "prop-types";
import {MdComputer} from "react-icons/md";

const Skills = () => {

    const webAndAppSkills = [
        {
            value: 'HTML 5',
            color: '#e54c21',
        },
        {
            value: 'CSS 3',
            color: '#214ce5',
        },
        {
            value: 'JavaScript / VueJS / ReactJS',
            color: '#efd81d',
        },
        {
            value: 'Java / Spring Boot',
            color: '#e76f00',
        },
        {
            value: 'PHP / Wordpress',
            color: '#5e7db0',
        },
        {
            value: 'MySQL / OracleSQL',
            color: '#db7533',
        },
        {
            value: 'C / Cpp',
            color: '#004283',
        },
        {
            value: 'Python',
            color: '#ffd346',
        },
    ];

    const othersSkills = [
        {
            value: 'GitHub / TortoiseSVN',
            color: '#fff',
        },
        {
            value: 'JetBrains',
            color: '#ff2d66',
        },
    ];

    return (
        <section id='my-skills'>
            <div className='cnt'>
                <div className='section-title'>
                    My Skills
                </div>
                <div className='skills-list'>
                    <span>Web & Software</span>
                    <div>
                        {
                            webAndAppSkills.map(({value, color}) => (
                                <div className='card' key={value}>
                                    <div>{value}</div>
                                    <div className='bar'>
                                        <span style={{background: color}}></span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <span>Others</span>
                    <div>
                        {
                            othersSkills.map(({value, color}) => (
                                <div className='card' key={value}>
                                    <div>{value}</div>
                                    <div className='bar'>
                                        <span style={{background: color}}></span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
