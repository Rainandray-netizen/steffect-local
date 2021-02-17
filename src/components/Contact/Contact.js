//TODO:
//Emailjs contact form
import React, { useState } from 'react'

const Contact = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ message, setMessage ] = useState('')

  const onNameChange = e => {
    setName(e.target.value)
  }

  const onEmailChange = e => {
    setEmail(e.target.value)
  }

  const onSubjectChange = e => {
    setSubject(e.target.value)
  }

  const onMessageChange = e => {
    setMessage(e.target.value)
  }

  return(
    <main className="contact-page">
    <h1>Contact Us</h1>
    <div id="contactText">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.</p>
    </div>
    <section className="contact-form">
      <form>
        <div className="name-form">
          <label for="name"><span>*</span>Full Name</label>
          <input value={name} onChange={onNameChange} id="name" type="text" name="name" required/>
        </div>
        <div className="email-form">
          <label for="email"><span>*</span>Email</label>
          <input value={email} onChange={onEmailChange} id="email" type="email" name="email" required/>
        </div>
        <div className="subject-form">
          <label for="subject"><span>*</span>Subject</label>
          <input value={subject} onChange={onSubjectChange} id="subject" type="text" name="subject" required/>
        </div>
        <div className="message-form">
          <label for="message"><span>*</span>Message</label>
          <textarea value={message} onChange={onMessageChange} name="message" id="message" cols="30" rows="10" placeholder="Write a message..."
            required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  </main>
  )
}

export default Contact