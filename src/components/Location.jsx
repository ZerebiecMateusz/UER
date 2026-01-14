import React from "react";
import s from '../style/Location.module.scss';
const Location = () => {
    return ( 
        <>
            <div className={s.google_map_code}>
                <div className={s.location_Cracow}>
                    <h1>Kraków</h1>
                    <div className={s.map}>
                        <h2>Biuro</h2>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.5143191928723!2d19.9237122!3d50.0953795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a4410322675%3A0x8703f518da0da5b2!2sUniversal%20Express%20Relocations%20Sp.%20z%20o.o.!5e0!3m2!1sen!2spl!4v1764854229118!5m2!1sen!2spl"
                        width="450"
                        height="450"
                        frameborder="1"
                        style={{ border: 10 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        />
                    </div>
                    <div className={s.map}>
                        <h2>Magazyn</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81959.77729108983!2d19.88579591888769!3d50.06300988716477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716453bb04cccb7%3A0xbea56089c6359209!2sUniversal%20Express%20Relocations%20-%20MAGAZYN!5e0!3m2!1sen!2spl!4v1764854654970!5m2!1sen!2spl" 
                        width="450"
                        height="450"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        />
                    </div>
                </div>
                <div className={s.location_Warsaw}>
                    <h1>Warszawa</h1>
                    <div className={s.map}>
                        <h2>Biuro</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39142.57252055717!2d20.87307929992675!3d52.18140553076032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719330007e75139%3A0x9d6942e37c8fbd03!2sUniversal%20Express%20Relocations!5e0!3m2!1sen!2spl!4v1764854864921!5m2!1sen!2spl" 
                        width="450"
                        height="450"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        />
                    </div>
                    <div className={s.map}>
                        <h2>Magazyn</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312985.70000130107!2d20.500854271338632!3d52.20339869520866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719352f1d33b9d3%3A0x93976f7e8c42e017!2sUniversal%20Express%20FF%26E%20Storage!5e0!3m2!1sen!2spl!4v1764854970563!5m2!1sen!2spl" 
                        width="450"
                        height="450"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Location;