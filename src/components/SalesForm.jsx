import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import '../css/SalesForm.css';
import clock from '../style/clock.svg';
import alternate_email from '../style/alternate_email.svg';
import contact_phone from '../style/contact_phone.svg';
import map_pin from '../style/map_pin.svg';

const SalesForm = () => {
  const { t } = useTranslation();
  const form = useRef(); // Potrzebne do EmailJS
const [formData, setFormData] = useState({
    name: '', companyName: '', phone: '', email: '', shippingTo: '', service: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validatePhone = (phone) => /^[+]?[0-9\s\-]{7,15}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleanValue = value.replace(/[^0-9+\s\-]/g, "");
      setFormData(prev => ({ ...prev, [name]: cleanValue }));
      setErrors(prev => ({ ...prev, phone: cleanValue && !validatePhone(cleanValue) ? t('form.error_phone') : null }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validatePhone(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: t('form.error_phone') }));
      return;
    }

    setIsSending(true);

    // Wysyłka przez EmailJS
    // Wstaw tutaj swoje ID z panelu EmailJS
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, //TWOJ_SERVICE_ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // TWOJ_TEMPLATE_ID
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY //public key
    )
    .then((result) => {
        console.log(result.text);
        alert(t('form.success'));
        setFormData({ name: '', companyName: '', phone: '', email: '', shippingTo: '', service: '' }); // Reset
    }, (error) => {
        console.log(error.text);
        alert("Błąd wysyłania / Sending error");
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <div className="contact_container">
      <div className="contact" id="contact">
        <h1 className="form-title">{t('form.contact_us')}</h1>
        <h2 className="name_company">Universal Express Relocations Sp z o.o.</h2>
        
        <div className="contact_description">
          <img src={map_pin} alt="map pin" />
          <h2 className="form-contact">ul. Trojańska 7 02-261 Warszawa</h2>
        </div>
        <div className="contact_description">
          <img src={contact_phone} alt="phone" />
          <h2>+48 22 100 29 20</h2>
        </div>
        <div className="contact_description">
          <img src={contact_phone} alt="phone" />
          <h2>+48 12 415 25 55</h2>
        </div>
        <div className="contact_description">
          <img src={alternate_email} alt="email" />
          <h2>krakow@uer.pl</h2>
        </div>
        <div className="contact_description">
          <img src={alternate_email} alt="email" />
          <h2>office@uer.pl</h2>
        </div>
        <div className="contact_description">
          <img src={clock} alt="clock" />
          <h2>{t('form.weekday')} 07:00 ~ 16:00</h2>
        </div>
      </div>

      <div className="form-container" id="contact-form">
        <h1 className="form-title">{t('form.sales_inquiry')}</h1>
        
        <form ref={form} onSubmit={handleSubmit}>
          {/* WAŻNE: Atrybuty 'name' w inputach muszą być takie same jak w szablonie EmailJS {{name}} */}
          <div className="form-group">
            <label htmlFor="name">{t('form.name')} <span className="required-mark">*</span></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="companyName">{t('form.company')}</label>
            <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
          </div>

          <div className="form-group">
          <label htmlFor="phone">
            {t('form.phone')} <span className="required-mark">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "input-error" : ""}
            placeholder="+48 000 000 000"
            required
          />
          {/* Wyświetlanie błędu pod polem */}
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

          <div className="form-group">
            <label htmlFor="email">{t('form.email')} <span className="required-mark">*</span></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="shippingTo">{t('form.shipping_to')}</label>
            <input type="text" id="shippingTo" name="shippingTo" value={formData.shippingTo} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="service">{t('form.service_question')}</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} className="select-input">
              <option value="" disabled hidden>{t('form.optional')}</option>
              <option value="International move">{t('form.services.international')}</option>
              <option value="Domestic Move">{t('form.services.domestic')}</option>
              <option value="Vehicle shipping">{t('form.services.vehicle')}</option>
              <option value="Office relocation">{t('form.services.office')}</option>
            </select>
          </div>
          {/* Pole Message */}
        <div className="form-group">
          <label htmlFor="message">{t('form.message')}</label>
          <textarea
            id="message"
            name="message" // Musi być zgodne z {{message}} w EmailJS
            value={formData.message}
            onChange={handleChange}
            placeholder={t('form.message_placeholder')}
            rows="5"
            className="message-input"
          ></textarea>
        </div>

          <button type="submit" className="submit-btn" disabled={isSending || !!errors.phone}>
          {isSending ? "..." : t('form.submit')}</button>
        </form>
      </div>
    </div>
  );
}

export default SalesForm;