import React from 'react'
import s from '../style/Header.module.scss';
import image from "../assets/Logo.svg";
import { TbWorldDown } from "react-icons/tb";
const Header = () => {
    return ( 
        <header className={s.header}>
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
                <li className={s.dropdown}>
                    <a href="#" className={s.dropbtn}><TbWorldDown /></a>
                    <div className={s.dropdown_content}>
                    <a href="#">Polski</a>
                    <a href="#">English</a>
                    </div>
                </li>             
                </ul>
        </header>);
}
 
export default Header;