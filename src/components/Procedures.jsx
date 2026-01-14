import React, { useState, useEffect, useRef, useCallback } from 'react';

const Procedures = ({ items }) => {
  const [mouseOffset, setMouseOffset] = useState({ offsetX: 0, offsetY: 0 });
  // Stan sprawdzający, czy sekcja jest widoczna na ekranie
  const [isInView, setIsInView] = useState(false);
  
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  // Funkcja obsługująca ruch myszy
  const handleMouseMove = useCallback((e) => {
    // Animujemy TYLKO wtedy, gdy sekcja jest w widoku
    if (!isInView) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const offsetX = 0.5 - e.pageX / w;
    const offsetY = 0.5 - e.pageY / h;
    
    setMouseOffset({ offsetX, offsetY });
  }, [isInView]);

  useEffect(() => {
    // 1. Konfiguracja Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aktualizujemy stan w zależności od tego, czy element jest w widoku
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0.1 // Animacja zacznie działać, gdy 10% sekcji pojawi się na ekranie
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // 2. Nasłuchiwanie myszy
    window.addEventListener('mousemove', handleMouseMove);

    // Czyszczenie
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const { offsetX, offsetY } = mouseOffset;
  const offsetPoster = 20; // Możesz to trzymać w zmiennej lub pobierać z data-attribute

  const transformMenu = isInView 
    ? `translate3d(0, ${-offsetX * offsetPoster}px, 0) rotateX(${-offsetY * offsetPoster}deg) rotateY(${offsetX * (offsetPoster * 2)}deg)`
    : 'none'; // Resetuj pozycję, gdy nie widać sekcji (opcjonalnie)

  return (
    <section 
      ref={containerRef} 
      className="Menu-container" 
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <ul 
        className="Menu-list" 
        ref={menuRef}
        style={{ 
          transform: transformMenu,
          transition: 'transform 0.5s ease-out', // Płynne wejście/wyjście
          opacity: isInView ? 1 : 0, // Opcjonalnie: pojawianie się menu
          pointerEvents: isInView ? 'auto' : 'none'
        }}
      >
        {items.map((item, index) => {
          const offsetLayer = item.offset || 10;
          const transformItem = isInView 
            ? `translate3d(${offsetX * offsetLayer}px, ${offsetY * offsetLayer}px, 20px)`
            : 'none';

          return (
            <li 
              key={index} 
              className="Menu-list-item" 
              data-label={item.label}
              style={{ 
                transform: transformItem,
                transition: 'transform 0.2s ease-out'
              }}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Procedures;


//sdfffjnik
//

//
////

import React from "react";
import '../style/Procedures.css'; // Importujemy style
import check from '../style/procedures/check.png';
import boxCarton from '../style/procedures/boxCarton.png';
import airplane from '../style/procedures/airplane.png';
import truck from '../style/procedures/truck.png'
const Procedures = () => {
  return ( 
    <>
      <div className="procedures_container">
        <h1 className="procedures-title">Procedury</h1>
        <div className="section1">
          <div className="circle" id="circle1">
            <img src={check}></img>
            Analiza<br/> domu/biura
            </div>
          <p>Twój konsultant dokona inspekcji Twoich towarów, wyjaśni jak je przygotować i omówi kwestie związane z wysyłką.</p>
        </div>
        <div id="arrow1" className="arrow"></div>
        <div className="section2">
          <div className="circle" id="circle2">
            <img src={boxCarton}></img>
            Pakowanie<br/> domu/biura
          </div>
          <p>Profesjonalny zespół pakujący zadba o Twoje wartościowe przedmioty w sposób bezpieczny.</p>
        </div>
        <div id="arrow2" className="arrow"></div>
        <div className="section3">
          <div className="circle" id="circle3">
            <img src={airplane}></img>
            Wysyłka/relokacja<br/>mienia
            </div>
          <p>Zapewniamy optymalne usługi transportu morskiego, lotniczego i lądowego w bezpieczny sposób.</p>
        </div>
        <div id="arrow3" className="arrow"></div>
        <div className="section4">
          <div className="circle" id="circle4">
            <img src={truck}></img>
            Dostawa na adres
            </div>
          <p>Po przybyciu przesyłki dokonujemy terminowej odprawy celnej i dostarczamy Twój ładunek na czas.</p>
        </div>
      </div>
    </>
   );
}
 
export default Procedures;