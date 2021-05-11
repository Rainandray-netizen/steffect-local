import React, { useContext } from 'react'
import { steffectContext } from '../../Context'
import loadingGif from '../../assets/icons/loading-spinner.gif'
import { Link } from 'react-router-dom'

const Faq = () => {
  const { pages, loading} = useContext(steffectContext)

  const faq = pages.faq

  return(
    <main className="faq-page">
      <div className="linktree">
        <Link to='/'>Home</Link>
        <p>{'>'}</p>
        <span>Frequently Asked Questions</span>
      </div>
    <h1>Frequently Asked Questions</h1>
    <div id="faqText">
      {loading ? <img src={loadingGif} alt='loading...'/> : faq && faq.faqText.split('\n').map((line, index) => {
        return line ? <p key={index}>{line}</p> : <br/>
      }) }
    </div>
  </main>
  )
}

export default Faq