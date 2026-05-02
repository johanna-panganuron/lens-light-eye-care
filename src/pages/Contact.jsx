import { useState } from 'react'
import { RiEyeLine } from 'react-icons/ri'
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiCheckCircle } from 'react-icons/hi'
import './Contact.scss'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  const info = [
    { icon: <HiLocationMarker />, label: 'Address', value: 'Day-As, Cordova, Cebu, Philippines' },
    { icon: <HiPhone />, label: 'Phone', value: '+63 949 128 0100' },
    { icon: <HiMail />, label: 'Email', value: 'hello@lenslighteye.com' },
    { icon: <HiClock />, label: 'Clinic Hours', value: 'Mon–Sat: 8:00 AM – 6:00 PM | Sun: Closed' },
  ]

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-badge"><RiEyeLine /> Get In Touch</div>
          <h1 className="section-title">Contact <em className="highlight">LensLight</em></h1>
          <p className="section-subtitle">Have a question? We'd love to hear from you. Send us a message and we'll get back to you promptly.</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-section__inner">
          <div className="contact-info">
            <h3>Find Us Here</h3>
            <ul>
              {info.map(i => (
                <li key={i.label}>
                  <div className="contact-info__icon">{i.icon}</div>
                  <div>
                    <strong>{i.label}</strong>
                    <span>{i.value}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="contact-map">
              <div className="contact-map__placeholder">
                <HiLocationMarker />
                <p>Cordova, Cebu</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon"><HiCheckCircle /></div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out, <strong>{form.name}</strong>! We'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Us a Message</h3>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Johanna Panganuron" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="johannapanganuron@gmail.com" required />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message here..." rows={6} required />
                </div>
                <button type="submit" className="btn-primary btn-full">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
