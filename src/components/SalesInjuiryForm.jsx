// import React, { useState } from 'react';
import React from 'react';
import '../css/SalesInquiryForm.css'; // Importujemy style

const SalesInquiryForm = () => {
    return (
        <h1>hi</h1>
    )
    
//   // Stan do przechowywania danych z formularza
//   const [formData, setFormData] = useState({
//     name: '',
//     companyName: '',
//     phone: '',
//     email: '',
//     shippingTo: '',
//     service: ''
//   });

//   // Funkcja obsługująca zmiany w polach
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Funkcja obsługująca wysłanie formularza
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Zapobiega przeładowaniu strony
//     console.log('Wysłane dane:', formData);
//     alert('Formularz wysłany! Sprawdź konsolę.');
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">SALES INQUIRY</h1>
      
//       <form onSubmit={handleSubmit}>
        
//         {/* Name */}
//         <div className="form-group">
//           <label htmlFor="name">Name (Required) <span className="required-mark">*</span></label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Company Name */}
//         <div className="form-group">
//           <label htmlFor="companyName">Company Name</label>
//           <input
//             type="text"
//             id="companyName"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Phone */}
//         <div className="form-group">
//           <label htmlFor="phone">Phone(Required) <span className="required-mark">*</span></label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label htmlFor="email">Email(Required) <span className="required-mark">*</span></label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Shipping To */}
//         <div className="form-group">
//           <label htmlFor="shippingTo">Shipping To</label>
//           <input
//             type="text"
//             id="shippingTo"
//             name="shippingTo"
//             value={formData.shippingTo}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Service Dropdown */}
//         <div className="form-group">
//           <label htmlFor="service">What service do you want?</label>
//           <select
//             id="service"
//             name="service"
//             value={formData.service}
//             onChange={handleChange}
//             className="select-input"
//           >
//             <option value="" disabled selected hidden>(Optional)</option>
//             <option value="consultation">Consultation</option>
//             <option value="purchase">Product Purchase</option>
//             <option value="support">Technical Support</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="submit-btn">
//           SUBMIT
//         </button>

//       </form>
//     </div>
//   );
};

export default SalesInquiryForm;