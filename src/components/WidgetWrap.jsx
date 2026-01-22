import React from 'react';
import { useTranslation } from 'react-i18next';
import s from '../style/WidgetWrap.module.scss';
const WidgetWrap = () => {
    const { t } = useTranslation();
    // Tworzymy tablicę z numerami logo, aby wygenerować je automatycznie
    const logos = [1, 2, 3, 4, 5, 6, 7];
    return ( 
        <div className={s.widget}>
            {/* Tłumaczenie nagłówka i opisu */}
            <h1>{t('widget.title')}</h1>
            <p>{t('widget.description')}</p>

            <div className={s.accreditation}>
                {logos.map((num) => (
                    <div 
                        key={num} 
                        id={s[`logo${num}`]} 
                        className={s.logo}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default WidgetWrap;