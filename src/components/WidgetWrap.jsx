import React from 'react';
import s from '../style/WidgetWrap.module.scss';
const WidgetWrap = () => {
    return ( 
        <>
            <div className={s.widget}>
                <h1>Jakość & Akredytacje</h1>
                <p>Dysponując globalną siecią i szeroką bazą pracowników, wywiązujemy się ze swoich zobowiązań wobec klientów i pracowników, oferując wysokiej jakości programy opracowane w oparciu o najlepsze praktyki wiodących stowarzyszeń branżowych.</p>
                <div className={s.accreditation}>
                    <div id={s.logo1} className={s.logo}></div>
                    <div id={s.logo2} className={s.logo}></div>
                    <div id={s.logo3} className={s.logo}></div>
                    <div id={s.logo4} className={s.logo}></div>
                    <div id={s.logo5} className={s.logo}></div>
                    <div id={s.logo6} className={s.logo}></div>
                    <div id={s.logo7} className={s.logo}></div>
                </div>
            </div>
        </> 
    );
}
 
export default WidgetWrap;