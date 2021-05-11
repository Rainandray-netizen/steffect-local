import React,{ useContext } from 'react'
import {steffectContext} from '../../Context'
import loadingGif from '../../assets/icons/loading-spinner.gif'
import { Link } from 'react-router-dom'
import aboutImage from '../../assets/images/products/1.jpeg'


const About = () => {
  const { pages, loading, serverEndpoint } = useContext(steffectContext)
  const about = pages.about
  console.log(about)
  return(
    <main className="about-page">
      <div className="linktree">
        <Link to='/'>Home</Link>
        <p>{'>'}</p>
        <span>About</span>
      </div>
    <h1>About</h1>
    <div id="aboutInfo">
      {loading ? <img src={loadingGif} alt='loading...'/> : about && 
      <>
        <p>{about.aboutText}</p>
        <img className="about-img" src={aboutImage} alt="about banner" />
      </>
      }
    </div>
  </main>
  )
}

export default About