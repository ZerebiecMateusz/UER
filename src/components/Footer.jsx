import React from "react";
import { useTranslation } from "react-i18next";
import '../style/Footer.css';
//  social media
import facebookIcon from '../style/social/facebook.svg';
import linkedinIcon from '../style/social/linkedin.svg';
import instagram from '../style/social/instagram.svg';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sekcja 1: O Firmie */}
        <div className="footer-section">
          <h3>{t('footer.about_title')}</h3>
          <p>{t('footer.about_text')}</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>


        {/* Sekcja 2: Szybki Kontakt */}
        <div className="footer-section">
          <h3>{t('footer.contact_title')}</h3>
          <p>Warszawa: +48 22 100 29 20</p>
          <p>Kraków: +48 12 415 25 55</p>
          <p>Email: office@uer.pl</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Universal Express Relocations. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;