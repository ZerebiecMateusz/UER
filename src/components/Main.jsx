import React from 'react';
import image from "../assets/Magazyn.jpeg";
import logo from "../assets/Logo.svg";
import s from '../style/Main.module.scss';

const Main = () => {
    return ( 
        <>   
            <img className={s.storage} src={image} alt="storage picture" />
            <h1>PROFESSIONAL MOVING AND STORAGE</h1>
            <img className={s.logo} src={logo} alt="Universal Express Logo" />
               {/* animation tiles*/ }
            <div className={s.box_flip}> 
                <div className={`${s.item} ${s.box_a}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>4 170 858</div>
                    <div className={s.back}>Jakis tam tekst 01</div>
                    </div>
                </div>
                <div className={`${s.item} ${s.box_b}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>10 804 978</div>
                    <div className={s.back}>Jakis tam tekst 02</div>
                    </div>
                </div>
                <div className={`${s.item} ${s.box_c}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>6 411 073</div>
                    <div className={s.back}>Jakis tam tekst 03</div>
                    </div>
                </div>
                <div className={`${s.item} ${s.box_d}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>995</div>
                    <div className={s.back}>Jakis tam tekst 04</div>
                    </div>
                </div>
                <div className={`${s.item} ${s.box_e}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>3 582 071</div>
                    <div className={s.back}>Jakis tam tekst 05</div>
                    </div>
                </div>
            </div>
        </>

 );
}
 
export default Main;