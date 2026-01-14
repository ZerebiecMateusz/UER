import React, { useState } from "react";
import '../css/SalesForm.css'; // Importujemy style
import clock from '../style/clock.svg';
import alternate_email from '../style/alternate_email.svg';
import contact_phone from '../style/contact_phone.svg';
import map_pin from '../style/map_pin.svg';



const SalesForm = () => {
    // Stan do przechowywania danych z formularza
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    shippingTo: '',
    service: ''
  });

  // Funkcja obsługująca zmiany w polach
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Funkcja obsługująca wysłanie formularza
  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiega przeładowaniu strony
    console.log('Wysłane dane:', formData);
    alert('Formularz wysłany! Sprawdź konsolę.');
  };

  return (
    <>
      <div className="contact_container">
        <div className="contact">
        <h1 className="form-title">CONTACT US</h1>
        <h2 className="name_company">Universal Express Relocations Sp z o.o.</h2>
        <div className="contact_description">
          <img src={map_pin} alt="map pin"></img><h2 className="form-contact">ul. Trojańska 7 02-261 Warszawa</h2>
        </div>
        <div className="contact_description">
          <img src={contact_phone} alt="contact_phone"></img><h2>+48 22 100 29 20</h2>
        </div>
        <div className="contact_description">
          <img src={contact_phone} alt="contact_phone"></img><h2>+48 12 415 25 55</h2>
        </div>
        <div className="contact_description">
          <img src={alternate_email} alt="email"></img><h2>krakow@uer.pl</h2>
        </div>
        <div className="contact_description">
          <img src={alternate_email} alt="email"></img><h2>office@uer.pl</h2>
        </div>
        <div className="contact_description">
          <img src={clock} alt="clock"></img><h2>	Weekday 07:00 ~ 16:00</h2>
        </div>
      </div>
      <div className="form-container">
        <h1 className="form-title">SALES INQUIRY</h1>
        
        <form onSubmit={handleSubmit}>
          
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name (Required) <span className="required-mark">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Company Name */}
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone(Required) <span className="required-mark">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email(Required) <span className="required-mark">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Shipping To */}
          <div className="form-group">
            <label htmlFor="shippingTo">Shipping To</label>
            <input
              type="text"
              id="shippingTo"
              name="shippingTo"
              value={formData.shippingTo}
              onChange={handleChange}
            />
          </div>

          {/* Service Dropdown */}
          <div className="form-group">
            <label htmlFor="service">What service do you want?</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="select-input"
            >
              <option value="" disabled selected hidden>(Optional)</option>
              <option value="International move">International move</option>
              <option value="vehicle shipping">vehicle shipping</option>
              <option value="office relocation">office relocation</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>

        </form>
    </div>
      </div>
      
    </>
  );
}
 
export default SalesForm;