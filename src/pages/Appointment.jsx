import { useState } from 'react'
import { RiEyeLine } from 'react-icons/ri'
import { HiCheckCircle, HiClock, HiLocationMarker, HiPhone } from 'react-icons/hi'
import './Appointment.scss'

const services = ['Comprehensive Eye Exam', 'Contact Lens Fitting', 'Pediatric Eye Care', 'Laser Consultation', 'Dry Eye Treatment', 'Glaucoma Screening', 'Prescription Renewal', 'Other']
const times = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

export default function Appointment() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', date: '', time: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="appointment-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-badge"><RiEyeLine /> Book Appointment</div>
          <h1 className="section-title">Schedule Your <em className="highlight">Eye Care Visit</em></h1>
          <p className="section-subtitle">Fill in the form below and we'll confirm your appointment within 24 hours.</p>
        </div>
      </div>

      <section className="appointment-section">
        <div className="container appointment-section__inner">
          {/* Info Panel */}
          <div className="appointment-info">
            <h3>Clinic Information</h3>
            <ul>
              <li><HiLocationMarker /><div><strong>Location</strong><span>Day-As, Cordova, Cebu</span></div></li>
              <li><HiPhone /><div><strong>Phone</strong><span>+63 949 128 0100</span></div></li>
              <li><HiClock /><div><strong>Clinic Hours</strong><span>Monday–Saturday: 8:00 AM – 6:00 PM</span></div></li>
            </ul>

            <div className="appointment-info__note">
              <HiCheckCircle />
              <p>Walk-ins are welcome but appointments are prioritized. Please arrive 10 minutes before your scheduled time.</p>
            </div>

            <div className="appointment-info__services">
              <h4>Available Services</h4>
              <ul>
                {services.slice(0, 6).map(s => (
                  <li key={s}><HiCheckCircle /> {s}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="appointment-form-wrap">
            {submitted ? (
              <div className="appointment-success">
                <div className="appointment-success__icon"><HiCheckCircle /></div>
                <h3>Appointment Request Sent!</h3>
                <p>Thank you, <strong>{form.firstName}</strong>! We've received your appointment request for <strong>{form.service}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong>.</p>
                <p>Our team will contact you within 24 hours to confirm your booking.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Book Another</button>
              </div>
            ) : (
              <form className="appointment-form" onSubmit={handleSubmit}>
                <h3>Appointment Details</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="e.g. Johanna" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="e.g. Panganuron" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="johannapanganuron@gmail.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+63 9XX XXX XXXX" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Needed *</label>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Date *</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="form-group">
                    <label>Preferred Time *</label>
                    <select name="time" value={form.time} onChange={handleChange} required>
                      <option value="">Select a time...</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Notes</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Any concerns or special requests..." rows={4} />
                </div>

                <button type="submit" className="btn-primary btn-full">Confirm Appointment</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
