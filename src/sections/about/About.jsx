import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
          <div className="about__left">
              <div className="about__portrait">
                <img src={AboutImage} alt="About Image" />
              </div>
          </div>
          <div className="about_right">
            <h2>About Me</h2>
            <div className="about__cards">
                {
                    data.map(item => (
                      <Card key={item.id} className="about__card">
                        <span className='about__card-icon'>{item.icon}</span>
                        <h5>{item.title}</h5>
                        <small>{item.desc}</small>
                      </Card>
                    ))
                }

            <p>
            Passionate about technology and innovation, building projects and working with technology is a passion.
            </p>
            <p>
            I have a technical degree in mechatronics from SENAI and a Software Engineering course from UNINTER. 
            I have skills in software, programming languages ​​Java, C#, Python, JavaScript, Typescript, Spring frameworks, 
            React, Angular, Bootstrap, MySQL database, PostgreSQL, Microsoft SQL Server, MongoDB, Docker, Git, Scrum, 
            JPA, Junit, Keycloak, RabbitMQ, Hibernate, Figma, CSS, HTML, Office Package, Excel, PLC and HMI.
            </p>
            <p>
            <a href="https://www.linkedin.com/in/patrik-teixeira/" target="_blank">Visit my LinkedIn profile</a>
            </p>
              <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About