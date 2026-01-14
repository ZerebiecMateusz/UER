import React from 'react'
import { useState, useEffect } from 'react';
import '../style/Header.css';
import image from "../assets/Logo.svg";
import { TbWorldDown } from "react-icons/tb";
const Header = () => {
    const [ScrollOn, setScrollOn] = useState("ScrollOff");

    const listenScrollEvent = () => {
        window.scrollY > 10
          ? setScrollOn("ScrollOn")
          : setScrollOn("ScrollOff");
      }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent)
    })
    
    return ( 
        <header className={`header ${ScrollOn}`}>
            <img src={image} alt='Logo Universal Express'/>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Przeprowadzki</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Relokacje</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Porady</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Magazyn</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Zapytanie</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Kontakt</a>
                </li>
                <li className='dropdown'>
                    <a href="#" className='dropbtn'><TbWorldDown /></a>
                    <div className='dropdown_content'>
                    <a href="#">Polski</a>
                    <a href="#">English</a>
                    </div>
                </li>             
                </ul>
        </header>);
}
 
export default Header;