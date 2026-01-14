import React from 'react';
import s from '../style/SectionWrap.module.scss';
const SectionWrap = () => {
    return ( 
        <>
            <div className={s.paralax}>
                <div className={s.sectionBkg1}>
                    <div className={s.text_area}>
                        <h2>BEZPIECZEŃSTWO</h2>
                        <p>UNIVERSAL EXPRESS  ZABIERZE  TWÓJ TRUD I UCZYNI  TWOJĄ PRZEPROWADZKĘ BEZSTRESOWĄ</p>
                    </div>
                </div>
                <div className={s.sectionBkg2}>
                    <div className={s.text_area}>
                        <h2>KOMUNIKACJA</h2>
                        <p>UNIVERSAL EXPRESS zobowiązuje sie aby informować Cię na każdym kroku dotyczącym Twojej wysyłki od początku do zakończenia usługi</p>
                    </div>
                </div>
                <div className={s.sectionBkg3}>
                    <div className={s.text_area}>
                        <h2>Konkurencyjne ceny oraz atrakcyjny czas realizacji</h2>
                        <p>Oferujemy Państwu rozsądne ceny w oparciu o jakości usług aby sprostać Twoim potrzebom i oczekiwaniom dotyczące usługi dostawy</p>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default SectionWrap;