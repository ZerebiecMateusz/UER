import React from 'react';
import s from '../style/SectionWrap.module.scss';
import { useTranslation } from 'react-i18next';
const SectionWrap = () => {
    const { t } = useTranslation();

    // Definiujemy strukturę sekcji (tylko to, co techniczne)
    const paralaxSections = [
        { id: 1, bkgClass: s.sectionBkg1, title: 'safety_title', desc: 'safety_desc' },
        { id: 2, bkgClass: s.sectionBkg2, title: 'comm_title', desc: 'comm_desc' },
        { id: 3, bkgClass: s.sectionBkg3, title: 'price_title', desc: 'price_desc' },
    ];
    return ( 
        <div className={s.paralax}>
            {paralaxSections.map((section) => (
                <div key={section.id} className={section.bkgClass}>
                    <div className={s.text_area}>
                        {/* Pobieramy tłumaczenie używając kluczy z tablicy */}
                        <h2>{t(`sections.${section.title}`)}</h2>
                        <p>{t(`sections.${section.desc}`)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SectionWrap;