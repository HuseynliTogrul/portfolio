import React, { useEffect } from 'react';
import aboutImg from "../images/aboutImg.jpg"
import "../css/About.css"
import { MdAccountCircle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Cv from "../images/Cv.pdf"

function About() {

  useEffect(() => {
    const aboutBtn = document.querySelector(".aboutBtn");
    const aboutInfo = document.querySelector(".aboutInfo");
    const aboutModal = document.querySelector(".aboutModal");
    const navbar = document.querySelector(".navbar");
    const App = document.querySelector(".App")
    const closeIcon = document.querySelector(".closeIcon")
    const container = document.querySelector(".container")

    aboutBtn.addEventListener("click", () => {
      aboutInfo.style.display = "none";
      aboutModal.style.display = "block";
      navbar.style.display = "none"
      container.style.paddingTop = "50px";
      container.style.minHeight = "calc(100vh - 100px)";
    });

    closeIcon.addEventListener("click", () => {
      aboutInfo.style.display = "flex";
      aboutModal.style.display = "none";
      navbar.style.display = "flex"
      container.style.paddingTop = "0";
      container.style.minHeight = "100vh";
    })
  }, []);


  return (
    <div className='about'>
      <div className="aboutInfo">
        <div className='aboutImg'>
          <img src={aboutImg} alt="aboutImg" />
        </div>
        <div className='aboutText'>
          <h2>Huseynli <span>Togrul</span></h2>
          <h4><span>Front-End</span> Developer</h4>
          <p>
            {/* I am <span>Huseynli Togrul.</span> */}
            My passion for technology and deep enthusiasm for this field led me to
            venture into the world of programming. I approaching tasks with creativity.
            Continuously developing my skills is a significant motivator for me.</p>
          <button className='aboutBtn'>Learn More</button>
        </div>
      </div>
      <div className="aboutModal hidden">
        <IoMdClose className='closeIcon' />
        <div className="aboutMeLeft">
          <div className="author">
            <div className="aboutMeImg">
              <img src={aboutImg} alt="aboutImg" />
            </div>
            <h3>Huseynli <span>Togrul</span></h3>
            <h4><span>Web</span> Developer</h4>
          </div>
          <div className="aboutMeList">
            <ul>
              <li>
                <MdAccountCircle className='aboutIcon' />
                <p>Huseynli Togrul</p>
              </li>
              <li>
                <MdDateRange className='aboutIcon' />
                <p>11.03.2002</p>
              </li>
              <li>
                <FaLocationDot className='aboutIcon' />
                <p>Xırdalan ş.</p>
              </li>
              <li>
                <FaPhoneAlt className='aboutIcon' />
                <p>+994 51 420 42 72</p>
              </li>
              <li>
                <IoMdMail className='aboutIcon' />
                <p>huseynlitogrul2002@gmail.com</p>
              </li>
            </ul>
          </div>
          <a href={Cv}>Download Cv</a>
        </div>
        <div className="aboutMeRight">
          <div className="aboutMe">
            <h3>About <span>Me</span></h3>
            <p>Hello everybody!
              I am <span>Huseynli Togrul.</span>
              I know office programs and the Fronte-End field.
              I studied Fronte-End in Algorithmic and Pragmatech courses.
              I studied Full-Stack at Code Academy.I have experience in Embawood MMC company
            </p>
          </div>
          <div className="progSkills">
            <h3>Programming <span>Skills</span></h3>
            <ul>
              <li>
                <div className="progValue">
                  <p>Html</p>
                  <span>95%</span>
                </div>
                <div className="backg">
                  <div className="progBackg"></div>
                </div>
              </li>
              <li>
                <div className="progValue">
                  <p>Css</p>
                  <span>95%</span>
                </div>
                <div className="backg">
                  <div className="progBackg"></div>
                </div>
              </li>
              <li>
                <div className="progValue">
                  <p>Js</p>
                  <span>85%</span>
                </div>
                <div className="backg">
                  <div className="progBackg"></div>
                </div>
              </li>
              <li>
                <div className="progValue">
                  <p>React js</p>
                  <span>70%</span>
                </div>
                <div className="backg">
                  <div className="progBackg"></div>
                </div>
              </li>
              <li>
                <div className="progValue">
                  <p>Bootstrap</p>
                  <span>95%</span>
                </div>
                <div className="backg">
                  <div className="progBackg"></div>
                </div>
              </li>
              <li>
                <div className="progValue">
                  <p>Tailwind</p>
                  <span>95%</span>
                </div>
                <div className="backg">
                  <div className="progBackg"></div>
                </div>
              </li>
              <li>
                <div className="progValue">
                  <p>Sass</p>
                  <span>95%</span>
                </div>
                <div className="backg">
                  <div className="progBackg"></div>
                </div>
              </li>
              <li>
                <div className="progValue">
                  <p>Next js</p>
                  <span>50%</span>
                </div>
                <div className="backg">
                  <div className="progBackg"></div>
                </div>
              </li>
              <li>
                <div className="progValue">
                  <p>Vite js</p>
                  <span>70%</span>
                </div>
                <div className="backg">
                  <div className="progBackg"></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="langSkills">
            <h3>Language <span>Skills</span></h3>
            <ul>
              <li>
                <div className="circle">
                  <div className="langValue">
                    National
                  </div>
                </div>
                <p>Azerbaijan</p>
              </li>
              <li>
                <div className="circle">
                  <div className="langValue">
                    Intermediate
                  </div>
                </div>
                <p>English</p>
              </li>
              <li>
                <div className="circle">
                  <div className="langValue">
                    Advanced
                  </div>
                </div>
                <p>Turkish</p>
              </li>
            </ul>
          </div>
          <div className="education">
            <h3>Education <span>Timeline</span></h3>
            <ul>
              <li>
                <div className="listEdu">
                  <div className="eduTime">
                    <p>2019 - 2023</p>
                  </div>
                  <div className="eduPlace">
                    <h4>Azerbaijan State Oil and Industry University</h4>
                    <h5>Bachelor Degree</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className="listEdu">
                  <div className="eduTime">
                    <p>2023 - 2025</p>
                  </div>
                  <div className="eduPlace">
                    <h4>Azerbaijan Technical University</h4>
                    <h5>Master Degree</h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About