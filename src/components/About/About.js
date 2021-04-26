import React,{ useContext } from 'react'
import {steffectContext} from '../../Context'
import loadingGif from '../../assets/icons/loading-spinner.gif'

const About = () => {
  const { pages, loading, serverEndpoint } = useContext(steffectContext)
  const about = pages.about
  console.log(about)
  return(
    <main className="about-page">
    <h1>About</h1>
    <div id="aboutInfo">
      {loading ? <img src={loadingGif} alt='loading...'/> : about && 
      <>
        <p>{about.aboutText}</p>
        <img className="about-img" src={serverEndpoint + about.aboutImage.url} alt="about banner" />
      </>
      }
    </div>
  </main>
  )
}

export default About