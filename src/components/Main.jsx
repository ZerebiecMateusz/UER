// Assets
import React, { useState } from 'react'; // Importujemy useState
import s from '../style/Main.module.scss';
import { useTranslation } from 'react-i18next'; // Import hooka
import image from "../assets/storage.jpg";
import logo from "../assets/Logo.svg";

import international from "../style/main/international.svg";
import international_back from "../style/main/przeprowadzki-miedzynarodowe.jpg";
import domestic from "../style/main/domestic.svg";
import domestic_back from "../style/main/domestic_back.jpg";
import storage from "../style/main/storage.svg";
import storage_back from "../style/main/storage_back.jpg";
import office from "../style/main/office.svg";
import office_back from "../style/main/office_back.avif";
import commercial from "../style/main/commercial.svg";
import commercial_back from "../style/main/commercial_back.jpg";

// Company Logos
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.webp";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";

const Main = () => {
    const { t } = useTranslation();
    // Stan przechowujący id otwartego opisu (null oznacza, że nic nie jest otwarte)
    const [activeDescription, setActiveDescription] = useState(null);

    // Funkcja do płynnego przewijania
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-form');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

const services = [
        { id: 'a', key: 'international', icon: international, backImg: international_back },
        { id: 'b', key: 'domestic', icon: domestic, backImg: domestic_back },
        { id: 'c', key: 'storage', icon: storage, backImg: storage_back },
        { id: 'd', key: 'office', icon: office, backImg: office_back },
        { id: 'e', key: 'commercial', icon: commercial, backImg: commercial_back },
    ];

    // Arrays for the scrolling logo tickers
    const rowOneLogos = [logo1, logo2, logo3, logo4, logo5];
    const rowTwoLogos = [logo6, logo7, logo8, logo9, logo10];

    return (
        <>
            <img className={s.storage} src={image} alt="storage" />
            <h1 className={s.storageH1}>PROFESSIONAL MOVING AND STORAGE</h1>
            <h2 className={s.storageH2}>{t('main_quote')}</h2>
            <img className={s.logo} src={logo} alt="Universal Express Logo" />
            {/*kontakt button*/}
            <div className={s.buttonWrapper}>
                <button onClick={scrollToContact} className={s.contactBtn}>
                    {t('contact_button')}
                </button>
            </div>

            {/* Animation Tiles */}
            <div className={s.box_flip}>
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className={`${s.item} ${s[`box_${service.id}`]}`}
                        onClick={() => setActiveDescription(service.id)} // Otwieranie po kliknięciu w kafelek
                    >
                        <div className={s.row_item}>
                            <div className={s.front}>
                                <img src={service.icon} alt={t(`services.${service.key}`)} />
                                {/* Dynamiczne tłumaczenie tytułu */}
                                <span>{t(`services.${service.key}`)}</span>
                            </div>
                            <div className={s.back}>
                                <img src={service.backImg} alt={t(`services.${service.key}`)} />
                            </div>
                        </div>

                        {/* Warunkowe renderowanie nakładki z opisem */}
                        {activeDescription === service.id && (
                            <div 
                                className={s.descriptionOverlay}
                                onClick={(e) => {
                                    e.stopPropagation(); // Zapobiega ponownemu otwarciu przez rodzica
                                    setActiveDescription(null); // Zamykanie po kliknięciu w tekst
                                }}
                            >
                                {/* Dynamiczne tłumaczenie opisu */}
                                <p>{t(`services.desc_${service.key}`)}</p>
                                <span>{t('services.click_to_close')}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Partner Logos Ticker */}
            <div className={s.container}>
                {[rowOneLogos, rowTwoLogos].map((logoRow, rowIndex) => (
                    <div key={rowIndex} className={s.LogoCompany}>
                        {/* We duplicate the array to ensure the infinite scroll loop is seamless */}
                        {[...logoRow, ...logoRow].map((img, imgIndex) => (
                            <div key={imgIndex} className={s.logo_Container}>
                                <img className={s.logo_img} src={img} alt="Partner Logo" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Main;