import React, { useContext } from 'react'
import { steffectContext } from '../../Context'
import loadingGif from '../../assets/icons/loading-spinner.gif'

const Faq = () => {
  const { faq, loading} = useContext(steffectContext)

  return(
    <main className="faq-page">
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