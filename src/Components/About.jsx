

import Mrhayor from './images/Mrhayor.jpg';
const About =  () =>{
    return(
        <>
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
                        <p>B.Sc. Bachelor Degree <br /> M.Sc. Masters Degree</p>
                    
                    </div>
                    <div className="contained_Details">
                        <img src="" alt="" />
                        <h3>Education</h3>
                        <p>B.Sc. Bachelor Degree <br /> M.Sc. Masters Degree</p>
                    </div>
                </div>
                <div className="text-about">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Incidunt aperiam modi, quisquam doloribus nemo minus 
                        tempore veritatis consequatur quia eum similique omnis
                        quos pariatur quasi!
                    </p>
                </div>
            </div>
        </div>
        
    </section>
        </>
    )
}

export default About;