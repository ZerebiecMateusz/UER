import React from 'react';
import image from "../assets/storage.jpg";
import logo from "../assets/Logo.svg";
import s from '../style/Main.module.scss';
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
import profesjonalizm from "../assets/profesjonalizm.jpg";
import rzetelność from "../assets/rzetelność.jpeg";
import niezawodność from "../assets/niezawodność.jpeg";
import bezpieczeństwo from "../assets/bezpieczeństwo.jpg";  
import zaufanie from "../assets/zaufanie.jpeg";

const Main = () => {
    return ( 
        <>   
            <img className={s.storage} src={image} alt="storage picture" />
            <h1 className={s.storageH1}>PROFESSIONAL MOVING AND STORAGE</h1>
            <h2 className={s.storageH2}>"Jakość to nie akt, to nawyk.” - Arystoteles.</h2>
            <img className={s.logo} src={logo} alt="Universal Express Logo" />
               {/* animation tiles*/ }
            <div className={s.box_flip}> 
                <div className={`${s.item} ${s.box_a}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>Zaufanie</div>
                    <div className={s.back}>
                        <img src={zaufanie} alt="zaufanie zdjecie" />
                    </div>
                    </div>
                </div>
                <div className={`${s.item} ${s.box_b}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>Rzetelność</div>
                    <div className={s.back}>
                        <img src={rzetelność} alt="rzetelność zdjecie" />
                    </div>
                    </div>
                </div>
                <div className={`${s.item} ${s.box_c}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>Profesjonalizm</div>
                    <div className={s.back}>
                        <img src={profesjonalizm} alt="bizneswoman zdjecie" />
                    </div>
                    </div>
                </div>
                <div className={`${s.item} ${s.box_d}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>Niezawodność</div>
                    <div className={s.back}>
                        <img src={niezawodność} alt="niezawodność zdjecie" />
                    </div>
                    </div>
                </div>
                <div className={`${s.item} ${s.box_e}`}>
                    <div className={s.row_item}>
                    <div className={s.front}>Bezpieczeństwo</div>
                    <div className={s.back}>
                        <img src={bezpieczeństwo} alt="bezpieczeństwo zdjecie" />
                    </div>
                    </div>
                </div>
            </div>
            {/* animation tiles_logo company*/ }
            <div className={s.container}>
                    <div className={s.LogoCompany}>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo1} alt="AliorBank logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo2} alt="hsbc logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo3} alt="motorola logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo4} alt="netflix logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo5} alt="nokia logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo1} alt="AliorBank logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo2} alt="hsbc logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo3} alt="motorola logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo4} alt="natflix logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo5} alt="nokia logo" />
                        </div>
                    </div>
                    <div className={s.LogoCompany}>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo6} alt="seen logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo7} alt="epam logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo8} alt="heineken logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo9} alt="bp logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo10} alt="ABB logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo6} alt="seen logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo7} alt="epam logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo8} alt="heineken logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo9} alt="bp logo" />
                        </div>
                        <div className={s.logo_Container}>
                            <img className={s.logo_img} src={logo10} alt="ABB logo" />
                        </div>
                    </div>
            </div>
            
            
        </>

 );
}
 
export default Main;