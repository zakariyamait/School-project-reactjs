import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
          <img src={about_img} alt='' className='about-img' />
          <img src={play_icon} alt='' className='play-icon' onClick={()=>
          {setPlayState(true)}}/>
      </div>
      <div className='about-right'>
          <h3>ABOUT UNIVERSITY</h3>
          <h2> Nurturing Tomorrow's Leaders Today </h2>
          <p>Welcome to SchoolPro, a thriving educational community located in Morocco, 
            dedicated to fostering academic excellence and holistic development. , 
            our school has been at the forefront of providing an enriching and inclusive learning environment for students from diverse backgrounds.
            With a commitment to nurturing the potential of each student, [School Name] combines innovative teaching methods
            with a strong curriculum to empower students to achieve their best.</p>
            <p>  At SchoolPro, we believe that education transcends the classroom. It is a journey of discovery, creativity, and personal growth.
                 Our dedicated team of educators and staff are committed to guiding students through this journey, offering support, encouragement, and the resources they need to succeed. 
                 Our state-of-the-art facilities, including modern classrooms, science labs, sports complexes, and art studios, 
                 ensure that students have everything they need to explore their interests and talents.</p>
      </div>
    </div>
  )
}

export default About
