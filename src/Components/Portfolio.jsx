import React, { useState,  useRef } from 'react'
import emailjs from '@emailjs/browser';
import Mrhayor from './images/Mrhayor.jpg';
import Oluwaseun_Samuel_Odunayo from "./images/Oluwaseun_Samuel_Odunayo.pdf"


export default function Portfolio() {
    const [toggle, setToggle] = useState(true);
    const form = useRef(); 

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jaz1z9p', 
      'template_nln4t19', 
      form.current, {
        publicKey: "owInOhx2_3uGjr5el",
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
        <main>
        <nav className="desktopNav">
            <header>Mrhayor</header>
            <div>
                {/* <ul className="linkedList">
                    <li>about</li>
                    <li>experience</li>
                    <li>projects</li>
                    <li>about</li>
                </ul> */}
            </div>
            {/* <div className="content">
                <ul>
                    <li> Name: Oluwaseun Samuel Odunayo</li>
                    <li>  linkedin: https://github.com/Mrhayor/</li>
                    <li>githhub: <a href="https://github.com/Mrhayor">https://github.com/Mrhayor</a></li>
                </ul>

                <div className="projects">
                    <div className="hrLibrary">
                        <h1>Projects worked on</h1>
                        <div className="images">
                            <img src="https://res.cloudinary.com/dz0drrrvm/image/upload/v1706198903/hrlibrary_edited_eflldu.jpg" alt="" />
                        </div>
                        <a href="https://mrhayor.github.io/HrLibrary">mrhayor.github.io/HrLibrary</a>
                        <div> hrLibrary platform that is used to search the </div>
                        
                    </div>
                </div>
            </div> */}
        </nav>
        <nav className="hamburger">
            <header>Mrhayor</header>
            <div className="hamburger-menu">
                <div className="hamburger-icon"  onClick={()=> setToggle(!toggle)}>
                {toggle ? 
                    <>
                        <span></span>
                        <span></span>
                        <span></span>
                    </>
                    : <>
                    <div>
                            <h1>XX</h1>   
                            <ul className='hamburgerLinks'>        
                                <li>about</li>
                                <li>experience</li>
                                <li>projects</li>
                                <li>about</li>
                            </ul>
                        </div>
                    </>
                }
                </div>
                
            </div>
        </nav>
        <section className="profile"> 
                <div className="profilePicture">
                    <img src={Mrhayor} alt="Mrhayor profile picture" />
                </div>
                <div className="sectionText">
                    <p className="sectionP">Hello, I'm</p>
                    <h1 className="names">Oluwaseun Odunayo</h1>
                    <p>Frontend Developer</p>
                    <div className="profileButtons">
                        <a className="btn btn-color-1" href={Oluwaseun_Samuel_Odunayo} download="Oluwaseun_Samuel_Odunayo"> Download CV</a>
                        <button className="btn btn-color-2">
                            Contact info
                        </button>
                    </div>

                </div>
        </section>
        <section className="about">
            {/* <p>Get to know more</p> */}
            <h1>About Me</h1>
            <div className="section-container">
                    <div className="detailsContainerPic">
                        <img src={Mrhayor} alt="Mrhayor profile picture" />
                    </div>
                <div className="detailsContainer">
                    <div className="aboutContainer">
                        <div className="contained_Details">
                            <img src="" alt="" className="about-pic"/>
                            <h3>Education</h3>
                            <p>B.Sc. Bachelor Degree </p>
                        
                        </div>
                        <div className="contained_Details">
                            <img src="" alt="" />
                            <h3>Education</h3>
                            <p>FreeCode Camp</p>
                        </div>
                    </div>
                    <div className="text-about">
                        <p>
                        I'm a graduate of Ambrose Alli University, 
                        with a passion for programming. My expertise lies primarily in JavaScript,
                        React.js, Node.js, MySQL, HTML, CSS, and Git version control. 
                        I'm proficient in both front-end and back-end development, 
                        As a self-taught programmer, i've honed my skills through dedication and practical experience.
                        i've completed several projects independently, showcasing my ability to deliver high-quality solutions across various domains. 
                        my projects reflect not only my technical prowess but also my creativity and problem-solving acumen.
                        </p>
                    </div>
                </div>
            </div>
            
        </section>

        <section className="experience">
            <h1>My Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Frontend Development</h2>
                        <div className="article-container">
                            <article>
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>JAVASCRIPT</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>REACTJS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Frontend Development</h2>
                        <div className="article-container">
                            <article>
                                <div>
                                    <h3>Mysql</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>Nodejs</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>Express</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>Git</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="portfolio">
                <h1 className="heading">Latest <span>Projects</span></h1>
                <div className="portfolio-wrapper">
                    <div className="portfolio-container">
                        <div className="portfolio-box">
                                <img src="https://res.cloudinary.com/dz0drrrvm/image/upload/v1706198903/hrlibrary_edited_eflldu.jpg"alt="" />
                            <div className="portfolio-layer">
                                <h2>Web Design</h2>
                                <p>HR Library is a dynamic web application designed to serve as a comprehensive resource hub for human resources professionals. 
                                    Developed using React.js for its frontend, 
                                    CSS for styling, and hosted on GitHub, 
                                    HR Library offers a user-friendly interface</p>
                                <a href=""><i>@</i></a>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-container">
                        <div className="portfolio-box">
                        <img src="https://res.cloudinary.com/dz0drrrvm/image/upload/v1706198903/hrlibrary_edited_eflldu.jpg" alt="" />
                            <div className='portfolio-layer'>
                                <h2>Web Design</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dignissimos accusamus delectus quam obcaecati suscipit molestias voluptate,
                                    dolorem quidem autem maiores assumenda</p>
                                <a href=""><i>@</i></a>
                            </div>
                        </div>
                    </div>
                </div>

        </section>

        <section className="contact">
                <h2 className='heading'>Contact <span>Me!</span></h2>
                <form onSubmit={sendEmail}>
                    <div className="input-box">
                        <input type="text"  placeholder='full Name' className="input_data" name="user_name"/> 
                    </div>

                    <div className="input-box">
                        <input type="number" className="input_data" placeholder='Mobile Number'/>
                    </div>

                    <div className="input-box">
                    <input type="text"  placeholder='Email Subject' className="input_data" name="user_email"/>
                    </div>

                    <div className="input-box">
                        <textarea name="message" className="input_data" placeholder="Your Message"></textarea>
                    </div>

                    <div className="input-box">
                        <input type="submit" value="send message" className="btn"/>
                    </div>
                </form> 
            
        </section>
        
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2024 by Myhayor | All Rights Reserved.</p>
            </div>

            <div className="footer-iconTop">
                <a href="#">?</a>
            </div>
        </footer>

        </main>
    </>
  )
}
