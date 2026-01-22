import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import '../style/Procedures.css'; 

import check from '../style/procedures/check.png';
import boxCarton from '../style/procedures/boxCarton.png';
import airplane from '../style/procedures/airplane.png';
import truck from '../style/procedures/truck.png';

const PROCEDURES_DATA = [
  { id: 1, key: "step1", icon: check },
  { id: 2, key: "step2", icon: boxCarton },
  { id: 3, key: "step3", icon: airplane },
  { id: 4, key: "step4", icon: truck },
];

const Procedures = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return ( 
    <section 
      ref={sectionRef} 
      className={`procedures_container ${isVisible ? "animate" : ""}`}
      id="procedures"
    >
      <h1 className="procedures-title">{t('procedures.main_title')}</h1>

      {PROCEDURES_DATA.map((step, index) => {
        // Pobieramy przetłumaczony tytuł i opis na podstawie klucza
        const translatedTitle = t(`procedures.${step.key}_title`);
        const translatedDesc = t(`procedures.${step.key}_desc`);

        return (
          <React.Fragment key={step.id}>
            <div className={`section${step.id}`}>
              <div className="circle" id={`circle${step.id}`}>
                <img src={step.icon} alt={translatedTitle} />
                
                {/* Obsługa łamania linii \n z plików tłumaczeń */}
                {translatedTitle.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== translatedTitle.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
              <p>{translatedDesc}</p>
            </div>
            
            {index < PROCEDURES_DATA.length - 1 && (
              <div id={`arrow${step.id}`} className="arrow"></div>
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
}

export default Procedures;