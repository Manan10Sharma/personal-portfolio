import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am a passionate software developer with a strong foundation in both backend and frontend technologies. My expertise includes Java, Spring Boot, Hibernate, and RESTful API development, allowing me to create scalable and efficient applications. On the frontend, I work with HTML5, CSS3, JavaScript, and React.js to build engaging and user-friendly interfaces. I also have experience with Thymeleaf for server-side rendering, ensuring seamless integration between the client and server.
                          <br></br>I am proficient in database management using MySQL, PostgreSQL, and MongoDB, providing robust data solutions. Additionally, I leverage DevOps tools such as Git, Docker, Jenkins, and Maven to optimize development workflows and ensure smooth deployment. Committed to writing clean, maintainable code, I follow Agile methodologies and SDLC principles to deliver high-quality projects. Eager to learn and grow, I aim to contribute to innovative solutions that create a meaningful impact.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Java Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Frontend Developer (HTML, CSS, JavaScript)</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>DevOps Engineer</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}