import React, { useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next'; // Import hooka
import { Helmet } from 'react-helmet-async';
import '../style/Header.css';
import image from "../assets/logo.svg";
import { TbWorldDown } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi"; // Import ikony
import { IoMdClose } from "react-icons/io";       // Ikona zamknięcia
import ReactCountryFlag from "react-country-flag";


const Header = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false); // Stan modala
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Stan menu mobilnego
    
    useEffect(() => {
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
}, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    // Funkcja otwierająca/zamykająca
    const toggleAboutModal = (e) => {
        e.preventDefault();
        setIsAboutOpen(!isAboutOpen);
    };
    // Helper do pobrania kodu kraju dla flagi na podstawie języka
    const getCurrentCountryCode = () => {
        switch(i18n.language) {
            case 'en': return 'GB';
            case 'pl': return 'PL';
            case 'ko': return 'KR'; // Korea Południowa
            case 'ja': return 'JP'; // Japonia
            default: return 'PL';
        }
    };

    // Consolidated scroll function
    const scrollToSection = (id, blockPosition = 'start') => (e) => {
        e.preventDefault(); // Prevents the '#' from jumping the page
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ 
                block: blockPosition, 
                behavior: 'smooth' 
            });
        }
    };
    // Funkcja zmiany języka
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    // FUNKCJA: Przewijanie na górę po kliknięciu logo
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsMenuOpen(false); // Zamyka hamburgera po powrocie na górę
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        
        // CLEANUP: Removes the listener when component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Empty array ensures this only runs once on mount

    // Zamykanie menu po kliknięciu w link
    const handleNavClick = (id, position) => (e) => {
        scrollToSection(id, position)(e);
        setIsMenuOpen(false); 
    };

    return ( 
        <>
            <Helmet>
                {/* Tytuł strony pobierany z plików i18n */}
                <title>{t('seo_title')}</title>
                <meta name="description" content={t('seo_description')} />
                
                {/* Język strony dla robotów Google */}
                <html lang={i18n.language} />

                {/* Tagi Open Graph (dla Facebooka/LinkedIn) */}
                <meta property="og:title" content={t('seo_title')} />
                <meta property="og:description" content={t('seo_description')} />
                <meta property="og:type" content="website" />
            </Helmet>
            <header className={`header ${isScrolled ? "ScrollOn" : "ScrollOff"}`}>
                <img src={image} onClick={scrollToTop} alt='Logo Universal Express' style={{ cursor: 'pointer' }}/>
                {/* Przycisk Hamburgera (widoczny tylko na mobile) */}
                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
                </div>
                <ul className={`nav nav-pills nav-fill ${isMenuOpen ? "nav-active" : ""}`}>
                    <li className="nav-item">
                        {/* t('klucz') pobierze tekst z pliku i18n.js */}
                        <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); setIsAboutOpen(true); setIsMenuOpen(false); }}>
                            {t('nav_who')}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleNavClick('procedures')}>{t('nav_procedures')}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleNavClick('gallery')}>{t('nav_gallery')}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleNavClick('contact-form', 'center')}>{t('nav_contact-form')}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleNavClick('contact', 'end')}>{t('nav_contact')}</a>
                    </li>
                    <li className={`dropdown ${isLangOpen ? 'open' : ''}`} 
                        onMouseEnter={() => setIsLangOpen(true)} 
                        onMouseLeave={() => setIsLangOpen(false)}
                        onClick={() => setIsLangOpen(!isLangOpen)} // Otwieranie kliknięciem
    >
                        <div className='dropbtn'>
                            <ReactCountryFlag countryCode={getCurrentCountryCode()} svg />
                            <TbWorldDown />
                        </div>
                    
                    <div className='dropdown_content' style={{ display: isLangOpen ? 'block' : 'none' }}>
                        <button onClick={() => changeLanguage('pl')}>
                            <ReactCountryFlag countryCode="PL" svg /> <span>Polski</span>
                        </button>
                        <button onClick={() => changeLanguage('en')}>
                            <ReactCountryFlag countryCode="GB" svg /> <span>English</span>
                        </button>
                        <button onClick={() => changeLanguage('ko')}>
                            <ReactCountryFlag countryCode="KR" svg /> <span>한국어</span>
                        </button>
                        <button onClick={() => changeLanguage('ja')}>
                            <ReactCountryFlag countryCode="JP" svg /> <span>日本語</span>
                        </button>
                    </div>
                </li>            
                </ul>
            </header>
            {isAboutOpen && (
                    <div className="modal-overlay" onClick={toggleAboutModal}>
                        <div className="modal_border">
                            <div className="modal_border2">
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={toggleAboutModal}>&times;</button>
                            <h2>{t('nav_who')}</h2>
                            <p>{t('about_text')}
                            </p>
                        </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
}

export default Header;